import { ChildrenOnlyProps } from "@/utils/ChildrenOnlyProps";
import React from "react";

const MainLayoutHeader: React.FC<ChildrenOnlyProps> = ({ children }) => {
  return <div className="text-6xl font-bold">{children}</div>;
};

export default MainLayoutHeader;
