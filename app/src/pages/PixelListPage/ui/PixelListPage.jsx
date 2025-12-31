// src/pages/PixelListPage/ui/PixelListPage.jsx
import React, { useState } from "react";
import { useApp } from "@/app/providers/AppProvider";
import { Header } from "@/widgets/Header/ui/Header";
import { Footer } from "@/widgets/Footer/ui/Footer";
import { PurchaseModal } from "@/features/purchase/ui/PurchaseModal";
import { BLOCK_PRICE } from "@/shared/config/constants";

export const PixelListPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { adsModel } = useApp();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onPurchaseClick={() => setShowModal(true)} />

      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Purchased Advertising Blocks</h1>
            <p className="page-subtitle">
              Currently displaying {adsModel.purchasedAds.length} active
              advertisement{adsModel.purchasedAds.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="unified-card">
            <div className="unified-card-header">
              <h3>Active Advertisements</h3>
              <p className="mb-0 small opacity-90">
                {adsModel.purchasedAds.length} placement
                {adsModel.purchasedAds.length !== 1 ? "s" : ""} on the grid
              </p>
            </div>

            <div className="unified-card-body p-0">
              {adsModel.purchasedAds.length === 0 ? (
                <div className="empty-state text-muted">
                  <div className="empty-state-icon">
                    <i className="bi bi-inbox"></i>
                  </div>
                  <h5 className="empty-state-title">No advertisements yet</h5>
                  <p className="empty-state-text text-muted">
                    Be the first to purchase advertising space!
                  </p>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="unified-table table table-hover mb-0">
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: "60px" }}>
                          #
                        </th>
                        <th scope="col">Company</th>
                        <th scope="col">Website</th>
                        <th scope="col">Description</th>
                        <th scope="col" style={{ width: "120px" }}>
                          Size
                        </th>
                        <th scope="col" style={{ width: "120px" }}>
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {adsModel.purchasedAds.map((ad, index) => (
                        <tr key={index}>
                          <td className="fw-semibold text-muted">
                            {index + 1}
                          </td>
                          <td>
                            <strong className="text-dark">
                              {ad.companyName || "Unknown Company"}
                            </strong>
                          </td>
                          <td>
                            <a
                              href={ad.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none d-inline-flex align-items-center gap-1"
                            >
                              {
                                ad.websiteUrl
                                  .replace(/^https?:\/\/(www\.)?/, "")
                                  .split("/")[0]
                              }
                              <i
                                className="bi bi-box-arrow-up-right"
                                style={{ fontSize: "0.75rem" }}
                              ></i>
                            </a>
                          </td>
                          <td>
                            <span className="text-muted">{ad.altText}</span>
                          </td>
                          <td>
                            <span className="unified-badge unified-badge-info">
                              {ad.blocks.length} block
                              {ad.blocks.length !== 1 ? "s" : ""}
                            </span>
                          </td>
                          <td>
                            <strong className="text-success">
                              $
                              {(
                                ad.blocks.length * BLOCK_PRICE
                              ).toLocaleString()}
                            </strong>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="4" className="text-end fw-bold">
                          Total:
                        </td>
                        <td>
                          <span className="unified-badge unified-badge-success">
                            {adsModel.purchasedAds.reduce(
                              (sum, ad) => sum + ad.blocks.length,
                              0
                            )}{" "}
                            blocks
                          </span>
                        </td>
                        <td>
                          <strong className="text-success fs-5">
                            $
                            {adsModel.purchasedAds
                              .reduce(
                                (sum, ad) =>
                                  sum + ad.blocks.length * BLOCK_PRICE,
                                0
                              )
                              .toLocaleString()}
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <PurchaseModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};
