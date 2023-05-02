import MasterLayout from "./components/layouts/MasterLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import React from "react";
import HomeLogged from "./components/pages/HomeLogged/HomeLogged";
import SignUp from "./components/pages/SignUp/SignUp";
import SigninSignup from "./components/layouts/SigninSignup";
import SignIn from "./components/pages/SignIn/SignIn";
import StudentCourseManagement from "./components/pages/StudentCourseManagement/StudentCourseManagement";
import SetPassword from "./components/SetPassword/SetPassword";
import CourseDetail from "./components/pages/CourseDetail/CourseDetail";
import ManageCourse from "./components/pages/ManageCourse/ManageCourse";
import TeacherMasterLayout from "./components/layouts/TeacherMasterLayout";
import AddCourse from "./components/AddCourse/AddCourse";
import AddFileCourse from "./components/pages/AddFileCourse/AddFileCourse";
const router = createBrowserRouter([
  {
    path: "",
    element: <MasterLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <HomeLogged /> },
      { path: "course-management", element: <StudentCourseManagement /> },
      { path: "course-detail", element: <CourseDetail /> },
    ],
  },
  {
    path: "account",
    element: <SigninSignup />,
    children: [
      { path: "sign-up", element: <SignUp /> },
      { path: "sign-in", element: <SignIn /> },
      { path: "set-password", element: <SetPassword /> },
    ],
  },

  {
    path: "teacher",
    element: <TeacherMasterLayout />,
    children: [
      { path: "manage-course", element: <ManageCourse /> },
      { path: "add-course", element: <AddCourse /> },
      { path: "add-course/2", element: <AddFileCourse /> },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
