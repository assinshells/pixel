import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "@/app/providers/AppProvider";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { formatPrice } from "@/shared/lib/format";

export const Header = ({ onPurchaseClick }) => {
  const { gridModel } = useApp();
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { label: t("nav.pixels"), href: "/" },
    { label: t("nav.pixelList"), href: "/pixel-list" },
    { label: t("nav.faq"), href: "/faq" },
  ];

  const languages = [
    { code: "en", flag: "🇬🇧" },
    { code: "uk", flag: "🇺🇦" },
  ];

  return (
    <nav className="navbar navbar-expand-md sticky-top navbar-body-bg">
      <div className="container">
        <Link className="navbar-brand d-md-none" to="/">
          <span className="fs-4 fw-bold d-block lh-1">BlockStorm</span>
          <span
            className="small fst-italic text-muted d-block"
            style={{ lineHeight: "1" }}
          >
            {t("nav.tagline")}
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          aria-controls="offcanvas"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasLabel">
              BlockStorm
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav flex-grow-1 justify-content-between align-items-center">
              <li className="nav-item d-none d-md-block">
                <Link
                  className="nav-link fs-4 fw-bold d-block lh-1"
                  to="/"
                  aria-label="BlockStorm"
                >
                  BlockStorm
                </Link>
                <span
                  className="small fst-italic text-muted d-block"
                  style={{ lineHeight: "1" }}
                >
                  {t("nav.tagline")}
                </span>
              </li>

              {navLinks.map((link) => (
                <li key={link.label} className="nav-item">
                  {link.href.startsWith("/") ? (
                    <Link className="nav-link" to={link.href}>
                      {link.label}
                    </Link>
                  ) : (
                    <a className="nav-link" href={link.href}>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}

              {/* Language Switcher */}
              <li className="nav-item">
                <div className="d-flex gap-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`btn btn-sm ${
                        language === lang.code
                          ? "btn-success"
                          : "btn-outline-secondary"
                      }`}
                      style={{
                        width: "45px",
                        height: "35px",
                        padding: "0",
                        fontSize: "1.2rem",
                        transition: "all 0.2s ease",
                        border:
                          language === lang.code
                            ? "2px solid #198754"
                            : "1px solid #dee2e6",
                      }}
                      title={lang.code === "en" ? "English" : "Українська"}
                    >
                      {lang.flag}
                    </button>
                  ))}
                </div>
              </li>

              {/* Cart */}
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link position-relative"
                  onClick={onPurchaseClick}
                  aria-label="Shopping cart"
                  disabled={gridModel.selectedCount === 0}
                  style={{
                    cursor:
                      gridModel.selectedCount === 0 ? "not-allowed" : "pointer",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>

                  {gridModel.selectedCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      ${formatPrice(gridModel.selectedCount)}
                      <span className="visually-hidden">cart total</span>
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
