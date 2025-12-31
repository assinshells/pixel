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
          <div className="unified-alert mt-4">
            <div className="unified-alert-title">
              <i className="bi bi-lightbulb"></i>
              How to Purchase
            </div>
            <p className="unified-alert-body">
              <strong>Click on free blocks</strong> (shown in gray) to select
              them. Selected blocks will turn green and be added to your cart.
              When ready, click the <strong>cart icon</strong> in the header to
              complete your purchase. Each block costs <strong>$100</strong> and
              is purchased permanently.
            </p>
          </div>
          <div className="unified-alert mt-4">
            <div className="unified-alert-title">
              <i className="bi bi-lightbulb"></i>
              Understanding Block Coordinates
            </div>
            <p className="unified-alert-body">
              Block coordinates are displayed in <strong>Y.X</strong> format.
              For example,{" "}
              <code className="bg-white px-2 py-1 rounded">5.10</code> means row
              5, column 10. Range notation like{" "}
              <code className="bg-white px-2 py-1 rounded">10.10 - 14.14</code>{" "}
              indicates a rectangular area from top-left to bottom-right corner.
            </p>
          </div>
        </div>
      </main>

      <Footer />

      <PurchaseModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};
