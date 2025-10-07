# Job Portal

A full-stack job portal application that connects recruiters and job seekers. Recruiters can post job openings, and candidates can browse and apply for jobs.

## Features

*   **User Authentication:** Secure user registration and login for recruiters and job seekers.
*   **Job Management:** Recruiters can create, update, and delete job postings.
*   **Job Browsing:** Candidates can search and filter job listings.
*   **Role-Based Access:** Separate interfaces and functionality for recruiters and employees.
*   **RESTful API:** A well-defined API for managing users and jobs.

## Tech Stack

*   **Frontend:**
    *   React
    *   Vite
    *   Tailwind CSS
    *   React Router
*   **Backend:**
    *   Node.js
    *   Express.js
    *   Prisma (PostgreSQL)
*   **Dev Tools:**
    *   ESLint
    *   Concurrently

## Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm
*   PostgreSQL

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://your-repository-url.com/
    cd jobportal
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up the database:**
    *   Create a PostgreSQL database.
    *   Create a `.env` file in the root directory and add your database URL:
        ```
        DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
        ```
    *   Apply the database schema:
        ```bash
        npx prisma migrate dev
        ```

4.  **Run the application:**
    ```bash
    npm run dev
    ```
    This will start both the client and server in development mode.

    *   Client: `http://localhost:5173`
    *   Server: `http://localhost:3000`

## Project Structure

```
/
├── prisma/             # Prisma schema and migrations
├── public/             # Public assets
├── src/
│   ├── assets/         # React assets
│   ├── components/     # React components
│   ├── pages/          # React pages
│   ├── server/         # Express server
│   │   ├── middleware/ # Express middleware
│   │   └── routes/     # Express routes
│   ├── App.css         # Main app styles
│   ├── App.jsx         # Main React component
│   ├── index.css       # Global styles
│   └── main.jsx        # React entry point
├── .env                # Environment variables
├── .gitignore          # Git ignore file
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

## API Endpoints

### Auth Routes

*   `POST /api/auth/register`: Register a new user.
*   `POST /api/auth/login`: Log in a user.

### Job Routes

*   `GET /api/jobs`: Get all jobs.
*   `GET /api/jobs/:id`: Get a job by ID.
*   `POST /api/jobs`: Create a new job.
*   `PUT /api/jobs/:id`: Update a job.
*   `DELETE /api/jobs/:id`: Delete a job.

## License

This project is licensed under the MIT License.