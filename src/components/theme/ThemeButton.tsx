import DarkModeButton from "./DarkModeButton";
import LightModeButton from "./LightModeButton";

interface ThemeButtonProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ theme, toggleTheme }) => {
  const size = 16;

  if (theme === "light") {
    return <DarkModeButton size={size} onPressEnd={toggleTheme} />;
  } else {
    return <LightModeButton size={size} onPressEnd={toggleTheme} />;
  }
};

export default ThemeButton;
