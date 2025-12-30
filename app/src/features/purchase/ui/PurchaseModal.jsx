import React from "react";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { FileUpload } from "./FileUpload";
import { useApp } from "@/app/providers/AppProvider";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { formatBlockCoordinates, formatPrice } from "@/shared/lib/format";
import { BLOCK_PRICE } from "@/shared/config/constants";

export const PurchaseModal = ({ isOpen, onClose }) => {
  const { gridModel, purchaseModel } = useApp();
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (!purchaseModel.validateForm()) {
      alert(t("purchase.fillAllFields"));
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

    const message = t("purchase.successMessage")
      .replace("{company}", purchaseData.companyName)
      .replace("{blocks}", blockCoords)
      .replace("{total}", formatPrice(gridModel.selectedCount));

    alert(`${t("purchase.successTitle")}\n\n${message}`);
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
              <h5 className="modal-title">{t("purchase.modalTitle")}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">
              <Input
                label={t("purchase.yourEmail")}
                type="email"
                placeholder={t("purchase.emailPlaceholder")}
                required
                value={purchaseModel.formData.buyerEmail}
                onChange={(e) =>
                  purchaseModel.updateField("buyerEmail", e.target.value)
                }
              />

              <Input
                label={t("purchase.companyName")}
                type="text"
                placeholder={t("purchase.companyPlaceholder")}
                required
                value={purchaseModel.formData.companyName}
                onChange={(e) =>
                  purchaseModel.updateField("companyName", e.target.value)
                }
              />

              <Input
                label={t("purchase.websiteUrl")}
                type="url"
                placeholder={t("purchase.websitePlaceholder")}
                required
                value={purchaseModel.formData.websiteUrl}
                onChange={(e) =>
                  purchaseModel.updateField("websiteUrl", e.target.value)
                }
              />

              <Input
                label={t("purchase.altText")}
                type="text"
                placeholder={t("purchase.altPlaceholder")}
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
                <strong>{t("purchase.purchaseSummary")}</strong>
                <br />
                {t("purchase.blocks")} {gridModel.selectedCount}
                <br />
                {t("purchase.coordinates")} {blockCoords}
                <br />
                {t("purchase.total")} ${formatPrice(gridModel.selectedCount)}
                <br />
                <small className="text-muted">
                  {t("purchase.summaryNote")}
                </small>
              </div>
            </div>

            <div className="modal-footer">
              <Button variant="secondary" onClick={onClose}>
                {t("common.cancel")}
              </Button>
              <Button variant="primary" onClick={handleConfirm}>
                {t("purchase.submitButton")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
