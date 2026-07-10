import clsx from "clsx";

const PATH_TOP =
  "M1536,0 H-1 V135 S184.32,65 460.8,155 S860.16,105 1121.28,137 S1413.12,105 1536,105 V0";
const PATH_BOTTOM =
  "M1536,300 H-1 V135 S184.32,235 460.8,145 S860.16,195 1121.28,163 S1413.12,195 1536,195 V300";

type JellyDividerProps = {
  fill?: string;
  variant?: "top" | "bottom";
  className?: string;
};

export default function JellyDivider({
  fill = "#f91814",
  variant = "top",
  className,
}: JellyDividerProps) {
  return (
    <div className={clsx("relative w-full overflow-hidden", className)}>
      <svg
        className="jelly pointer-events-none block h-[300px] w-full max-w-[100vw] max-md:h-auto"
        width="100%"
        viewBox="0 0 1536 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d={variant === "top" ? PATH_TOP : PATH_BOTTOM} fill={fill} />
      </svg>
    </div>
  );
}
