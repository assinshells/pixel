import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/widgets/Header/ui/Header";
import { Footer } from "@/widgets/Footer/ui/Footer";
import { PurchaseModal } from "@/features/purchase/ui/PurchaseModal";

export const NotFoundPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onPurchaseClick={() => {}} />

      <main className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="text-center">
            <div className="unified-card-body py-5">
              <h1 className="display-1 fw-bold text-success mb-3">404</h1>
              <h2 className="h3 mb-3 text-dark">Page Not Found</h2>

              <p
                className="text-muted mb-4 fs-5"
                style={{ maxWidth: "500px", margin: "0 auto 2rem" }}
              >
                Oops! The page you're looking for doesn't exist. It might have
                been moved or deleted.
              </p>

              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/" className="btn btn-unified-primary">
                  <i className="bi bi-house-door me-2"></i>
                  Go to Homepage
                </Link>
                <Link to="/faq" className="btn btn-unified-secondary">
                  <i className="bi bi-question-circle me-2"></i>
                  View FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <PurchaseModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};
