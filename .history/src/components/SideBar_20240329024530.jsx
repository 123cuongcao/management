import * as React from "react";
import { Link } from "react-router-dom";

function SideBar() {


  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-0 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        
        <ul className="space-y-2 font-medium">
          <li>
            {/* <a
            onClick={() => window.location.href = "/ClassManagement"}
              // to="/ClassManagement"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <div className="flex gap-2.5 justify-center  py-2 text-base leading-7 text-black">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/509e127c71df7844469f6fce39664398dc14031319d76f52ddc29cce579b46bd?apiKey=a365ccf4d9914ba4a3de4c73152edf03&"
                  alt=""
                  className="shrink-0 my-auto w-6 aspect-square"
                />
                <div className="flex-auto">Quản lý lớp học</div>
              </div>
            </a> */}

            <a
            onClick={() => window.location.href = "/ClassManagement"}
              // to="/ClassManagement"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <div className="flex gap-2.5 justify-center  py-2 text-base leading-7 text-black">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/509e127c71df7844469f6fce39664398dc14031319d76f52ddc29cce579b46bd?apiKey=a365ccf4d9914ba4a3de4c73152edf03&"
                  alt=""
                  className="shrink-0 my-auto w-6 aspect-square"
                />
                <div className="flex-auto">Quản lý lớp học</div>
              </div>
            </a>
          </li>

          <li>
            <a
            onClick={() => window.location.href = "/TeacherManagement"}
            // onClick={() => <Redirect to="/TeacherManagement" />}
              // to="/TeacherManagement"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <div className="flex gap-2.5 justify-center  py-2 text-base leading-7 text-black">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/509e127c71df7844469f6fce39664398dc14031319d76f52ddc29cce579b46bd?apiKey=a365ccf4d9914ba4a3de4c73152edf03&"
                  alt=""
                  className="shrink-0 my-auto w-6 aspect-square"
                />
                <div className="flex-auto">Quản lý nhân viên</div>
              </div>
            </a>
          </li>

          <li>
            <a
            onClick={() => window.location.href = "/StudentManagement"}
              to="/StudentManagement"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <div className="flex gap-2.5 justify-center  py-2 text-base leading-7 text-black">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4300d6e76d88cb5aa570f1b29e97efd9d320e923e09a2bfc7f8f52ed735557b2?apiKey=a365ccf4d9914ba4a3de4c73152edf03&3&"
                  alt=""
                  className="shrink-0 my-auto w-6 aspect-square"
                />
                <div className="flex-auto">Quản lý sinh viên</div>
              </div>
            </a>
          </li>


          <li>
            {/* <a
              // to="/CourseManagement"
              onClick={()=>{
                window.location.href = "/CourseManagement"
              }}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <div className="flex gap-2.5 justify-center  py-2 text-base leading-7 text-black">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/34e713fe3d1876499481f1070e4d805bda0a98960ade92a692bec4b390680d69?apiKey=a365ccf4d9914ba4a3de4c73152edf03&"
                  alt=""
                  className="shrink-0 my-auto w-6 aspect-square"
                />
                <div className="flex-auto">Quản lý khóa học</div>
              </div>
            </a> */}

            <Link
              to="/CourseManagement"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <div className="flex gap-2.5 justify-center  py-2 text-base leading-7 text-black">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/34e713fe3d1876499481f1070e4d805bda0a98960ade92a692bec4b390680d69?apiKey=a365ccf4d9914ba4a3de4c73152edf03&"
                  alt=""
                  className="shrink-0 my-auto w-6 aspect-square"
                />
                <div className="flex-auto">Quản lý khóa học</div>
              </div>
            </Link>
            
          </li>

          <li>
            <a
              // to="/CourseManagement"
              onClick={()=>{
                window.location.href = "/ModuleCourseManagement"
              }}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <div className="flex gap-2.5 justify-center  py-2 text-base leading-7 text-black">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/34e713fe3d1876499481f1070e4d805bda0a98960ade92a692bec4b390680d69?apiKey=a365ccf4d9914ba4a3de4c73152edf03&"
                  alt=""
                  className="shrink-0 my-auto w-6 aspect-square"
                />
                <div className="flex-auto">Quản lý Module</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </aside>
 
  );
}

export default SideBar;
