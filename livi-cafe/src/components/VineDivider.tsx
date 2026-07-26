type Props = { dark?: boolean };

// The signature element: a single running vine with alternating leaves,
// used as a section divider. Nods to "Sark Green Fields" and the
// garden-seating vibe reviewers keep mentioning.
export default function VineDivider({ dark }: Props) {
  return (
    <svg
      className={`vine-divider${dark ? " on-dark" : ""}`}
      viewBox="0 0 1180 28"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 14 Q 30 2, 60 14 T 120 14 T 180 14 T 240 14 T 300 14 T 360 14 T 420 14 T 480 14 T 540 14 T 600 14 T 660 14 T 720 14 T 780 14 T 840 14 T 900 14 T 960 14 T 1020 14 T 1080 14 T 1140 14 T 1180 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {Array.from({ length: 20 }).map((_, i) => {
        const x = 30 + i * 60;
        const up = i % 2 === 0;
        return (
          <path
            key={i}
            d={
              up
                ? `M${x} 14 q 6 -10 14 -12 q -2 8 -14 12 Z`
                : `M${x} 14 q 6 10 14 12 q -2 -8 -14 -12 Z`
            }
            fill="currentColor"
          />
        );
      })}
    </svg>
  );
}
