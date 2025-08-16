"use client";
import {
  Ambulance,
  cn,
  Dollar,
  Hamburger,
  ROUTES,
  Settings,
} from "@alfred/app/shared";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const SIDEBAR_ITEMS = [
  {
    icon: <Ambulance className="text-gray-500" />,
    label: "Patients",
    href: ROUTES.PATIENTS,
  },
  {
    icon: <Dollar className="text-gray-500" />,
    label: "Billing",
    href: ROUTES.BILLING,
  },
  {
    icon: <Settings className="text-gray-500" />,
    label: "Settings",
    href: ROUTES.SETTINGS,
  },
];

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <motion.div
      className="shadow-2xl shadow-gray-400 rounded-2xl mt-4 mb-4 ml-4 overflow-hidden"
      animate={{ width: isSidebarOpen ? "160px" : "60px" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-[calc(100vh-2rem)]">
        <div className="flex-1">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <div className="flex flex-col h-full mx-3">
                <div className="flex mx-1">
                  <Hamburger isOpen={isSidebarOpen} onClick={toggleSidebar} />
                </div>
                <div className="grid h-fit my-10 gap-5">
                  {SIDEBAR_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center p-2 hover:bg-gray-100 rounded-lg"
                    >
                      {item.icon}
                      <span
                        className={cn(
                          "mx-2 text-gray-500",
                          isSidebarOpen ? "block" : "hidden"
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
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
