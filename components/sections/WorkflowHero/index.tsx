"use client";

import * as React from "react";
import WorkFlowHeroLayout from "@/components/sections/WorkflowHero/WorkflowHeroLayout";
import Hero from "@/components/elements/Hero";

import {
  FileText,
  ClipboardList,
  ShieldPlus,
  Globe,
  ReceiptText,
  User,
  Tag,
  BadgeCheck,
  ScanSearch,
  Search,
  Send,
  FolderLock,
  Handshake,
  CalendarClock,
} from "lucide-react";

export default function WorkflowHeroSection() {
  const cards = [
    {
      key: "disclosure" as const,
      title: "Disclosure",
      icon: <FileText className="h-4 w-4 text-white" />,
      items: [
        { label: "Details of the Invention", icon: <FileText /> },
        { label: "Inventor(s) Details", icon: <User /> },
        { label: "Keywords", icon: <Tag /> },
      ],
      footer: { label: "+ more attributes" },
    },
    {
      key: "evaluation" as const,
      title: "Evaluation",
      icon: <ClipboardList className="h-4 w-4 text-white" />,
      items: [
        { label: "Due Diligence", icon: <BadgeCheck /> },
        { label: "Prior art search", icon: <Search /> },
        { label: "Market Research", icon: <ScanSearch /> },
      ],
      footer: { label: "+ more attributes" },
    },
    {
      key: "protection" as const,
      title: "Protection",
      icon: <ShieldPlus className="h-4 w-4 text-white" />,
      items: [
        { label: "Send Evaluation to patent", icon: <Send /> },
        { label: "Draft provisional patent", icon: <FileText /> },
        { label: "Update CRM", icon: <User /> },
      ],
      footer: { label: "+ more attributes" },
    },
    {
      key: "marketing" as const,
      title: "Marketing",
      icon: <Globe className="h-4 w-4 text-white" />,
      items: [
        { label: "Webpage for invention", icon: <Globe /> },
        { label: "Deal room", icon: <FolderLock /> },
        { label: "NDA / MTA access", icon: <FileText /> },
      ],
      footer: { label: "+ more attributes" },
    },
    {
      key: "licensing" as const,
      title: "Licensing",
      icon: <ReceiptText className="h-4 w-4 text-white" />,
      items: [
        { label: "Draft term sheet", icon: <ReceiptText /> },
        { label: "Full license", icon: <Handshake /> },
        { label: "Post-agreement follow-up", icon: <CalendarClock /> },
      ],
      footer: { label: "+ more attributes" },
    },
  ];

  return (
    <WorkFlowHeroLayout
      cards={cards}
      compactCards
      heroSlot={
        <Hero
          className="text-center"
          headline="Your research, translated."
          subline="10× faster."
        />
      }
    />
  );
}