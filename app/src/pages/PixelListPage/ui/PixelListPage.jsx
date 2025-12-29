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

      <main className="flex-grow-1 bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card shadow-sm">
                <div className="card-header bg-success text-white">
                  <h3 className="mb-0">Purchased Advertising Blocks</h3>
                  <p className="mb-0 small">
                    Currently displaying {adsModel.purchasedAds.length} active
                    advertisement(s)
                  </p>
                </div>

                <div className="card-body">
                  {adsModel.purchasedAds.length === 0 ? (
                    <div className="text-center py-5 text-muted">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        fill="currentColor"
                        className="bi bi-inbox mb-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438L14.933 9zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z" />
                      </svg>
                      <h5>No advertisements yet</h5>
                      <p>Be the first to purchase advertising space!</p>
                    </div>
                  ) : (
                    <div className="table-responsive">
                      <table className="table table-hover align-middle">
                        <thead className="table-light">
                          <tr>
                            <th scope="col" style={{ width: "60px" }}>
                              #
                            </th>
                            <th scope="col">Company</th>
                            <th scope="col">Website</th>
                            <th scope="col">Description</th>
                            <th scope="col" style={{ width: "100px" }}>
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
                              <th scope="row">{index + 1}</th>
                              <td>
                                <strong>
                                  {ad.companyName || "Unknown Company"}
                                </strong>
                              </td>
                              <td>
                                <a
                                  href={ad.websiteUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-decoration-none"
                                >
                                  {
                                    ad.websiteUrl
                                      .replace(/^https?:\/\/(www\.)?/, "")
                                      .split("/")[0]
                                  }
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="currentColor"
                                    className="bi bi-box-arrow-up-right ms-1"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                                    />
                                  </svg>
                                </a>
                              </td>
                              <td>
                                <span className="text-muted small">
                                  {ad.altText}
                                </span>
                              </td>
                              <td>
                                <span className="badge bg-info">
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
                        <tfoot className="table-light">
                          <tr>
                            <td colSpan="4" className="text-end fw-bold">
                              Total:
                            </td>
                            <td>
                              <span className="badge bg-primary">
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

              <div className="alert alert-info mt-4">
                <h5 className="alert-heading">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-info-circle me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                  Understanding Block Coordinates
                </h5>
                <p className="mb-0">
                  Block coordinates are displayed in <strong>Y.X</strong>{" "}
                  format. For example, <code>5.10</code> means row 5, column 10.
                  Range notation like <code>10.10 - 14.14</code> indicates a
                  rectangular area from top-left to bottom-right corner.
                </p>
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
