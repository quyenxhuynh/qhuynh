import { VariantProps, cva } from "cva";

export type ButtonVariantProps = VariantProps<typeof ButtonVariants>;
const ButtonVariants = cva(
  "flex flex-col justify-center content-center transition hover:duration-150 hover:ease-in-out",
  {
    variants: {
      intent: {
        icon: "",
        link: "",
        primary:
          "px-4 py-3 bg-pink-300 hover:bg-pink-400 text-darker rounded-md",
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
  },
);

export default ButtonVariants;
