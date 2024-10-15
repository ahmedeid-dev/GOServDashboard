import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Helper from "../../components/Helper";
import HeaderComponent from './../Products/component/HeaderComponent';
import { CiCircleQuestion, CiFilter } from "react-icons/ci";
import profile from "./../../assets/avatar_male.webp"
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlineReply } from "react-icons/md";

export default function Feedback({ darkMode, setDarkMode }) {
    return (
        <div className={`flex flex-wrap' gap-1 ${darkMode ? "#282828" : "transparent"}`}>
            <Sidebar />
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Helper />
            <main

                className="my-24 px-4 w-full flex flex-col overflow-hidden"
            >
                <HeaderComponent label={"الأسئلة والتقييمات"} />

                <div className="feedback mx-6 my-3">
                    <div className=" flex flex-row justify-between items-center ">
                        <h2>
                            الأسئلة والتقييمات <span>(15)</span>
                        </h2>
                        <button className="text-black flex flex-row items-center gap-2">
                            <span>
                                <CiFilter />
                            </span>
                            تصفية
                        </button>
                    </div>
                    <div className="flex flex-col gap-3 rounded-md overflow-hidden border">
                        <div className="header flex flow-row bg-gray-100 p-2 justify-between items-center">
                            <h3>سياسة الإستبدال والاسترجاع</h3>
                            <div className="flex flow-row items-center gap-4">
                                <h4>مند 4 أيام</h4>
                                <button className="text-black flex flex-row justify-center items-center gap-2 border rounded-pill bg-gray-200">
                                    <CiCircleQuestion />
                                    <h6>سؤال</h6>
                                </button>
                            </div>
                        </div>
                        <div className="body flex flex-col gap-3">
                            <div className="profile flex flex-row gap-6 items-center">
                                <div className="img w-20 rounded-full overflow-hidden">
                                    <img className=" w-full" src={profile} alt="profile" />
                                </div>
                                <div className="name flex flex-col gap-3 items-center">
                                    <h4 className="text-green-400">UserName</h4>
                                    <h6>Title</h6>
                                </div>
                            </div>
                            <div className="actions p-3 flex flex-row justify-between items-center">
                                <div className="select flex flex-row items-center gap-3">
                                    <button className="text-black border border-green-500 rounded-md overflow-hidden p-3 flex flex-row items-center gap-3">
                                        <span>
                                            <FaCheck />
                                        </span>
                                        منشور
                                    </button>
                                    <button className="text-black border border-green-500 rounded-md overflow-hidden p-3 flex flex-row items-center gap-3">
                                        <span>
                                            <IoMdClose className="text-xl"  />
                                        </span>
                                        غير منشور
                                    </button>
                                    <button className="text-black border border-green-500 rounded-md overflow-hidden p-3 flex flex-row items-center gap-3">
                                        <span>
                                            <MdOutlineReply  className="text-xl"  />
                                        </span>
                                        الرد
                                    </button>
                            </div>
                                <div className="delete">
                                    <button className="border border-red-500 rounded-md overflow-hidden p-3">
                                        <RiDeleteBin5Line className="text-red-500 text-3xl" />
                                    </button>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

