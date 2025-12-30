import React from "react";
import { Button } from "@/shared/ui/Button/Button";
import { useLanguage } from "@/app/providers/LanguageProvider";

export const FileUpload = ({ file, previewUrl, onFileSelect, onRemove }) => {
  const { t } = useLanguage();

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type.startsWith("image/")) {
      onFileSelect(droppedFile);
    }
  };

  return (
    <div className="mb-3">
      <label className="form-label fw-semibold">
        {t("purchase.uploadBanner")} <span className="text-danger">*</span>
      </label>
      <div
        className="border border-2 border-dashed rounded p-4 text-center"
        style={{
          cursor: "pointer",
          borderColor: "#dee2e6",
          transition: "all 0.3s",
          minHeight: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => !file && document.getElementById("fileInput").click()}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#198754";
          e.currentTarget.style.backgroundColor = "#f8f9fa";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#dee2e6";
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      >
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="d-none"
          onChange={(e) => onFileSelect(e.target.files[0])}
        />
        {!previewUrl ? (
          <>
            <div style={{ fontSize: "48px" }} className="text-secondary mb-2">
              ☁️
            </div>
            <p className="mb-1">{t("purchase.clickUpload")}</p>
            <small className="text-muted">{t("purchase.fileTypes")}</small>
          </>
        ) : (
          <div>
            <img
              src={previewUrl}
              alt="Preview"
              className="img-fluid rounded mb-2"
              style={{ maxHeight: "200px" }}
            />
            <p className="mb-2">{file.name}</p>
            <Button
              variant="danger"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onRemove();
              }}
            >
              {t("purchase.remove")}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
