import React from "react";
// import banner from "C:/Quiz_Application/ForntEnd/public/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg";
function TeacherDrawer() {
    const banner = "/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg";
    return (
        <>
            <div className="drawer lg:drawer-open mt-5 md:mt-20">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col ">
                    {/* Page content here */}
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                        Open drawer
                    </label>

                    <div className=" w-full  ">
                        <div className="card bg-base-300 rounded-box text-2xl font-bold grid h-20 place-items-center">
                            Teacher Section
                        </div>
                    </div>
                </div>

                <div className="drawer-side  ">
                    <label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <div className="flex flex-col fixed left-0 bg-black">
                        <div className="w-20  h-20 md:ml-12 md:h-[200px] md:w-[200px] fixed">
                            <img
                                src={banner}
                                className="h-full w-full"
                                alt=""
                            />
                        </div>
                        <div className=" md:my-[210px]">
                            <ul className="menu text-white   text-base-content min-h-full my-10 text-2xl w-80 p-4 ">
                                {/* Sidebar content here */}
                                <li>
                                    <a>⌨ Dashboard</a>
                                </li>
                                <br />
                                <li>
                                    <a>✍ Exam</a>
                                </li>
                                <br />
                                <li>
                                    <a>❓Questions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeacherDrawer;
