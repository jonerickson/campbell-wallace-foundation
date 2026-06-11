"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Mobile menu */}
          <nav
            id="mobile-menu"
            className="fixed top-16 right-0 left-0 z-50 border-b bg-white shadow-lg"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto max-w-7xl px-4 py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="#about"
                  className="text-lg font-medium hover:text-red-700 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded px-2 py-1"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  href="#impact"
                  className="text-lg font-medium hover:text-red-700 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded px-2 py-1"
                  onClick={closeMenu}
                >
                  Impact
                </Link>
                <Link
                  href="#beneficiary"
                  className="text-lg font-medium hover:text-red-700 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded px-2 py-1"
                  onClick={closeMenu}
                >
                  Beneficiary Information
                </Link>
                <Link
                  href="#contact"
                  className="text-lg font-medium hover:text-red-700 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded px-2 py-1"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
