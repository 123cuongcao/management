import * as React from "react";

function MenuItem({ icon, children }) {
  return (
  
  );
}

function ClassManagementApp() {
  return (
    <div className="flex flex-col justify-center shadow-sm max-w-[283px]">
      <div className="flex flex-col pr-3.5 pb-20 w-full bg-white shadow-lg">
        <div className="flex flex-col">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/59c9cc7b9e3c0a15faf3726d03160f64e867f6ea2e781a061dedf62d0d479699?apiKey=a365ccf4d9914ba4a3de4c73152edf03&"
            alt="Class Management App Logo"
            className="self-center ml-0 aspect-[2.94] max-w-[200px] w-[200px]"
          />
          <div className="shrink-0 h-px bg-gray-200 border-0 border-gray-200 border-solid" />
        </div>
        <button className="justify-center items-center px-16 py-3.5 mt-14 text-base leading-7 text-white bg-red-700 rounded-lg">
          Quản lý lớp học
        </button>
        <MenuItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/509e127c71df7844469f6fce39664398dc14031319d76f52ddc29cce579b46bd?apiKey=a365ccf4d9914ba4a3de4c73152edf03&">Quản lý nhân viên</MenuItem>
        <MenuItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4300d6e76d88cb5aa570f1b29e97efd9d320e923e09a2bfc7f8f52ed735557b2?apiKey=a365ccf4d9914ba4a3de4c73152edf03&">Quản lý sinh viên</MenuItem>
        <MenuItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/34e713fe3d1876499481f1070e4d805bda0a98960ade92a692bec4b390680d69?apiKey=a365ccf4d9914ba4a3de4c73152edf03&">Quản lý học liệu</MenuItem>
      </div>
    </div>
  );
}

export default ClassManagementApp;

