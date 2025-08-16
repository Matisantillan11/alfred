"use client";
import { Hamburger } from "@alfred/app/shared";
import { motion } from "motion/react";
import { useState } from "react";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <motion.div
      className="w-64 shadow-2xl shadow-gray-400 rounded-2xl mt-4 mb-4 ml-4 overflow-hidden"
      animate={{ width: isSidebarOpen ? "256px" : "40px" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-[calc(100vh-2rem)]">
        <div className="flex-1">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <div className="flex flex-col h-full">
                <div className="flex mx-2">
                  <Hamburger isOpen={isSidebarOpen} onClick={toggleSidebar} />
                </div>
                <div className="h-16"></div>
              </div>
            </div>
            <div className="h-16"></div>
          </div>
        </div>
        <div className="h-16"></div>
      </div>
    </motion.div>
  );
}
