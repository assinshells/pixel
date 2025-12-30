// src/widgets/Footer/ui/Footer.jsx
import React from "react";
import { BLOCKS, BLOCK_PRICE } from "@/shared/config/constants";
import { useApp } from "@/app/providers/AppProvider";

export const Footer = () => {
  const { gridModel, adsModel } = useApp();
  const currentYear = new Date().getFullYear();

  // Total blocks in the grid
  const totalBlocks = BLOCKS * BLOCKS;

  // Count purchased blocks from ads
  const purchasedCount = adsModel.purchasedAds.reduce(
    (sum, ad) => sum + ad.blocks.length,
    0
  );

  // Calculate available blocks
  const availableBlocks = totalBlocks - purchasedCount;

  // Calculate percentage
  const purchasedPercentage = ((purchasedCount / totalBlocks) * 100).toFixed(1);

  // Calculate revenue from sold blocks
  const totalRevenue = purchasedCount * BLOCK_PRICE;

  // Calculate maximum potential revenue
  const maxPotentialRevenue = totalBlocks * BLOCK_PRICE;

  const footerSections = [
    {
      title: "About",
      links: [
        { label: "About Us", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Advertise", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Buy Advertising Space", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "How It Works", href: "#" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Disclaimer", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Twitter", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Instagram", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-light">
      <div className="container">
        {/* Bottom Footer */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
              © {currentYear} BlockStorm. All rights reserved.
            </p>
          </div>
        </div>

        {/* Enhanced Stats Bar */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="bg-secondary bg-opacity-25 rounded p-3">
              <div className="row text-center g-3">
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="text-success fw-bold fs-4">
                    {totalBlocks.toLocaleString()}
                  </div>
                  <div className="text-muted small">Total Blocks</div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="text-warning fw-bold fs-4">
                    {purchasedCount.toLocaleString()}
                  </div>
                  <div className="text-muted small">Sold</div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="text-info fw-bold fs-4">
                    {availableBlocks.toLocaleString()}
                  </div>
                  <div className="text-muted small">Available</div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="text-success fw-bold fs-4">
                    ${BLOCK_PRICE}
                  </div>
                  <div className="text-muted small">Per Block</div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="text-success fw-bold fs-4">
                    $
                    {totalRevenue >= 1000
                      ? `${(totalRevenue / 1000).toFixed(1)}K`
                      : totalRevenue.toLocaleString()}
                  </div>
                  <div className="text-muted small">Revenue</div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="text-success fw-bold fs-4">
                    ${(maxPotentialRevenue / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-muted small">Max Potential</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
