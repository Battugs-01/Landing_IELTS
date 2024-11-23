// import { useTranslations } from "next-intl";
import { ReviewSection } from "@/components/main/ReviewSection";
import { REVIEWS } from "@/lib/config";
import AvailableCoursesSection from "@/components/main/AvailableCources";
import Team from "@/components/main/Team";

export default function Home() {
  // const t = useTranslations("Home");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div>{t("title")}</div> */}
      <ReviewSection reviews={REVIEWS} />
      <AvailableCoursesSection />
      <Team />
    </main>
  );
}
