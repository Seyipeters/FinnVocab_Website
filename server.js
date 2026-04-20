const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs/promises');

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

app.use(cors());
app.use(express.json());
app.use(express.static(ROOT));

async function readJson(fileName) {
  const fullPath = path.join(ROOT, 'api-data', fileName);
  const raw = await fs.readFile(fullPath, 'utf8');
  return JSON.parse(raw);
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'finnvocab-api' });
});

app.get('/api/words', async (_req, res) => {
  try {
    const data = await readJson('words.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to load words', error: error.message });
  }
});

app.get('/api/phrases', async (_req, res) => {
  try {
    const data = await readJson('phrases.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to load phrases', error: error.message });
  }
});

app.get('/api/grammar', async (_req, res) => {
  try {
    const data = await readJson('grammar.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to load grammar', error: error.message });
  }
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`FinnVocab server running on http://localhost:${PORT}`);
});
