import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[var(--foreground-rgb)] h-screen w-screen grid place-content-center">
      <div className="absolute -top-12 -left-12 h-48 rounded-full w-48 blur-[200px] bg-[var(--gradient-one)]"></div>
      <div className="absolute  -right-24 -bottom-24 h-64 rounded-full w-64 blur-[400px] bg-[var(--gradient-two)]"></div>
      <div className="relative">
        <h1 className="text-[var(--word-landing)] text-8xl text-center font-extrabold">
          HELLO WORLD
        </h1>
        <div className="absolute top-0">
          <h1 className=" text-[var(--word-landing)] text-8xl text-center font-extrabold mix-blend-overlay">
            HELLO WORLD
          </h1>
          <div className="absolute top-0  w-auto grid grid-cols-1  ">
            <div className="flex">
              {Array.from({ length: 16 }).map((_, index) => (
                <div className="flex group/mask ">
                  <div className="mix-bleh-6 w-6 transition-colors duration-300 ease-in-out  group-hover/mask:bg-[var(--gradient-one)] rounded-full blur-lg "></div>
                  <div className="h-6 w-6 transition-colors duration-300 ease-in-out   group-hover/mask:bg-[var(--gradient-two)] rounded-full blur-lg "></div>
                </div>
              ))}
            </div>
            <div className=" flex">
              {Array.from({ length: 16 }).map((_, index) => (
                <div className="flex group/mask">
                  <div className="h-6 w-6 transition-colors duration-300 ease-in-out  group-hover/mask:bg-[var(--gradient-one)] rounded-full blur-lg "></div>
                  <div className="h-6 w-6 transition-colors duration-300 ease-in-out  group-hover/mask:bg-[var(--gradient-two)] rounded-full blur-lg "></div>
                </div>
              ))}
            </div>
            <div className=" flex">
              {Array.from({ length: 16 }).map((_, index) => (
                <div className="flex group/mask">
                  <div className="h-6 w-6 transition-colors duration-300 ease-in-out  group-hover/mask:bg-[var(--gradient-one)] rounded-full blur-lg "></div>
                  <div className="h-6 w-6 transition-colors duration-300 ease-in-out  group-hover/mask:bg-[var(--gradient-two)] rounded-full blur-lg "></div>
                </div>
              ))}
            </div>
            <div className=" flex">
              {Array.from({ length: 16 }).map((_, index) => (
                <div className="flex group/mask">
                  <div className="h-6 w-6 transition-colors duration-300 ease-in-out  group-hover/mask:bg-[var(--gradient-one)] rounded-full blur-lg "></div>
                  <div className="h-6 w-6 transition-colors duration-300 ease-in-out  group-hover/mask:bg-[var(--gradient-two)] rounded-full blur-lg "></div>
                </div>
              ))}
            </div>
            <div className=" flex">
              {Array.from({ length: 16 }).map((_, index) => (
                <div className="flex group/mask">
                  <div className="h-6 w-6 transition-colors duration-300 ease-in-out  group-hover/mask:bg-[var(--gradient-one)] rounded-full blur-lg "></div>
                  <div className="h-6 w-6 transition-colors duration-300 ease-in-out  group-hover/mask:bg-[var(--gradient-two)] rounded-full blur-lg "></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
