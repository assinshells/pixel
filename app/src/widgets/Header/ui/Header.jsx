import React from "react";
import { Button } from "@/shared/ui/Button/Button";
import { useApp } from "@/app/providers/AppProvider";
import { formatPrice } from "@/shared/lib/format";

export const Header = ({ onPurchaseClick }) => {
  const { gridModel } = useApp();
  const navItems = [
    "World",
    "U.S.",
    "Technology",
    "Design",
    "Culture",
    "Business",
    "Politics",
    "Opinion",
    "Science",
    "Health",
    "Style",
    "Travel",
  ];

  return (
    <div className="sticky-top bg-white shadow-sm">
      <div className="container">
        <header className="border-bottom py-3">
          <div className="row align-items-center">
            <div className="col-4">
              <a href="#" className="link-secondary text-decoration-none">
                Subscribe
              </a>
            </div>
            <div className="col-4 text-center">
              <a
                href="#"
                className="fs-2 fw-bold text-dark text-decoration-none"
              >
                Large
              </a>
            </div>
            <div className="col-4 text-end">
              <Button
                variant="primary"
                disabled={gridModel.selectedCount === 0}
                onClick={onPurchaseClick}
              >
                Purchase — {gridModel.selectedCount} blocks | $
                {formatPrice(gridModel.selectedCount)}
              </Button>
            </div>
          </div>
        </header>

        <nav className="nav nav-underline justify-content-between py-2 border-bottom small">
          {navItems.map((item) => (
            <a key={item} href="#" className="nav-link link-body-emphasis">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
