import { ChildrenOnlyProps } from "@/utils/ChildrenOnlyProps";
import React from "react";

const PageLayout: React.FC<ChildrenOnlyProps> = ({ children }) => {
  return (
    <div className="h-screen w-full bg-green flex flex-col content-center justify-center gap-4">
      {children}
    </div>
  );
};

export default PageLayout;
