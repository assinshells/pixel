import React, { useState } from "react";
import { Header } from "@/widgets/Header/ui/Header";
import { CanvasGrid } from "@/widgets/CanvasGrid/ui/CanvasGrid";
import { PurchaseModal } from "@/features/purchase/ui/PurchaseModal";

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-vh-100 bg-light" style={{ padding: "20px" }}>
      <Header onPurchaseClick={() => setShowModal(true)} />

      <div
        className="container"
        style={{ maxWidth: "1200px", marginTop: "20px" }}
      >
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

      <PurchaseModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};
