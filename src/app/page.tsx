import Image from "next/image";
import { Inter } from "next/font/google";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Star, Check } from "lucide-react";
import Phone from "@/components/Phone";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pd-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image
                  src="/snake-1.png"
                  alt="Snake Image"
                  width={112}
                  height={112}
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,
                <span className="font-semibold">one-of-one</span> Phone Case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1 5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-gray-600" />
                    High-Quality, durable material
                  </li>
                  <li className="flex gap-1 5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-gray-600" />5
                    year paint guarantee
                  </li>
                  <li className="flex gap-1 5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-gray-600" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user Image"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user Image"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user Image"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user Image"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="w-4 h-4 text-green-600 fill-green-600" />
                    <Star className="w-4 h-4 text-green-600 fill-green-600" />
                    <Star className="w-4 h-4 text-green-600 fill-green-600" />
                    <Star className="w-4 h-4 text-green-600 fill-green-600" />
                    <Star className="w-4 h-4 text-green-600 fill-green-600" />
                  </div>
                  <p>
                    <span className="font-semibold">2125</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                className="absolute w-36 lg:w-40 left-36 md:left-48 -top-24 select-none  sm:block lg:block xl:block"
                src="/your-image.png"
                alt="Your Image"
                width={160} 
                height={400}
              />

              <Image
                className="absolute w-20 -left-6 -bottom-6 select-none"
                src="/line.png"
                alt="user Image"
                width={400} 
                height={400}
              />
              <Phone className="lg:w-64 md:w-60 w-56" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
