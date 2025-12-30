import React from "react";
import { BLOCKS } from "@/shared/config/constants";
import { useApp } from "@/app/providers/AppProvider";
import { useLanguage } from "@/app/providers/LanguageProvider";

export const Footer = () => {
  const { gridModel } = useApp();
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const totalBlocks = BLOCKS * BLOCKS;
  const purchasedCount = Array.from(gridModel.blocks).filter(
    (block) => block === 2
  ).length;
  const availableBlocks = totalBlocks - purchasedCount;
  const purchasedPercentage = ((purchasedCount / totalBlocks) * 100).toFixed(1);

  const footerSections = [
    {
      title: t("footer.about"),
      links: [
        { label: t("footer.aboutUs"), href: "#" },
        { label: t("footer.contact"), href: "#" },
        { label: t("footer.careers"), href: "#" },
        { label: t("footer.advertise"), href: "#" },
      ],
    },
    {
      title: t("footer.services"),
      links: [
        { label: t("footer.buySpace"), href: "#" },
        { label: t("footer.pricing"), href: "#" },
        { label: t("footer.howItWorks"), href: "#" },
        { label: t("nav.faq"), href: "/faq" },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { label: t("footer.terms"), href: "#" },
        { label: t("footer.privacy"), href: "#" },
        { label: t("footer.cookies"), href: "#" },
        { label: t("footer.disclaimer"), href: "#" },
      ],
    },
    {
      title: t("footer.connect"),
      links: [
        { label: t("footer.twitter"), href: "#" },
        { label: t("footer.facebook"), href: "#" },
        { label: t("footer.linkedin"), href: "#" },
        { label: t("footer.instagram"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-light">
      <div className="container">
        <div className="row">
          {/* Brand Section */}
          <div className="col-lg-3 mb-4">
            <h2 className="fs-3 fw-bold mb-3">BlockStorm</h2>
            <p className="text-muted">{t("footer.description")}</p>
            <div className="mt-3">
              <span className="badge bg-success me-2">
                {totalBlocks.toLocaleString()} {t("footer.totalBlocks")}
              </span>
              <span className="badge bg-info">$100 {t("footer.perBlock")}</span>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <small className="text-muted">
                  {t("footer.gridOccupancy")}
                </small>
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
                      className="text-muted text-decoration-none hover-link"
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
            <h5 className="fw-semibold mb-3">{t("footer.stayUpdated")}</h5>
            <p className="text-muted" style={{ fontSize: "0.9rem" }}>
              {t("footer.newsletterText")}
            </p>
            <form className="mt-3">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder={t("footer.emailPlaceholder")}
                  aria-label="Email"
                />
                <button className="btn btn-success" type="submit">
                  {t("footer.subscribe")}
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
              © {currentYear} BlockStorm. {t("footer.allRights")}
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <div className="d-inline-flex gap-3">
              <a
                href="#"
                className="text-muted hover-link"
                style={{ fontSize: "1.5rem" }}
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="#"
                className="text-muted hover-link"
                style={{ fontSize: "1.5rem" }}
                aria-label="Facebook"
              >
                ⓕ
              </a>
              <a
                href="#"
                className="text-muted hover-link"
                style={{ fontSize: "1.5rem" }}
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="#"
                className="text-muted hover-link"
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
                  <div className="text-muted small">
                    {t("footer.totalBlocks")}
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="text-warning fw-bold fs-4">
                    {purchasedCount.toLocaleString()}
                  </div>
                  <div className="text-muted small">{t("footer.sold")}</div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="text-info fw-bold fs-4">
                    {availableBlocks.toLocaleString()}
                  </div>
                  <div className="text-muted small">
                    {t("footer.available")}
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="text-success fw-bold fs-4">$100</div>
                  <div className="text-muted small">{t("footer.perBlock")}</div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="text-success fw-bold fs-4">
                    ${((purchasedCount * 100) / 1000).toFixed(0)}K
                  </div>
                  <div className="text-muted small">{t("footer.revenue")}</div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="text-success fw-bold fs-4">
                    ${((totalBlocks * 100) / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-muted small">
                    {t("footer.maxPotential")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
