"use client";

import { useState, useEffect } from "react";
import DesignCard from "./DesignCard";
import React, { Suspense } from "react";
import { COURSES } from "../../../lib/config";

export default function AvailableCoursesSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-20">
      <div className="container-xs flex flex-col items-center gap-5">
        <h2 className="font-bold text-gray-900 text-2xl">Available courses</h2>

        <div className="grid grid-cols-4 justify-center gap-10">
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
