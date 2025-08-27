"use client"; // ✅ required because Navbar may use client-side interactivity later

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Title */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Habit Stacker
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-200 transition">
            About
          </Link>
          <Link href="/dashboard" className="hover:text-gray-200 transition">
            Dashboard
          </Link>
        </div>

        {/* Profile / Login Button */}
        <div>
          <Link
            href="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
