
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { MdAccountBox } from "react-icons/md";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const route = useRouter();
  const { cart } = useCart();

  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between p-3 bg-black z-50">
      <div className="flex items-center">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="logo"
          width={50}
          height={24}
          className="cursor-pointer ml-40"
        />
      </div>

      <div className="flex space-x-8 justify-center flex-grow">
        <button onClick={() => route.push("/")} className="custom-slate">
          Home
        </button>

        <button onClick={() => route.push("/brands")} className="custom-slate">
          Brands
        </button>

        <button
          onClick={() => route.push("/recent-products")}
          className="custom-slate"
        >
          Recent Products
        </button>

        <button onClick={() => route.push("/contact")} className="custom-slate">
          Contact
        </button>

        <button onClick={() => route.push("/about")} className="custom-slate">
          About
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <CiSearch
          size={24}
          className="text-white cursor-pointer"
          aria-label="Search"
          onClick={() => console.log("Search clicked")}
        />
        <MdAccountBox
          size={24}
          className="text-white cursor-pointer"
          aria-label="Account"
          onClick={() => route.push("/account")}
        />
        <div className="relative">
          <CiShoppingCart
            size={24}
            className="text-white cursor-pointer"
            aria-label="Cart"
            onClick={() => route.push("/cart")}
          />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
              {cart.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}


