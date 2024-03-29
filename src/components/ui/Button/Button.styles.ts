import { VariantProps, cva } from "cva";

export type ButtonVariantProps = VariantProps<typeof ButtonVariants>;
const ButtonVariants = cva("flex flex-col justify-center content-center", {
  variants: {
    intent: {
      icon: "",
      link: "",
      primary: "mx-2 py-3",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export default ButtonVariants;
