"use client";
import { FC, useState } from "react";

type DesignCardProps = {
  title: string;
  instructor: string;
  startDate: string;
  endDate: string;
  price: string;
  image: string;
  profile: string;
};

const DesignCard: FC<DesignCardProps> = ({
  title,
  instructor,
  startDate,
  endDate,
  price,
  image,
  profile,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`box-border bg-white border border-[#D0D5DD] rounded-[24px] w-[368px] h-[553px] flex flex-col items-start p-[2px] transition-all duration-500 ${
        isHovered ? "hover:bg-[#3F2BFF] hover:text-white" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-[364px] h-[240px]`}>
        <img
          src={image}
          alt={title}
          className="w-full h-[240px] object-cover rounded-[23px] pr-[2px]"
        />
      </div>
      <div className="flex flex-col items-start p-[30px] gap-[22px] w-[364px] h-[309px] flex-none order-1 self-stretch">
        <div className="flex flex-col items-start p-0 gap-[4px] w-[203px] h-[77px] flex-none order-0">
          <p
            className={`font-bold text-[14px] leading-[21px] flex items-center ${
              isHovered ? "text-[#ffffff]" : "text-[#707070]"
            } w-[203px] h-[21px]`}
          >
            Moodle Tutorials
          </p>
          <h3
            className={`font-bold text-[20px] leading-[26px] flex items-center ${
              isHovered ? "text-[#ffffff]" : "text-[#212121]"
            } w-[250px] h-[52px]`}
          >
            {title}
          </h3>
        </div>
        <div className="flex flex-col items-start p-0 gap-[20px] w-[304px] h-[98px] flex-none order-1 self-stretch">
          <div className="relative w-[121.16px] h-[30px] flex-none order-0">
            <img
              src={profile}
              alt={instructor}
              className="absolute w-[30px] h-[30px] left-0 top-[calc(50%-15px)] rounded-[192px]"
            />
            <p
              className={`absolute w-[83.41px] h-[21px] left-[39.45px] top-[3.73px] font-medium text-[12px] leading-[21px] flex items-center ${
                isHovered ? "text-[#ffffff]" : "text-[#212121]"
              }`}
            >
              {instructor}
            </p>
          </div>
          <div className="flex flex-col items-start p-0 gap-[6px] w-[304px] h-[48px] flex-none order-1 self-stretch">
            <div className="flex flex-row items-center p-0 gap-[7px] w-[304px] h-[21px]">
              <p
                className={`font-bold text-[12px] leading-[21px] flex items-center ${
                  isHovered ? "text-[#ffffff]" : "text-[#434343]"
                }`}
              >
                Course start date:
              </p>
              <p
                className={`font-normal text-[12px] leading-[21px] flex items-center ${
                  isHovered ? "text-[#ffffff]" : "text-[#434343]"
                }`}
              >
                {startDate}
              </p>
            </div>
            <div className="flex flex-row items-center p-0 gap-[8px] w-[278.12px] h-[21px]">
              <p
                className={`font-bold text-[12px] leading-[21px] flex items-center ${
                  isHovered ? "text-[#ffffff]" : "text-[#434343]"
                }`}
              >
                Course end date:
              </p>
              <p
                className={`font-normal text-[12px] leading-[21px] flex items-center ${
                  isHovered ? "text-[#ffffff]" : "text-[#434343]"
                }`}
              >
                {endDate}
              </p>
            </div>
          </div>
        </div>
        <span
          className={`font-bold text-[20px] leading-[30px] flex items-center ${
            isHovered ? "text-[#D3FF24]" : "text-[#3F2BFF]"
          } w-[44.84px] h-[30px] flex-none order-2`}
        >
          {price}
        </span>
      </div>
    </div>
  );
};

export default DesignCard;
