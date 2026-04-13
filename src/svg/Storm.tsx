export default function Storm({
  width = 100,
  height = 133,
  color = "white",
  opacity = 0.6,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      opacity={opacity}
    >
      <path
        d="M54.5833 101L97.7083 49.3333H64.375L70.4167 2.04167L31.875 57.6667H60.8333L54.5833 101V101M33.3333 132.667L41.6667 74.3333H0L75 -34H91.6667L83.3333 32.6667H133.333L50 132.667H33.3333V132.667M64.7917 51.4167V51.4167V51.4167V51.4167V51.4167V51.4167V51.4167V51.4167"
        fill={color}
      />
    </svg>
  );
}
