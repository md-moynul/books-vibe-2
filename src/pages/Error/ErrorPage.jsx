import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center bg-base-200 px-4 min-h-screen">
      
      <div className="bg-base-100  shadow-xl w-full max-w-md text-center card">
        <div className="card-body">
          
          <h1 className="font-extrabold text-primary text-7xl">404</h1>

          <h2 className="font-semibold text-2xl">
            Page Not Found
          </h2>

          <p className="text-base-content/70">
            Oops! The page you are looking for doesn’t exist.
          </p>

          <div className="justify-center gap-3 mt-4 card-actions">
            
            <Link to="/" className="btn btn-primary">
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="btn-outline btn"
            >
              Go Back
            </button>

          </div>

        </div>
      </div>

    </div>
  );
};

export default ErrorPage;