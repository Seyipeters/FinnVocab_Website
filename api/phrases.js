const { readJson, allowCors, handleOptions } = require('./_utils');

module.exports = async function handler(req, res) {
  allowCors(res);
  if (handleOptions(req, res)) return;

  try {
    const data = await readJson('phrases.json');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to load phrases', error: error.message });
  }
};
