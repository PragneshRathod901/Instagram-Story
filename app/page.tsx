import Image from "next/image";
import Stories from "./ui/StoryBtn";
import instaIcn from "@/public/instagram-text-icon.svg";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="bg-white h-screen p-3">
      <Image src={instaIcn} width={120} height={35} alt="logo" />
      <Suspense>
        <Stories />
      </Suspense>
    </main>
  );
}
