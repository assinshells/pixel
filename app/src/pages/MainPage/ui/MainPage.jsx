import React, { useState } from "react";
import { Header } from "@/widgets/Header/ui/Header";
import { CanvasGrid } from "@/widgets/CanvasGrid/ui/CanvasGrid";
import { Footer } from "@/widgets/Footer/ui/Footer";
import { PurchaseModal } from "@/features/purchase/ui/PurchaseModal";

export const MainPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onPurchaseClick={() => setShowModal(true)} />

      <main
        className="flex-grow-1"
        style={{ paddingTop: "20px", paddingBottom: "40px" }}
      >
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h3 className="card-title mb-2">
                Advertising Grid - $100 per block
              </h3>
              <p className="card-text text-muted mb-0">
                Click blocks to select, then purchase your advertising space
              </p>
            </div>
          </div>

          <CanvasGrid />
        </div>
      </main>

      <Footer />

      <PurchaseModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};
