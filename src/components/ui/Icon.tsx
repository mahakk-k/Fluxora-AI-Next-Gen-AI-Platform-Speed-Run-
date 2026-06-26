type IconProps = {
  name: string;
  className?: string;
  size?: number;
};

const iconMap: Record<string, string> = {
  "arrow-path": "/icons/arrow-path.svg",
  "arrow-trending-up": "/icons/arrow-trending-up.svg",
  "chart-pie": "/icons/chart-pie.svg",
  "chevron-down": "/icons/chevron-down.svg",
  "chevron-left": "/icons/chevron-left.svg",
  "chevron-right": "/icons/chevron-right.svg",
  "chevron-up-solid": "/icons/chevron-up-solid.svg",
  "chevron-up": "/icons/chevron-up.svg",
  "cog-8-tooth": "/icons/cog-8-tooth.svg",
  "cube-16-solid": "/icons/cube-16-solid.svg",
  "link-solid": "/icons/link-solid.svg",
  link: "/icons/link.svg",
  search: "/icons/search.svg",
  "x-mark": "/icons/x-mark.svg",
};

export default function Icon({ name, className, size = 24 }: IconProps) {
  const src = iconMap[name];
  if (!src) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      draggable={false}
    />
  );
}
