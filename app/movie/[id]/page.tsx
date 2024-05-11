import { PlayIcon, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

function Movie({ params }: { params: number }) {
  return (
    <section className="relative h-[calc(100vh-88px)] w-full overflow-y-auto bg-surface-l p-3 sm:p-4 ">
      <div className="pointer-events-none absolute inset-0 bottom-[15px] isolate  w-full bg-video-gradient" />
      <div className='grid h-[80vh] place-items-center bg-[url("/slider-banner.jpg")] bg-cover bg-center'>
        <button className="group btn btn-lg size-24 rounded-full">
          <PlayIcon className="size-10 group-hover:text-white" />
        </button>
      </div>

      <div className="flex flex-col gap-10 bg-[rgba(19,18,18,1)] px-5 pt-10 text-[#868484] sm:flex-row sm:gap-12">
        <div className="relative h-80 w-64">
          <Image
            src="/puss.jpg"
            alt="movie-image"
            className="rounded-lg"
            fill
          />
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-white">
              Kingdom of the Planet of the Apes
            </h2>
            <ul className="flex items-start gap-6 pl-2 text-sm ">
              <li className="relative flex gap-1 before:absolute before:-left-2 before:h-full before:w-1 before:bg-[#868484]">
                7.5
                <Star className="size-4" strokeWidth={4} />
              </li>
              <li className="relative before:absolute before:-left-2 before:h-full before:w-1 before:bg-[#868484]">
                action, adven, horr, sci-fi
              </li>
              <li className="relative before:absolute before:-left-2 before:h-full before:w-1 before:bg-[#868484]">
                145 min
              </li>
            </ul>
            <p className="text-md max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam odit voluptas animi consectetur impedit aspernatur, ut
              odio quae distinctio nam? odit....
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movie;
