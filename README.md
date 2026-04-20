# FinnVocab

FinnVocab is a Finnish vocabulary learning web app with a static frontend and a lightweight Node.js + Express API backend.

## Technical Stack

- Semantic HTML5 structure
- CSS responsive layout
- Vanilla JavaScript (DOM manipulation + event handling)
- JSON-based data
- Asynchronous API calls with `fetch`
- Basic API error handling with graceful fallback

## Architecture

The project is separated into:

- **UI Layer**: [index.html](index.html), [css/style.css](css/style.css)
- **Application Logic**: [js/app.js](js/app.js)
- **Data Handling**: [js/data-service.js](js/data-service.js)
- **Backend API**: [server.js](server.js), [api-data/words.json](api-data/words.json), [api-data/phrases.json](api-data/phrases.json), [api-data/grammar.json](api-data/grammar.json)

## API Endpoints

- `GET /api/health`
- `GET /api/words`
- `GET /api/phrases`
- `GET /api/grammar`

## Run Locally

1. Install dependencies:

   npm install

2. Start the server:

   npm start

3. Open:

   http://localhost:3000

## Deployment

### Frontend (Mandatory)

Deploy the frontend to one of:

- GitHub Pages (recommended)
- Netlify
- Vercel

#### GitHub Pages (recommended)

1. Push this project to GitHub.
2. In repository settings, open **Pages**.
3. Set source to **Deploy from a branch**.
4. Select `main` branch and `/ (root)` folder.
5. Save and wait for the public URL.

### Backend (Recommended)

Deploy [server.js](server.js) to a Node host (e.g., Render, Railway, Fly.io, or similar).

#### Render quick setup

1. Create a new **Web Service** from your GitHub repo.
2. Build command: `npm install`
3. Start command: `npm start`
4. Deploy and copy the public backend URL.

Then set the backend base URL in [js/config.js](js/config.js):

`window.FINNVOCAB_API_BASE = 'https://your-backend-url.onrender.com';`

Commit and redeploy frontend.

## Fallback Behavior (Documented Limitation)

If `/api/*` is unavailable (for example on static-only hosting), the app continues using built-in local data in [js/app.js](js/app.js).

This ensures core learning features remain functional even without public backend hosting.

## Note on local run

If `npm` is not found on your machine, install Node.js (LTS) first, then run `npm install` and `npm start`.