import DarkModeButton from './DarkModeButton';
import LightModeButton from './LightModeButton';

interface ThemeButtonProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ theme, toggleTheme }) => {
  if (theme === "light") {
    return <DarkModeButton onPressEnd={toggleTheme} />;
  } else {
    return <LightModeButton onPressEnd={toggleTheme} />;
  }
};

export default ThemeButton;
