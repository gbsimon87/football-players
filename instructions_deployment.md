## 🚀 Deploying MERN (Vite + Express) to Render

You’ll end up with **two Render services**:

1. **Frontend (client)** → static site
2. **Backend (server)** → web service (Node app)

---

## 🧩 Step 1. Make sure your repo is clean and pushed to GitHub

From your project root:

```bash
git add .
git commit -m "prepare for render deployment"
git push origin main
```

Render deploys directly from GitHub, so you’ll need that connected.

---

## ⚙️ Step 2. Configure your backend (server)

**No structural changes needed** — your current `server/package.json` is fine.
Just make sure it’s using `"type": "module"` since your code uses `import` syntax:

```json
{
  "name": "mern-server",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node src/index.js"
  },
  "dependencies": {
    "express": "latest",
    "mongoose": "latest",
    "dotenv": "latest",
    "cors": "latest",
    "jsonwebtoken": "latest"
  }
}
```

Then in `server/src/index.js`, ensure it listens on **Render’s assigned port**:

```js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Server running"));

const PORT = process.env.PORT || 5000;

// Connect to MongoDB (optional, adjust as needed)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.error(err));
```

✅ Render will inject the `PORT` environment variable automatically.

---

## 🧰 Step 3. Deploy backend to Render

1. Go to [Render Dashboard](https://render.com)
2. Click **“New → Web Service”**
3. Choose your **GitHub repo**
4. Set:

   * **Root Directory:** `server`
   * **Build Command:** `npm install`
   * **Start Command:** `npm start`
5. Add your environment variables:

   * `MONGO_URI`
   * `JWT_SECRET`
   * `ANY_OTHER_ENV`
6. Click **Deploy**.

Once deployed, you’ll get a URL like:

```
https://your-server.onrender.com
```

✅ Test it: open that URL — it should return `"Server running"`.

---

## ⚙️ Step 4. Configure your frontend (client)

In your `client/.env`, set:

```
VITE_API_URL=https://your-server.onrender.com
```

Then in your React app, wherever you make API calls (e.g. with axios):

```js
axios.get(`${import.meta.env.VITE_API_URL}/api/whatever`);
```

---

## ⚙️ Step 5. Deploy frontend to Render

1. Go to Render → **“New → Static Site”**
2. Choose the same repo.
3. Set:

   * **Root Directory:** `client`
   * **Build Command:** `npm install && npm run build`
   * **Publish Directory:** `dist`
4. Add environment variables if needed (e.g. `VITE_API_URL` again).
5. Click **Deploy**.

After deployment, you’ll get:

```
https://your-frontend.onrender.com
```

✅ Your React app is now live and making API calls to your backend.

---

## 🧭 Step 6. Fix client-side routing (SPA pages like `/page-2`)

In your React client, create a `vercel.json`-like file named `_redirects` inside `client/public`:

```
/*    /index.html   200
```

That line tells Render:

> “For any unknown path, serve index.html (let React Router handle it).”

Commit and redeploy your frontend.

✅ Now you can refresh `/page-2` and it won’t 404.

---

## 🔒 Step 7. (Optional) Use a custom domain

You can attach a custom domain to both frontend and backend in Render settings.
For example:

* Frontend → `app.mysite.com`
* Backend → `api.mysite.com`

Then just update `VITE_API_URL` accordingly.

---

## ✅ Final Summary

| Part     | Type        | Host   | Directory | Build Command                  | Start Command | Notes                  |
| -------- | ----------- | ------ | --------- | ------------------------------ | ------------- | ---------------------- |
| Frontend | Static Site | Render | `client`  | `npm install && npm run build` | —             | Add `_redirects` file  |
| Backend  | Web Service | Render | `server`  | `npm install`                  | `npm start`   | Expects `PORT` env var |

---

Would you like me to give you a **ready-to-commit `_redirects` file and example `.env` setup** (for both client and server) so you can just copy-paste and push?
