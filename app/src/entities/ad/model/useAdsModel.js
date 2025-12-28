import { useState } from "react";
import { ADS_CONFIG } from "@/shared/config/constants";

export const useAdsModel = () => {
  const [purchasedAds, setPurchasedAds] = useState([]);

  const loadAds = async () => {
    const ads = [];
    for (const adConfig of ADS_CONFIG) {
      const img = new Image();
      const loadPromise = new Promise((resolve) => {
        img.onload = () => resolve(img);
      });
      img.src = adConfig.bannerUrl;
      const loadedImg = await loadPromise;
      ads.push({ ...adConfig, image: loadedImg });
    }
    setPurchasedAds(ads);
    return ads;
  };

  const getAdAtPosition = (x, y) => {
    return purchasedAds.find((ad) =>
      ad.blocks.some((block) => block.x === x && block.y === y)
    );
  };

  return { purchasedAds, loadAds, getAdAtPosition };
};
