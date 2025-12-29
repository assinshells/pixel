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
          <CanvasGrid />
        </div>
      </main>

      <Footer />

      <PurchaseModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};
