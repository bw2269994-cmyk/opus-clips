# Clipwise

Clipwise is a polished front-end prototype for an AI-powered short-form video clipping workflow. Drop a YouTube, Vimeo, or podcast URL (or upload a video) to start analyzing content and finding high-performing moments.

## Features

- Drag-and-drop URL or video upload interface
- Responsive workspace dashboard
- Recent clips with visual previews, durations, view counts, and AI ratings
- Filter clips by all, top rated, or drafts
- Interactive upload/analyze feedback states

## Run locally

This is a dependency-free static app. Open `index.html` in a browser, or serve the directory with any static server:

```bash
python3 -m http.server 8000
```

The current analysis flow is mocked in the browser. Connect the button handler in `app.js` to your transcription, clip generation, and rating API to make it production-ready.
