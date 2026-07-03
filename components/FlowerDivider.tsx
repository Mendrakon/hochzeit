type FlowerDividerProps = {
  className?: string;
  /** Strichfarbe der Seitenlinien (Standard: helles Salbeigrün) */
  color?: string;
};

/**
 * Dezenter Blüten-Divider: dünne Salbei-Linien mit einer kleinen Blüte in der
 * Mitte. Die Blütenblätter nehmen die Textfarbe (currentColor) der Sektion an,
 * der winzige Mittelpunkt ist Bordeaux – der einzige sparsame Rot-Akzent.
 */
export default function FlowerDivider({
  className = "",
  color = "var(--color-sage-light)",
}: FlowerDividerProps) {
  return (
    <svg
      width="180"
      height="40"
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-hidden="true"
      className={className}
    >
      <line x1="0" y1="20" x2="68" y2="20" stroke={color} strokeWidth="1" />
      <line x1="112" y1="20" x2="180" y2="20" stroke={color} strokeWidth="1" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <path d="M90 8 C 86 14, 86 20, 90 24 C 94 20, 94 14, 90 8 Z" />
        <path d="M78 20 C 84 16, 90 16, 94 20 C 90 24, 84 24, 78 20 Z" />
        <path d="M102 20 C 96 16, 90 16, 86 20 C 90 24, 96 24, 102 20 Z" />
        <path d="M90 32 C 86 26, 86 20, 90 16 C 94 20, 94 26, 90 32 Z" />
      </g>
      <circle cx="90" cy="20" r="2" fill="var(--color-wine)" />
    </svg>
  );
}
