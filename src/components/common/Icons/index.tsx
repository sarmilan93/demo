import { COLORS } from "../../../constants";

export const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M4 6L8 10L12 6"
      stroke={COLORS.textSecondary}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M5 12L10 7L15 12"
      stroke={COLORS.textSecondary}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronDownLargeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M5 8L10 13L15 8"
      stroke={COLORS.textSecondary}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path
      d="M2 5L4 7L8 3"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M12 4L6 10L12 16"
      stroke={COLORS.textSecondary}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M3 5H15M3 9H15M3 13H15"
      stroke={COLORS.textSecondary}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const DocumentIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M6 2H11L16 7V18H6C4.895 18 4 17.105 4 16V4C4 2.895 4.895 2 6 2Z"
      stroke={COLORS.primary}
      strokeWidth="1.4"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M11 2V7H16"
      stroke={COLORS.primary}
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M7 11H13M7 14H11"
      stroke={COLORS.primary}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export const MoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="5" cy="10" r="1.2" fill={COLORS.textSecondary} />
    <circle cx="10" cy="10" r="1.2" fill={COLORS.textSecondary} />
    <circle cx="15" cy="10" r="1.2" fill={COLORS.textSecondary} />
  </svg>
);

export const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M7 2V12M2 7H12"
      stroke={COLORS.primary}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
