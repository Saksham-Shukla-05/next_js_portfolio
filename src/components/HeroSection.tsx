import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function CardDemo() {
  return (
    <Card className="dark:bg-black bg-white w-full rounded-none border-none shadow-none  p-0">
      <CardContent className="p-0 md:bg-none bg-[url('/wave-haikei3.png')] bg-cover bg-bottom   ">
        <div className="flex z-20 flex-col md:flex-row items-center justify-between gap-10 md:gap-0 ">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex p-1 flex-col gap-8 text-center md:text-left items-center md:items-start">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Hi, I&apos;m Saksham Shukla
            </h1>
            <p className="text-base sm:text-lg font-semibold">
              A passionate Full Stack Developer from India
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              I specialize in building modern, scalable web apps with the MERN
              stack and TypeScript.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto justify-center md:justify-start">
              <Button className="bg-purple-700  text-white w-full sm:w-auto">
                Download Resume
              </Button>
              <Button className="bg-purple-700 text-white w-full sm:w-auto">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              className="rounded-2xl w-48 sm:w-52 md:w-56 lg:w-72 xl:w-80 h-auto"
              src="/avataaars (2).png"
              alt="saksham"
              width={280}
              height={170}
              priority
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
