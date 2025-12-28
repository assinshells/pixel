import React from "react";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { FileUpload } from "./FileUpload";
import { useApp } from "@/app/providers/AppProvider";
import { formatBlockCoordinates, formatPrice } from "@/shared/lib/format";
import { BLOCK_PRICE } from "@/shared/config/constants";

const PurchaseModal = ({ isOpen, onClose }) => {
  const { gridModel, purchaseModel } = useApp();

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (!purchaseModel.validateForm()) {
      alert("Please fill in all required fields and upload a banner image");
      return;
    }

    const blockCoords = formatBlockCoordinates(gridModel.selectedBlocks);
    const purchaseData = {
      ...purchaseModel.formData,
      blocks: blockCoords,
      blockCount: gridModel.selectedCount,
      totalAmount: gridModel.selectedCount * BLOCK_PRICE,
      timestamp: new Date().toLocaleString(),
      bannerFileName: purchaseModel.uploadedFile.name,
    };

    console.log("=== PURCHASE REQUEST ===");
    console.log("Purchase Data:", purchaseData);
    console.log("======================");

    gridModel.resetSelection();
    purchaseModel.resetForm();
    onClose();

    alert(
      `Purchase request submitted!\n\nBlocks: ${blockCoords}\nTotal: $${formatPrice(
        gridModel.selectedCount
      )}`
    );
  };

  const blockCoords = formatBlockCoordinates(gridModel.selectedBlocks);

  return (
    <>
      <div
        className="modal d-block"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        onClick={onClose}
      >
        <div
          className="modal-dialog modal-lg modal-dialog-scrollable"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Complete Your Purchase</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">
              <Input
                label="Your Email"
                type="email"
                placeholder="your@email.com"
                required
                value={purchaseModel.formData.buyerEmail}
                onChange={(e) =>
                  purchaseModel.updateField("buyerEmail", e.target.value)
                }
              />

              <Input
                label="Your Name"
                type="text"
                placeholder="John Doe"
                required
                value={purchaseModel.formData.buyerName}
                onChange={(e) =>
                  purchaseModel.updateField("buyerName", e.target.value)
                }
              />

              <Input
                label="Target Website URL"
                type="url"
                placeholder="https://yourwebsite.com"
                required
                value={purchaseModel.formData.websiteUrl}
                onChange={(e) =>
                  purchaseModel.updateField("websiteUrl", e.target.value)
                }
              />

              <Input
                label="Alt Text / Description"
                type="text"
                placeholder="Your advertisement description"
                required
                value={purchaseModel.formData.altText}
                onChange={(e) =>
                  purchaseModel.updateField("altText", e.target.value)
                }
              />

              <FileUpload
                file={purchaseModel.uploadedFile}
                previewUrl={purchaseModel.previewUrl}
                onFileSelect={purchaseModel.handleFileSelect}
                onRemove={purchaseModel.removeFile}
              />

              <div className="alert alert-info">
                <strong>Purchase Summary:</strong>
                <br />
                Blocks: {gridModel.selectedCount}
                <br />
                Block Coordinates: {blockCoords}
                <br />
                Total: ${formatPrice(gridModel.selectedCount)}
                <br />
                <small className="text-muted">
                  Your purchase request will be sent to the seller for approval
                </small>
              </div>
            </div>

            <div className="modal-footer">
              <Button variant="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleConfirm}>
                Submit Purchase Request
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
