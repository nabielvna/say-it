"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, MessageSquare, BookOpen } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar default terbuka

  return (
    <div className={`h-screen flex ${isOpen ? "w-64" : "w-16"} transition-all duration-300 bg-gray-900 text-white`}>
      {/* Sidebar Content */}
      <div className="flex flex-col w-full h-full">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 focus:outline-none hover:bg-gray-800 transition"
        >
          <Menu size={24} />
        </button>

        {/* Menu Items */}
        <nav className="flex flex-col mt-4 space-y-2">
          <SidebarItem href="/" icon={<MessageSquare size={20} />} text="Say-it!" isOpen={isOpen} />
          <SidebarItem href="/konseling" icon={<BookOpen size={20} />} text="Konseling Karier & Stres" isOpen={isOpen} />
          <SidebarItem href="/diary" icon={<BookOpen size={20} />} text="Digital Diary" isOpen={isOpen} />
        </nav>
      </div>
    </div>
  );
}

function SidebarItem({ href, icon, text, isOpen }: { href: string; icon: React.ReactNode; text: string; isOpen: boolean }) {
  return (
    <Link href={href} className="flex items-center p-3 space-x-2 hover:bg-gray-800 transition">
      {icon}
      {isOpen && <span>{text}</span>}
    </Link>
  );
}
