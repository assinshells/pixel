import React, { createContext, useContext, useEffect } from "react";
import { useGridModel } from "@/entities/grid/model/useGridModel";
import { useAdsModel } from "@/entities/ad/model/useAdsModel";
import { usePurchaseModel } from "@/features/purchase/model/usePurchaseModel";
import { LanguageProvider } from "./LanguageProvider";

export const AppContext = createContext(null);

const AppProviderInner = ({ children }) => {
  const gridModel = useGridModel();
  const adsModel = useAdsModel();
  const purchaseModel = usePurchaseModel();

  useEffect(() => {
    const initAds = async () => {
      const ads = await adsModel.loadAds();
      ads.forEach((ad) => {
        gridModel.markAsPurchased(ad.blocks);
      });
    };
    initAds();
  }, []);

  return (
    <AppContext.Provider value={{ gridModel, adsModel, purchaseModel }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppProvider = ({ children }) => {
  return (
    <LanguageProvider>
      <AppProviderInner>{children}</AppProviderInner>
    </LanguageProvider>
  );
};

export const useApp = () => useContext(AppContext);
