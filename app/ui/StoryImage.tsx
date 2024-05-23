import Image from 'next/image';

export default function Page({src,name}:{src:string,name:string}){
    return <div className=" rounded-lg overflow-hidden ">
    <Image
      src={src}
      layout="responsive"
      width={1024}
      height={2048}
      alt={name + "'s  Story"}
      className="w-full h-full"
    ></Image>
  </div>
}