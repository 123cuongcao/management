import * as React from "react";

function SearchBar() {
  return (
    <div className="flex gap-2 px-4 py-1 my-auto text-base leading-7 text-gray-400 whitespace-nowrap bg-white rounded border border-gray-200 border-solid">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c278336306f4f06ff8891749c331ba8726909b044e2a92d7c023f29559b521b?apiKey=a365ccf4d9914ba4a3de4c73152edf03&" alt="" className="shrink-0 my-auto w-6 aspect-square" />
      <div className="flex-auto"><input style={{}}></input></div>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="flex gap-4 justify-center self-stretch">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c4a1e084a5788c6383f25b7f8a12e3bd99a19ba82178c8833a5ac12b8f58a6f?apiKey=a365ccf4d9914ba4a3de4c73152edf03&" alt="" className="shrink-0 aspect-square w-[45px]" />
      <div className="flex flex-col">
        <div className="text-base leading-7 text-slate-800">Nguyen Van A</div>
        <div className="text-sm leading-4 text-gray-400">Teacher Assistant</div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="flex flex-col justify-center px-14 py-4 bg-white backdrop-blur-[32px] max-md:px-5">
      <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <SearchBar />
        <div className="flex gap-4 justify-end items-center">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c70dad542b3e912dc77633c38f5306000e5bc5f726ab895cce0cf6a92170111?apiKey=a365ccf4d9914ba4a3de4c73152edf03&" alt="" className="shrink-0 self-stretch my-auto aspect-square w-[31px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/08776641fc39e65af742695fee14778b8e04abfbaaadd1f494becd0f15b8f30f?apiKey=a365ccf4d9914ba4a3de4c73152edf03&" alt="" className="shrink-0 self-stretch my-auto w-6 aspect-square" />
          <UserProfile />
        </div>
      </div>
    </header>
  );
}

export default Header;