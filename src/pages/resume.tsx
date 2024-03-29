import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import MainLayoutHeader from "@/components/layouts/MainLayoutHeader";
import Button from "@/components/ui/Button";
import PageLayout from "@/components/layouts/PageLayout";
import MainLayoutSubheader from "@/components/layouts/MainLayoutSubheader";

export default function ResumePage() {
  return (
    <MainLayout>
      <PageLayout>
        <MainLayoutHeader>RESUMÉ.</MainLayoutHeader>
        <MainLayoutSubheader>
          This page is under construction!
        </MainLayoutSubheader>
        <div className="flex flex-wrap content-center justify-center py-4">
          <Button>Download PDF</Button>
        </div>
      </PageLayout>
    </MainLayout>
  );
}
