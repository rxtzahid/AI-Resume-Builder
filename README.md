## AI Resume Builder

AI Resume Builder is a small full-stack application that helps users create professional resumes using a React + Vite frontend and a Node.js + Express backend. The project includes templates, a live resume preview, image handling, and integration points for AI-assisted content generation.

## Key Features

- Create and edit personal information, experience, education, projects, skills and professional summary.
- Live resume preview using multiple templates (Classic, Minimal, Modern, Minimal with Image).
- Save and retrieve resumes from a backend (MongoDB).
- Image upload support and delivery via ImageKit.
- AI integrations for generating resume copy (server contains AI route scaffolding).

## Tech Stack

- Frontend: React (via Vite), Tailwind CSS (present in dependencies), React Router, Redux Toolkit
- Backend: Node.js, Express, MongoDB (mongoose)
- File upload: multer, ImageKit
- Auth: JSON Web Tokens (jsonwebtoken) and bcrypt
- AI: OpenAI client (openai package) — controller is present for AI prompts

## Repository Layout

- client/ — React app (Vite)
  - src/ — app source code, components, templates, pages
  - public/ — static assets
  - package.json — dev & start scripts (dev/build/preview)
- server/ — Express backend
  - controllers/ — route handlers (aiController, resumeController, userController)
  - routes/ — route modules (aiRoutes, resumeRoutes, userRoutes)
  - configs/ — db, imageKit, multer, ai configuration
  - models/ — Mongoose models (Resume, User)
  - middlewares/ — auth middleware
  - package.json — start/server scripts

## Prerequisites

- Node.js (recommended >= 18)
- npm (comes with Node) or yarn
- MongoDB instance or MongoDB Atlas connection string
- ImageKit account (optional if you want uploads to ImageKit)
- OpenAI API key (optional, for AI features)

## Environment Variables (server)

Create a `.env` file inside the `server/` directory with values similar to:

- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret
- IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
- IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
- IMAGEKIT_URL_ENDPOINT=your_imagekit_endpoint
- OPENAI_API_KEY=your_openai_api_key

Note: The AI and image features will work only if the corresponding keys are provided.

## Install & Run (Development) — Windows PowerShell

Open two terminals (one for client, one for server) or run sequentially.

Client:

```powershell
cd client
npm install
npm run dev
```

This starts the Vite dev server (default: http://localhost:5173). The client `package.json` includes these scripts:

- dev — starts the Vite dev server
- build — creates a production build
- preview — preview built site locally

Server:

```powershell
cd server
npm install
npm run server
```

This runs `nodemon server.js` (auto-restart on code changes). Use `npm start` to run with `node server.js`.

Default server port and base URL will be visible in `server/server.js` (commonly 5000 or process.env.PORT). If CORS is enabled, you can use the frontend in dev to talk to the backend.

## Build for Production

Client (build site):

```powershell
cd client
npm run build
```

Serve the built `dist` folder with a static host or integrate into a Node server.

Server (production):

```powershell
cd server
npm install --production
npm start
```

Consider using a process manager (pm2) or containerization for production deployment.

## API Summary

The server organizes routes under `server/routes/`.

Common endpoints (verify exact paths in each `routes/*.js` file):

- POST /api/users/register — register a user (if implemented)
- POST /api/users/login — login (returns JWT)
- GET/POST /api/resumes — create, list, retrieve, update resumes
- POST /api/ai/generate — AI generation endpoint used for generating summaries or bullets (controller exists)

Check the files in `server/routes` and `server/controllers` for precise route details and payload shapes.

## Templates & Frontend

Frontend templates live under `client/src/assets/templates/` and `client/src/components/templates/` (Classic, Minimal, MinimalImage, Modern). The `ResumePreview` component composes selected template components with form data from the builder.

## Testing & QA

- Quick smoke test: run client and server locally, create a resume in the UI and save it. Confirm a new document appears in your MongoDB (collection: resumes).
- If image upload is used, verify the images appear in ImageKit (or local upload storage depending on config).

## Troubleshooting

- CORS errors: ensure the backend allows requests from the dev origin (e.g., http://localhost:5173) or proxy requests through Vite.
- Mongo connection errors: verify `MONGO_URI` and network/whitelist settings for Atlas.
- AI errors: confirm `OPENAI_API_KEY` is present and has usage quota.

## Contribution

Contributions are welcome. Suggested workflow:

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/some-feature`
3. Make changes and add tests (where applicable)
4. Open a pull request with a clear description of changes

Please follow the existing code style and add small, focused commits.

## Next Steps (ideas)

- Add unit and integration tests for backend controllers
- Add E2E tests for the resume creation flow
- Add CI workflow for lint/build/tests
- Add a production-ready Dockerfile and docker-compose for easy local deploy

## License

Add a license file (e.g., MIT) at repository root if you want to open-source the project.

---

If you want, I can also:

- Inspect routes/controllers and add a precise API reference section with request/response examples.
- Add a small troubleshooting checklist tailored to errors found while running the project locally.

If you'd like me to commit small follow-ups (API reference, Dockerfile, CI), tell me which one to do next.
