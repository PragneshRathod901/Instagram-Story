import { fetchStories } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import StoryCarousel from "@/app/ui/Story";

export default async function Page({ params }: { params: { id: string } }) {
  const stories = await fetchStories(params.id);
  let pageNum = 0;
  if (!stories) {
    notFound();
  }
  return (
    <div className="flex flex-col text-white bg-black h-full">
      
      <StoryCarousel data={stories} />
    </div>
  );
}
