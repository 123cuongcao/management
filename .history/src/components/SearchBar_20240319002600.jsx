import * as React from "react";

function SearchBar() {
  return (
    <form className="max-w-md mx-auto">
    <label
      htmlFor="default-search"
      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    >
      Search
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Mockups, Logos..."
        required=""
      />
      <button
        type="submit"
        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button>
    </div>
  </form>
  
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