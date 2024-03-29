import ButtonVariants from "./Button.styles";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";

interface ButtonProps extends AriaButtonProps {
  intent?: "icon" | "link" | "primary";
}

const Button: React.FC<ButtonProps> = ({ intent, ...props }) => {
  return (
    <AriaButton className={ButtonVariants({ intent: intent })} {...props} />
  );
};

export default Button;
