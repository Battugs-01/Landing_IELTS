import { COURSES } from "@/lib/config";
import { Suspense } from "react";
import DesignCard from "./DesignCard";

export default function AvailableCoursesSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-20 lg:py-16 md:py-12 sm:py-8 w-screen px-4">
      <div className="container-xs flex flex-col items-center gap-5">
        <h2 className="font-bold text-gray-900 text-2xl">Available courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Suspense fallback={<div>Loading feed...</div>}>
            {COURSES.map((course, index) => (
              <div
                className="flex flex-col items-start p-2 w-[368px] h-[553px]"
                key={"coursesGrid" + index}
              >
                <DesignCard
                  title={course.title}
                  instructor={course.instructor}
                  startDate={course.startDate}
                  endDate={course.endDate}
                  price={course.price}
                  image={course.image}
                  profile={course.profile}
                />
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
