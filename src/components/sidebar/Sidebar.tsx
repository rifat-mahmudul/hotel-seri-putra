"use client";
import { Home, Inbox } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Select Room",
    url: "/",
    icon: Home,
  },
  {
    title: "All Check In",
    url: "/all-check-in",
    icon: Inbox,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent className="bg-[#fdd39527]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-center mx-auto text-5xl mb-5">
            Logo
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive =
                  pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton className=" focus:text-white" asChild>
                      <Link
                        href={item.url}
                        className={`${
                          isActive
                            ? "bg-gradient-to-r from-[#003780] to-[gray] text-white hover:text-white font-semibold "
                            : "text-[#003780] font-semibold hover:bg-gradient-to-r hover:from-[#003780] hover:to-[gray] hover:text-white"
                        } py-5`}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
