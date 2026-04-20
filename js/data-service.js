(function (global) {
  function getApiUrl(path) {
    var base = (global.FINNVOCAB_API_BASE || '').trim().replace(/\/$/, '');
    return base ? (base + path) : path;
  }

  function safeArray(value) {
    return Array.isArray(value) ? value : [];
  }

  async function fetchJson(path) {
    var response = await fetch(getApiUrl(path), { headers: { Accept: 'application/json' } });
    if (!response.ok) {
      throw new Error('Request failed: ' + path + ' (' + response.status + ')');
    }
    return response.json();
  }

  async function loadContent() {
    try {
      var result = await Promise.all([
        fetchJson('/api/words'),
        fetchJson('/api/phrases'),
        fetchJson('/api/grammar')
      ]);

      return {
        source: 'api',
        words: safeArray(result[0]),
        phrases: safeArray(result[1]),
        grammar: safeArray(result[2]),
        error: null
      };
    } catch (error) {
      return {
        source: 'fallback',
        words: [],
        phrases: [],
        grammar: [],
        error: error
      };
    }
  }

  global.DataService = {
    loadContent: loadContent
  };
})(window);
