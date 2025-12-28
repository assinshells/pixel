import { useState } from "react";

const usePurchaseModel = () => {
  const [formData, setFormData] = useState({
    buyerEmail: "",
    buyerName: "",
    websiteUrl: "",
    altText: "",
  });
  const [uploadedFile, setUploadedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFileSelect = (file) => {
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
      return false;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target.result);
      setUploadedFile(file);
    };
    reader.readAsDataURL(file);
    return true;
  };

  const removeFile = () => {
    setUploadedFile(null);
    setPreviewUrl(null);
  };

  const resetForm = () => {
    setFormData({ buyerEmail: "", buyerName: "", websiteUrl: "", altText: "" });
    setUploadedFile(null);
    setPreviewUrl(null);
  };

  const validateForm = () => {
    return (
      formData.buyerEmail &&
      formData.buyerName &&
      formData.websiteUrl &&
      formData.altText &&
      uploadedFile
    );
  };

  return {
    formData,
    uploadedFile,
    previewUrl,
    updateField,
    handleFileSelect,
    removeFile,
    resetForm,
    validateForm,
  };
};
