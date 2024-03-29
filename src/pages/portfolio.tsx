import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import MainLayoutHeader from "@/components/layouts/MainLayoutHeader";
import MainLayoutSubheader from "@/components/layouts/MainLayoutSubheader";
import PageLayout from "@/components/layouts/PageLayout";

export default function PortfolioPage() {
  return (
    <MainLayout>
      <PageLayout>
        <MainLayoutHeader>PORTFOLIO.</MainLayoutHeader>
        <MainLayoutSubheader>
          <div>This page is under construction, please check back later!</div>
          <div>♡</div>
        </MainLayoutSubheader>
      </PageLayout>
    </MainLayout>
  );
}
