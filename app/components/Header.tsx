import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="flex flex-row w-[1115px] pt-28 mx-auto">
        <div className=" w-[392px] h-[392px] rounded-full overflow-hidden mr-[4.38rem] flex-shrink-0">
          <Image
            src="/images/jaze.png"
            alt="header image"
            width={392}
            height={392}
          />
        </div>
        <div className="w-[654px] h-[324px] pt-9 ">
          <div className="text-2xl text-green-primary mb-5">ABOUT ME</div>
          <div className="mb-5">
            <Image
              src="/images/aboutmeline.png"
              alt="about me line image"
              width={146}
              height={1}
            />
          </div>
          <div className="flex gap-4 mb-[10px]">
            <div className="text-7xl text-white">Hi, I'm </div>
            <div className="text-7xl text-green-primary">Jaze Tan</div>
          </div>
          <div className="text-white text-xl ">
            I’m a web developer who loves creating websites that are not only
            functional but also fun to use. I work with React, TypeScript, and a
            bunch of other tools to build seamless web experiences. When I’m not
            coding, I’m probably learning something new or working on a side
            project. Feel free to reach out if you'd like to work together!
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
