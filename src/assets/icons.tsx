import { cn } from "@/lib/utils";

interface ILogoProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Logo = ({ className, ...props }: ILogoProps) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 80 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <rect
        x="30.1516"
        y="0.535088"
        width="10.7018"
        height="42.6407"
        transform="rotate(45 30.1516 0.535088)"
        fill="#928DAB"
      />
      <rect
        x="0.00307751"
        y="30.6967"
        width="10.7018"
        height="42.2719"
        transform="rotate(-45 0.00307751 30.6967)"
        fill="#928DAB"
      />
      <rect x="21.2859" width="18.7281" height="8.02632" fill="#1F1C2C" />
      <rect
        x="20.2158"
        y="52.9737"
        width="18.7281"
        height="8.02632"
        fill="#1F1C2C"
      />
      <rect x="39" y="8" width="29" height="10" fill="#FE5F55" />
      <rect
        x="70"
        y="52.9474"
        width="44.9474"
        height="9.63158"
        transform="rotate(-90 70 52.9474)"
        fill="#928DAB"
      />
      <rect x="39" y="26" width="29" height="9" fill="#FE5F55" />
      <rect
        x="38.6755"
        y="8"
        width="15.1653"
        height="8.02631"
        transform="rotate(45 38.6755 8)"
        fill="#1F1C2C"
      />
      <rect x="39" y="43" width="29" height="10" fill="#FE5F55" />
      <rect
        x="33"
        y="47.7235"
        width="15.1653"
        height="8.02632"
        transform="rotate(-45 33 47.7235)"
        fill="#1F1C2C"
      />
    </svg>
  );
};
