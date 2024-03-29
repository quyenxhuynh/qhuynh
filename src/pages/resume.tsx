import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import MainLayoutHeader from "@/components/layouts/MainLayoutHeader";
import PageLayout from "@/components/layouts/PageLayout";
import MainLayoutSubheader from "@/components/layouts/MainLayoutSubheader";
import Link from "@/components/ui/Link";

export default function ResumePage() {
  return (
    <MainLayout>
      <PageLayout>
        <MainLayoutHeader>RESUMÉ.</MainLayoutHeader>
        <MainLayoutSubheader>
          This page is under construction!
        </MainLayoutSubheader>
        <div className="flex flex-wrap content-center justify-center py-4">
          <Link
            href="https://drive.google.com/file/d/1dlA7_2e0kOqcpzsWZOpgrgJ6yQD66WhP/view?usp=sharing"
            intent="button"
            external={true}
          >
            Download PDF
          </Link>
        </div>
      </PageLayout>
    </MainLayout>
  );
}
