const fs = require('fs/promises');
const path = require('path');

async function readJson(fileName) {
  const fullPath = path.join(process.cwd(), 'api-data', fileName);
  const raw = await fs.readFile(fullPath, 'utf8');
  return JSON.parse(raw);
}

function allowCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function handleOptions(req, res) {
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return true;
  }
  return false;
}

module.exports = {
  readJson,
  allowCors,
  handleOptions,
};
