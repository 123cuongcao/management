import * as React from "react";

function HeroSection() {
  return (
    <header className="flex flex-col justify-center text-4xl font-bold text-center text-white rounded-none">
      <div className="flex flex-col items-center pt-1.5 w-full bg-white rounded-full shadow-2xl mix-blend-multiply max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-col pt-12 w-full bg-white rounded-full shadow-2xl mix-blend-multiply max-w-[1476px] max-md:max-w-full">
          <div className="flex flex-col justify-center ml-10 w-80 max-w-full max-md:ml-2.5">
            <h1 className="justify-center">Hello A !</h1>
          </div>
          <div className="shrink-0 mt-28 bg-white rounded-full shadow-2xl mix-blend-multiply h-[27px] max-md:mt-10 max-md:max-w-full" />
        </div>
      </div>
    </header>
  );
}

export default HeroSection;