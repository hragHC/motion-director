# Motion Director V1

A custom transcript → AI Director → 2×2 design → After Effects package workflow.

## What it does

- Upload `.srt` or `.txt`
- Analyze the transcript into 25–35 motion-graphics opportunities
- Select an idea and chat/refine it
- Generate one 2×2 panel of four design directions
- Click one quadrant
- Download an AE ZIP

## Architecture

GitHub Pages is static, so **do not put an OpenAI API key in the frontend**.

Recommended:

```text
GitHub Pages frontend
        ↓
Vercel backend from this same repo
        ↓
OpenAI API
```

You may also deploy the whole repo on Vercel and skip GitHub Pages.

## 1. Upload to GitHub

Upload the files/folders exactly as supplied.

Enable GitHub Pages:

**Repository → Settings → Pages → Deploy from branch → main → / (root)**

## 2. Deploy the backend

Import the same GitHub repository into Vercel.

Add this environment variable in Vercel:

```text
OPENAI_API_KEY=your_api_key
```

Optional overrides:

```text
OPENAI_TEXT_MODEL=gpt-5.6
OPENAI_IMAGE_MODEL=gpt-image-2
```

Never commit the key to GitHub.

## 3. Connect the frontend

Open the GitHub Pages site, click **Backend settings**, and paste the Vercel deployment URL, e.g.

```text
https://your-project.vercel.app
```

The backend URL is stored in your browser local storage.

## 4. Use it

1. Upload SRT/TXT.
2. Click **PROCESS TRANSCRIPT**.
3. Select an idea.
4. Chat/refine.
5. Click **GENERATE 2×2 DESIGN PANEL**.
6. Click one quadrant.
7. Click **PACKAGE FOR AFTER EFFECTS**.
8. Download the ZIP.

## AE packaging status

### Included now: V1 flattened package

The generated ZIP contains:

```text
original/selected_design.png
layers/01_flattened_design.png
design.json
README.txt
```

This is intentionally honest: a flattened generated design does not magically contain reliable editable layers.

### Next phase: true V4 multi-layer package

That will add:

- semantic element detection
- transparent element masks
- multiline text splitting
- visual-picker hit regions
- automatic `design.json` layer metadata

## Security

- Never put an API key in `index.html`, `app.js`, or `config.js`.
- Keep secrets only in the backend deployment environment variables.
- OpenAI API usage is separate from a ChatGPT subscription.
