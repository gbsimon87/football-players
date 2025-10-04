# MERN Template

A starter template for MERN stack applications using Vite, React Router, Tailwind CSS, and MongoDB.

## Setup
1. Install all dependencies: `npm run install:all`
2. Create `.env` files in both `client/` and `server/` based on `.env.example`
3. Generate a JWT_SECRET for the server:
   - Run the following command in the terminal to generate a secure JWT_SECRET:
     ```bash
     node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
     ```
   - Copy the output and add it to `server/.env` as `JWT_SECRET=your_generated_secret`
4. Change the `title` tag in the `client/index.html` file.
5. Run development: `npm start`
6. Build for production: `npm run build`

## Scripts
- `npm run install:all`: Installs dependencies for root, client, and server
- `npm start`: Runs both client and server in development
- `npm run server`: Runs only server
- `npm run client`: Runs only client
- `npm run build`: Builds client for production

## Project Structure
```
mern-template/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── App.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── NotFound.jsx
│   │   ├── context/
│   │   │   └── GlobalContext.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── .env
│   └── .env.example
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   └── index.js
│   ├── package.json
│   ├── .env
│   └── .env.example
├── package.json
├── .gitignore
└── README.md
```