import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

type ProjectCardProps = {
  image: string;
  title: string;
  techs: string[];
  children: ReactNode;
  live?: string;
  repository?: string;
};

export default function ProjectCard({
  image,
  title,
  techs,
  children,
  live,
  repository,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-start w-full rounded-md outline outline-1 outline-gray-700">
      <Image
        src={image}
        alt=""
        width={536}
        height={312}
        className="w-full object-contain"
      />

      <div className="flex flex-col justify-between items-start h-full p-4">
        <div className="flex flex-col justify-start items-start">
          <div className="flex flex-row justify-start items-center">
            <h3 className="font-poppins font-semibold text-lg text-accent leading-relaxed mr-2">
              {title}
            </h3>

            {techs.map((tech, index) => (
              <Image
                key={index}
                src={tech}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 object-contain ml-2"
              />
            ))}
          </div>

          <p className="flex-1 font-poppins text-sm text-accent leading-relaxed mt-2">
            {children}
          </p>
        </div>

        <div className="flex flex-row justify-start items-center mt-6">
          <Link
            href={repository ?? ""}
            className={`${repository ? "flex" : "hidden"}
            flex justify-start items-center font-poppins text-sm text-accent hover:text-secondary`}
          >
            <Image src="/icons/github.svg" alt="" width={24} height={24} />
            <p className="ml-2 underline underline-offset-4">Repository</p>
          </Link>

          <Link
            href={live ?? ""}
            className={`${
              live ? "flex" : "hidden"
            } justify-start items-center font-poppins text-sm text-accent hover:text-secondary ml-4`}
          >
            <Image src="/icons/page.svg" alt="" width={24} height={24} />
            <p className="ml-2 underline underline-offset-4">Live Site</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
