import MainLayout from "@/components/layouts/MainLayout";
import SocialMediaLinks from "@/components/socials/SocialMediaLinks";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Home() {
  return (
    <MainLayout>
      <SocialMediaLinks />
      <div className="m-2">
        <ThemeToggle />
      </div>
    </MainLayout>
  );
}
