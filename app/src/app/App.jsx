import React from "react";
import { AppProvider } from "./providers/AppProvider";
import { MainPage } from "@/pages/MainPage/ui/MainPage";

export default function App() {
  return (
    <AppProvider>
      <MainPage />
    </AppProvider>
  );
}
