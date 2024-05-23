import Image from "next/image";
import { fetchUsers } from "@/app/lib/data";
import Link from "next/link";

export default async function Stories() {
  let data = await fetchUsers();

  return (
    <div className="flex justify-start flex-row gap-x-2 p-1">
      {data &&
        data.map(
          (value) =>
            value.stories.length > 0 && (
              <StoryBtn
                imgUrl={value.profile}
                uName={value.name}
                uId={value.id}
                key={value.id}
              />
            )
        )}
    </div>
  );
}

export function StoryBtn({
  imgUrl,
  uName,
  uId,
}: {
  imgUrl: string;
  uName: string;
  uId: string;
}) {
  return (
    <div className=" flex flex-col items-center gap-y-2">
      <Link
        className="rounded-full overflow-hidden w-16 h-16"
        href={"/stories/" + uId}
      >
        <Image
          src={imgUrl}
          layout="responsive"
          width={500}
          height={500}
          alt={"profileImage of " + uName}
          className="w-full h-full"
        ></Image>
      </Link>
      <div className="p-1">{uName}</div>
    </div>
  );
}
