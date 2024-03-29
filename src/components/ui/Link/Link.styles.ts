import { cva, VariantProps } from "cva";

export type LinkVariantProps = VariantProps<typeof LinkVariants>;
const LinkVariants = cva(
  "flex flex-row flex-wrap content-center hover:cursor-pointer transition duration-150 ease-in-out",
  {
    variants: {
      intent: {
        default: "hover:text-pink-400 ",
        button:
          "px-4 py-3 bg-pink-300 hover:bg-pink-400 hover:text-darker text-darker rounded-md",
      },
    },
    defaultVariants: {
      intent: "default",
    },
  },
);

export default LinkVariants;
