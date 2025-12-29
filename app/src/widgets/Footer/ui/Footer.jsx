import React from "react";
import { BLOCKS } from "@/shared/config/constants";
import { useApp } from "@/app/providers/AppProvider";

export const Footer = () => {
  const { gridModel } = useApp();
  const currentYear = new Date().getFullYear();

  // Подсчет занятых блоков
  const totalBlocks = BLOCKS * BLOCKS;
  const purchasedCount = Array.from(gridModel.blocks).filter(
    (block) => block === 2
  ).length;
  const availableBlocks = totalBlocks - purchasedCount;
  const purchasedPercentage = ((purchasedCount / totalBlocks) * 100).toFixed(1);

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
        { label: "FAQ", href: "#" },
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
    {
      title: "Language",
      links: [
        { label: "English", href: "#" },
        { label: "Ukrainian", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-light ">
      <div className="container">
        <div className="row">
          {/* Brand Section */}
          <div className="col-lg-3 mb-4">
            <h2 className="fs-3 fw-bold mb-3">BlockStorm</h2>
            <p className="text-muted">
              Buy a block, place your banner, and dominate a tiny piece of the
              internet.
            </p>
            <div className="mt-3">
              <span className="badge bg-success me-2">
                {totalBlocks.toLocaleString()} Total Blocks
              </span>
              <span className="badge bg-info">${100} per block</span>
            </div>
            {/* Availability indicator */}
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <small className="text-muted">Grid Occupancy</small>
                <small className="text-success fw-semibold">
                  {purchasedPercentage}%
                </small>
              </div>
              <div className="progress" style={{ height: "8px" }}>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: `${purchasedPercentage}%` }}
                  aria-valuenow={purchasedPercentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="col-lg-2 col-md-3 col-sm-6 mb-4">
              <h5 className="fw-semibold mb-3">{section.title}</h5>
              <ul className="list-unstyled">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a
                      href={link.href}
                      className="text-muted text-decoration-none"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="col-lg-3 mb-4">
            <h5 className="fw-semibold mb-3">Stay Updated</h5>
            <p className="text-muted" style={{ fontSize: "0.9rem" }}>
              Get notified about new features and advertising opportunities.
            </p>
            <form className="mt-3">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Email"
                />
                <button className="btn btn-success" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom Footer */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
              © {currentYear} Large Advertising Grid. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-inline-flex gap-3">
              <a
                href="#"
                className="text-muted"
                style={{ fontSize: "1.5rem" }}
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="#"
                className="text-muted"
                style={{ fontSize: "1.5rem" }}
                aria-label="Facebook"
              >
                ⓕ
              </a>
              <a
                href="#"
                className="text-muted"
                style={{ fontSize: "1.5rem" }}
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="#"
                className="text-muted"
                style={{ fontSize: "1.5rem" }}
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
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
                  <div className="text-success fw-bold fs-4">$100</div>
                  <div className="text-muted small">Per Block</div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="text-success fw-bold fs-4">
                    ${((purchasedCount * 100) / 1000).toFixed(0)}K
                  </div>
                  <div className="text-muted small">Revenue</div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="text-success fw-bold fs-4">
                    ${((totalBlocks * 100) / 1000000).toFixed(1)}M
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
