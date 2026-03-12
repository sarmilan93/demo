import { ComponentStatus, ComponentType } from "../types";

export const STATUS_STYLES: Record<
  ComponentStatus,
  { bg: string; color: string; label: string }
> = {
  new: { bg: "#DBEAFE", color: "#2563EB", label: "New" },
  amendment: { bg: "#FEE2E2", color: "#DC2626", label: "Amendment" },
  ignored: { bg: "#F3F4F6", color: "#9CA3AF", label: "Ignored" },
  reviewed: { bg: "#DBEAFE", color: "#2563EB", label: "Reviewed" },
};

export const TYPE_STYLES: Record<
  ComponentType,
  { bg: string; color: string; border: string; label: string }
> = {
  legislative: {
    bg: "#F8F9FA",
    color: "#6B7280",
    border: "#E5E7EB",
    label: "Legislative",
  },
  amendment: {
    bg: "#F8F9FA",
    color: "#6B7280",
    border: "#E5E7EB",
    label: "Amendment",
  },
};
