import MainLayout from "@/components/layouts/MainLayout";
import MainLayoutHeader from "@/components/layouts/MainLayoutHeader";
import MainLayoutSubheader from "@/components/layouts/MainLayoutSubheader";
import PageLayout from "@/components/layouts/PageLayout";

export default function Home() {
  return (
    <MainLayout>
      <PageLayout>
        <MainLayoutHeader>HELLO, WORLD.</MainLayoutHeader>
        <MainLayoutSubheader>
          My name is Quyen and I&apos;m a Software Engineer at Microsoft.
        </MainLayoutSubheader>
      </PageLayout>
    </MainLayout>
  );
}
