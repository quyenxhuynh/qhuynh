import { cva } from "cva";

const LinkVariants = cva(
  "flex flex-row flex-wrap content-center hover:text-pink-400 hover:cursor-pointer transition duration-150 ease-in-out",
);

export default LinkVariants;
