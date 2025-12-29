import React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/widgets/Header/ui/Header";
import { Footer } from "@/widgets/Footer/ui/Footer";

export const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onPurchaseClick={() => {}} />

      <main className="flex-grow-1 d-flex align-items-center justify-content-center bg-light">
        <div className="container text-center py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2 className="h3 mb-3">Page Not Found</h2>

              <p className="text-muted mb-4 fs-5">
                Oops! The page you're looking for doesn't exist. It might have
                been moved or deleted.
              </p>

              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/" className="btn btn-success px-4">
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
