import { configureStore } from "@reduxjs/toolkit";
import students from "../features/students/StudentSlice"
import login from "../features/auth/authSlice"
import classes from "../features/classes/ClassSlice"
import teachers from "../features/teachers/TeacherSlice"
export const store = configureStore ({sto
        students,
        login,
        classes,
        teachers
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddlewar
      serializableCheck: false,
    }),
});