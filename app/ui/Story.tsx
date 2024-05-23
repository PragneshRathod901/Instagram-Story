"use client";
import { User } from "@/app/lib/definitions";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { EllipsisHorizontalIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import StoryImage from "@/app/ui/StoryImage";

export default function StoryPage({ data }: { data: User }) {
  let [pageNo, SetPageNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => HandleNavigation(true), 5000);
    return () => clearInterval(intervalId);
  }, [pageNo]);

  const HandleNavigation = (goNextImage: boolean) => {
    if (goNextImage) {
      if (pageNo >= data.stories.length - 1) {
      } else {
        SetPageNumber(pageNo + 1);
      }
    } else {
      if (pageNo <= 0) {
      } else {
        SetPageNumber(pageNo - 1);
      }
    }
  };
  return (
    <div className=" flex-1 relative">
      <div className="absolute top-0 flex  flex-col p-2 w-full z-10">
        <div className="flex  z-10 h-4 w-full gap-1 p-1">
          {data.stories.map((val, index) => (
            <div
              key={val.id}
              className={
                "rounded-full flex-1  " +
                (index == pageNo ? "bg-slate-500" : "bg-slate-200")
              }
            ></div>
          ))}
        </div>
        <div className=" flex p-2 justify-between w-full">
          <div className="flex gap-x-2 ">
            <div className="rounded-full h-16 w-16 overflow-hidden ">
              <Image
                src={data?.profile}
                layout="responsive"
                width={500}
                height={500}
                alt={data.name + "'s  profile image"}
                className="w-full h-full"
              ></Image>
            </div>
            <div className="flex flex-col justify-around">
              <h2 className=" font-semibold">{data.name}</h2>
              <p className="text-gray-400 font-light	">Today,9:30pm</p>
            </div>
          </div>
          <div className="flex">
            <div className="h-full w-16">
              <EllipsisHorizontalIcon />
            </div>
            <Link href={"/"} className="h-full w-16">
              <XMarkIcon />
            </Link>
          </div>
        </div>
      </div>

      <button
        className="absolute right-0 h-full w-1/2 z-1"
        onClick={(e) => HandleNavigation(true)}
      ></button>
      <button
        className="absolute left-0 h-full w-1/2 z-1"
        onClick={(e) => HandleNavigation(false)}
      ></button>
      <Suspense>
        <StoryImage src={data.stories[pageNo].src} name={data.name} />
      </Suspense>
    </div>
  );
}
