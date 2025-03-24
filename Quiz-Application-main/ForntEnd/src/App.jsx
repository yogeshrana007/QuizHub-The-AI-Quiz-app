import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./home/Home";
import Student from "./student/Student";
import Teacher from "./teacher/Teacher";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Student" element={<Student />} />
                <Route path="/Teacher" element={<Teacher />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/AboutUs" element={<AboutUs />} />
            </Routes>

            <Toaster />
            {/* <ExamInterface /> */}
        </>
    );
}

export default App;
