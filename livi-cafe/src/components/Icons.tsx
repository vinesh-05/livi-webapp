import type { ReactNode } from "react";

type P = { size?: number; className?: string };

const base = (children: ReactNode, size = 18, className?: string) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const PinIcon = ({ size, className }: P) =>
  base(
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>,
    size,
    className
  );

export const PhoneIcon = ({ size, className }: P) =>
  base(
    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.66 2.63a2 2 0 0 1-.45 2.11L8.09 9.68a16 16 0 0 0 6.23 6.23l1.22-1.22a2 2 0 0 1 2.11-.45c.84.32 1.73.54 2.63.66A2 2 0 0 1 22 17Z" />,
    size,
    className
  );

export const ClockIcon = ({ size, className }: P) =>
  base(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>,
    size,
    className
  );

export const MenuBookIcon = ({ size, className }: P) =>
  base(
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </>,
    size,
    className
  );

export const ArrowUpRight = ({ size, className }: P) =>
  base(<path d="M7 17 17 7M7 7h10v10" />, size, className);

export const StarIcon = ({ size, className }: P) => (
  <svg
    width={size ?? 14}
    height={size ?? 14}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.6 1.6 6.8L12 17.6 5.8 20.9l1.6-6.8-5.2-4.6 6.9-.7Z" />
  </svg>
);

export const PawIcon = ({ size, className }: P) =>
  base(
    <>
      <ellipse cx="12" cy="16.5" rx="4.5" ry="3.7" />
      <ellipse cx="5.5" cy="10" rx="1.7" ry="2.2" />
      <ellipse cx="9.5" cy="6.7" rx="1.7" ry="2.2" />
      <ellipse cx="14.5" cy="6.7" rx="1.7" ry="2.2" />
      <ellipse cx="18.5" cy="10" rx="1.7" ry="2.2" />
    </>,
    size,
    className
  );

export const MenuHamburger = ({ size, className }: P) =>
  base(
    <>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </>,
    size,
    className
  );

export const CloseIcon = ({ size, className }: P) =>
  base(
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>,
    size,
    className
  );
