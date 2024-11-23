import { Suspense } from "react";
import TeamMemberCard from "./Card";
import { TEAM_MEMBER } from "../../../lib/config";

export default function TeamIntroductionSection() {
  return (
    <section
      className="flex flex-col items-center justify-center border-t border-gray-200 
      bg-gray-50 py-20 lg:py-16 md:py-12 sm:py-8 box-border w-full max-w-screen-xl"
    >
      <div className="container flex flex-col gap-16 px-4">
        {/* Header Section */}
        <header className="text-center max-w-3xl mx-auto">
          <h2
            className="font-bricolagegrotesque text-4xl font-bold text-gray-900 
            lg:text-3xl md:text-2xl sm:text-xl"
          >
            Meet our Team
          </h2>
          <p
            className="font-bricolagegrotesque text-lg text-gray-700 mt-4 
            lg:text-base md:text-sm sm:text-xs animate-fade-in"
          >
            It prepares them to thrive in today’s world — and to shape
            tomorrow’s. Apple is constantly creating resources to help educators
            do just that. Not only powerful products, but also tools,
            inspiration, and curricula to create magical learning experiences
            and make every moment of screen time worth it.{" "}
          </p>
        </header>

        {/* Team Member Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Suspense fallback={<div>Loading team members...</div>}>
            {TEAM_MEMBER.map((member, index) => (
              <TeamMemberCard key={`team-member-${index}`} {...member} />
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
