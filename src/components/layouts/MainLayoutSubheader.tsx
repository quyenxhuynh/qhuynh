import { ChildrenOnlyProps } from "@/utils/ChildrenOnlyProps";
import React from "react";

const MainLayoutSubheader: React.FC<ChildrenOnlyProps> = ({ children }) => {
  return <div className="text-xl">{children}</div>;
};

export default MainLayoutSubheader;
