import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./providers/AppProvider";
import { MainPage } from "@/pages/MainPage/ui/MainPage";
import { PixelListPage } from "@/pages/PixelListPage/ui/PixelListPage";
import { FaqPage } from "@/pages/FaqPage/ui/FaqPage";
import { NotFoundPage } from "@/pages/NotFoundPage/ui/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/pixel-list" element={<PixelListPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
