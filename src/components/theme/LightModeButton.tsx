import Button from "@/components/ui/Button";
import MoonIcon from "../icons/MoonIcon";
import React from "react";
import SunIcon from "../icons/SunIcon";
import { ThemeButtonProps } from "@/utils/ThemeButtonProps";
import { useState } from "react";

const LightModeButton: React.FC<ThemeButtonProps> = ({ size, onPressEnd }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <Button
      intent="icon"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onPressEnd={onPressEnd}
    >
      {isHovered ? <SunIcon size={size} /> : <MoonIcon size={size} />}
    </Button>
  );
};

export default LightModeButton;
