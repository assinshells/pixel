import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./providers/AppProvider";
import { MainPage } from "@/pages/MainPage/ui/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage/ui/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/*<Route path="/pricing" element={<PricingPage />} />*/}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
