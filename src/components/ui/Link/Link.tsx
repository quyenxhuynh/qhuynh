import {
  Link as AriaLink,
  LinkProps as AriaLinkProps,
} from "react-aria-components";

import LinkVariants from "./Link.styles";

interface LinkProps extends AriaLinkProps {
  // TODO: implement external
  intent?: "default" | "button";
  external?: boolean;
}

const Link: React.FC<LinkProps> = ({ intent, external, ...props }) => {
  return (
    <AriaLink
      rel="noreferrer"
      target={external ? "_blank" : ""}
      className={LinkVariants({ intent: intent })}
      {...props}
    />
  );
};

export default Link;
