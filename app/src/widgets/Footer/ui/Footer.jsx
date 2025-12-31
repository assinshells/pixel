// src/widgets/Footer/ui/Footer.jsx
import React from "react";
import { BLOCKS, BLOCK_PRICE } from "@/shared/config/constants";
import { useApp } from "@/app/providers/AppProvider";

export const Footer = () => {
  const { adsModel } = useApp();
  const currentYear = new Date().getFullYear();

  const totalBlocks = BLOCKS * BLOCKS;
  const purchasedCount = adsModel.purchasedAds.reduce(
    (sum, ad) => sum + ad.blocks.length,
    0
  );
  const availableBlocks = totalBlocks - purchasedCount;
  const purchasedPercentage = ((purchasedCount / totalBlocks) * 100).toFixed(1);
  const totalRevenue = purchasedCount * BLOCK_PRICE;
  const maxPotentialRevenue = totalBlocks * BLOCK_PRICE;

  const stats = [
    {
      value: totalBlocks.toLocaleString(),
      label: "Total Blocks",
      color: "text-success",
    },
    {
      value: purchasedCount.toLocaleString(),
      label: "Sold",
      color: "text-warning",
    },
    {
      value: availableBlocks.toLocaleString(),
      label: "Available",
      color: "text-info",
    },
    {
      value: `$${BLOCK_PRICE}`,
      label: "Per Block",
      color: "text-success",
    },
    {
      value: `$${
        totalRevenue >= 1000
          ? `${(totalRevenue / 1000).toFixed(1)}K`
          : totalRevenue.toLocaleString()
      }`,
      label: "Revenue",
      color: "text-success",
    },
    {
      value: `$${(maxPotentialRevenue / 1000000).toFixed(1)}M`,
      label: "Max Potential",
      color: "text-success",
    },
  ];

  return (
    <footer className="mt-auto">
      <div className="container py-4">
        {/* Stats Section */}
        <div className="mb-4">
          <div className="row g-4 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-2 col-md-4 col-6">
                <div className={`fw-bold fs-4 ${stat.color}`}>{stat.value}</div>
                <div className="text-muted small text-uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-3">
          <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
            © {currentYear} BlockStorm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
