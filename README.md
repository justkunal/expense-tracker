# Expense Tracker

This is a full-stack Expense Tracker application built with React.js for the frontend and Node.js with Express for the backend, using MongoDB as the database.

## Features

* Add new expenses with amount, category, date, and description.
* Filter expenses by category and date.
* View expenses as sticky notes.
* Visualize expense data with pie charts and bar charts.
* Calculate total expenses within a specified date range.
* Remove individual expenses.

## Prerequisites

* Node.js (v14 or higher)
* npm (Node Package Manager) or yarn
* MongoDB (local or cloud-based like MongoDB Atlas)
* Git

## Setup

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd expense-tracker
    ```

2.  **Backend Setup:**

    * Navigate to the backend directory:

        ```bash
        cd backend
        ```

    * Install dependencies:

        ```bash
        npm install
        ```

    * Create a `.env` file in the `backend` directory with the following content:

        ```
        MONGODB_URI=mongodb://localhost:27017/expense-tracker # Replace with your MongoDB connection string
        PORT=5000
        ```

    * Start the backend server:

        ```bash
        npm start
        ```

3.  **Frontend Setup:**

    * Navigate to the frontend directory:

        ```bash
        cd ../frontend
        ```

    * Install dependencies:

        ```bash
        npm install
        ```

    * Start the frontend development server:

        ```bash
        npm start
        ```

4.  **Database Setup:**

    * Ensure you have MongoDB installed and running.
    * If using MongoDB Atlas, create a cluster and obtain the connection string.
    * Update the `MONGODB_URI` in the `.env` file with your connection string.

## Running Locally

1.  **Start MongoDB:** Ensure your local MongoDB instance or MongoDB Atlas cluster is running.
2.  **Start the Backend:** Navigate to the `backend` directory and run `npm start`.
3.  **Start the Frontend:** Navigate to the `frontend` directory and run `npm start`.
4.  **Access the Application:** Open your web browser and navigate to `http://localhost:3000`.

## Usage

1.  **Add Expenses:** Use the form to add new expenses.
2.  **Filter Expenses:** Use the filter inputs to filter expenses by category or date.
3.  **View Expenses:** Expenses are displayed as sticky notes.
4.  **View Charts:** Pie and bar charts display expense data by category.
5.  **Calculate Total Expenses:** Enter a start and end date and click "Get Total."
6.  **Remove Expenses:** Click "Remove" on a sticky note.

## Deployment

### Frontend (Vercel)

1.  Create a Vercel account and install the Vercel CLI.
2.  Navigate to the `frontend` directory and run `vercel`.
3.  Follow the prompts to deploy your frontend.
4.  Set any necessary environment variables in your Vercel project settings.

### Backend (Heroku, Render, etc.)

1.  Choose a platform (Heroku, Render, etc.).
2.  Create an account and install the platform's CLI.
3.  Create a `Procfile` in the `backend` directory (e.g., `web: node server.js`).
4.  Deploy your backend code following the platform's instructions.
5.  Set environment variables (e.g., `MONGODB_URI`, `PORT`) in your platform's settings.

### Database (MongoDB Atlas)

1.  Create a MongoDB Atlas account and cluster.
2.  Obtain the connection string.
3.  Update the `MONGODB_URI` in your backend's `.env` file and your deployment platform's environment variables.

### Update Frontend API Endpoint

1.  Update the API endpoint in your frontend code (axios calls) to point to your deployed backend URL.
2.  Rebuild your frontend (`npm run build`).
3.  Redeploy your frontend to Vercel.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

[MIT](LICENSE)
