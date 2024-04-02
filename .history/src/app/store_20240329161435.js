import { configureStore } from "@reduxjs/toolkit";
import students from "../features/students/StudentSlice"
import login from "../features/auth/authSlice"
import classes from "../features/classes/ClassSlice"
import teachers from "../features/teachers/TeacherSlice"
import courses from "../features/courses/CourseSlice"
import moduleCoures from "../features/courses/CourseSlice"
export const store = configureStore ({
    reducer: { 
        students,
        login,
        classes,
        teachers,
        courses,
        moduleCourses
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});