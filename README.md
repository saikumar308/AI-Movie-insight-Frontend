# Movie Search Application
A full-stack movie search application built using React (Vite) and Node.js (Express).  Users can view movies, search by title, and fetch movie details by ID.
---
## Live Demo
Frontend (Vercel):  https://my-repositart.vercel.app  
Backend (Render):  https://ai-movie-insight-builder-ty4m.onrender.com  
---
## Setup Instructions
### 1. Clone the Repositories
Frontend:git clone https://github.com/saikumar308/AI-Movie-insight-Frontend.git
Backend:git clone https://github.com/saikumar308/AI-Movie-insight-Builder.git
---
### 2. Backend Setup
Navigate to backend folder:
cd backend
Install dependencies:
npm install
Run the server:
node index.js
Backend will run at:http://localhost:5000
Test API:http://localhost:5000/api/movies
---
### 3. Frontend Setup
Navigate to frontend folder:
cd frontend
Install dependencies:
npm install
Start development server:
npm run dev
Frontend will run at:http://localhost:5173
---
## Deployment
Frontend deployed using Vercel  Backend deployed using Render  
API calls in frontend are configured to use the deployed backend URL.
---
## Tech Stack Rationale
### Frontend- React (Vite)  - Fast development server  - Lightweight and optimized build  - Component-based UI architecture
### Backend- Node.js  - Efficient JavaScript runtime- Express.js  - Minimal and flexible REST API framework- CORS  - Enables secure cross-origin communication
### Deployment- Vercel  - Optimized for frontend frameworks like Vite  - Easy GitHub integration- Render  - Free hosting for Node.js backend  - Automatic deployment from GitHub
---
## Features
- View all movies- Search movies by title- Fetch movie by ID- Display movie details:  - Title  - Year  - Rating  - Plot  - Cast  - Sentiment
---
## Assumptions
- Movie data is stored in-memory (no database used).- IDs are unique integers.- No authentication or authorization implemented.- Backend must be deployed before frontend for API communication.- Internet connection is required for deployed version.
---
## Project Structure
Frontend (Vite + React)- src/- index.html- vite.config.js
Backend (Node + Express)- index.js- package.json
---
## Author
Sai Kumar
