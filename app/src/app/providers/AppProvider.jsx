import React, { createContext, useContext, useEffect } from "react";
import { useGridModel } from "@/entities/grid/model/useGridModel";
import { useAdsModel } from "@/entities/ad/model/useAdsModel";
import { usePurchaseModel } from "@/features/purchase/model/usePurchaseModel";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
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

const useApp = () => useContext(AppContext);
