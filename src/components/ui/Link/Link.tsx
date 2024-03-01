import {
  Link as AriaLink,
  LinkProps as AriaLinkProps,
} from "react-aria-components";

import LinkVariants from "./Link.styles";

interface LinkProps extends AriaLinkProps {
  // TODO: implement external
  external?: boolean;
}

const Link: React.FC<LinkProps> = ({ external, ...props }) => {
  return (
    <AriaLink
      rel="noreferrer"
      target={external ? "_blank" : ""}
      className={LinkVariants()}
      {...props}
    />
  );
};

export default Link;
