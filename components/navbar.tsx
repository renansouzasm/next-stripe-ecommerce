"use client";

import Link from "next/link";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 layout-space">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link
          href={"/"}
          className="text-md font-bold hover:text-gray-700 transition-colors"
        >
          Next stripe ecommerce
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            href={"/"}
            className="font-medium hover:text-gray-700 transition-colors"
          >
            Home
          </Link>
          <Link
            href={"/products"}
            className="font-medium hover:text-gray-700 transition-colors"
          >
            Products
          </Link>
          <Link
            href={"/checkout"}
            className="font-medium hover:text-gray-700 transition-colors"
          >
            Checkout
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/checkout"
            className="relative hover:opacity-70 transition-opacity"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col p-4 space-y-3">
            <li>
              <Link
                href="/"
                className="block py-2 font-medium hover:text-gray-700 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block py-2 font-medium hover:text-gray-700 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/checkout"
                className="block py-2 font-medium hover:text-gray-700 transition-colors"
              >
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
}
