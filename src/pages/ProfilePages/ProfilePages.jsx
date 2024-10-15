import React from "react";
import { Form } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";
import Helper from "../../components/Helper";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import HeaderComponent from './../Products/component/HeaderComponent';

export default function ProfilePages({ darkMode, setDarkMode }) {
    return (
        <div className={`flex flex-wrap' gap-1 ${darkMode ? "#282828" : "transparent"}`}>
            <Sidebar />
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Helper />
            <main
                className="my-24 px-4 w-full flex flex-col overflow-hidden"
            >
                <HeaderComponent label={"الصفحات التعريفية"} />
                <header className="flex flex-row justify-between  m-3">
                    <div className="">
                        <button className="flex flex-row  text-black items-center gap-2 rounded-pill px-10 bg-blue-400">
                            <span> <FaPlus /> </span>
                            صفحة جديدة
                        </button>
                    </div>
                    <div className="flex flex-row">
                        <button className=" text-black flex flex-row items-center gap-2">
                            <span>
                                <IoBagRemoveOutline />
                            </span>
                            خدمات
                        </button>
                    </div>
                </header>
                <body
                    className="flex flex-col gap-3 rounded-md overflow-hidden border">
                    <div className="header flex flow-row bg-gray-100 p-3 items-center gap-2">
                        <span>
                            <LuFileSpreadsheet className="text-2xl" />
                        </span>
                        <h3 className=" flex flex-row items-center gap-3">
                            الصفحات التعريفية
                        </h3>
                        <span>(3 صفحات)</span>

                    </div>
                    <div className="body flex flex-col gap-3">
                        {/* Exchange and return policy */}
                        <div className="flex flex-row justify-between p-2 border-b-2 items-center">
                            <label htmlFor="custom-switch">
                                سياسية الاستبدال والاسترجاع
                            </label>
                            <div className="flex items-center gap-2 ">
                                <Form>
                                    <Form.Check // prettier-ignore
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </Form>
                                <button className="text-black" >
                                    <BsThreeDots className="text-2xl" />
                                </button>
                            </div>
                        </div>
                        {/* Terms of Use and Privacy Policy */}
                        <div className="flex flex-row justify-between p-2 border-b-2 items-center">
                            <label htmlFor="custom-switch">
                                سياسة الاستخدام والخصوصية
                            </label>
                            <div className="flex items-center gap-2 ">
                                <Form>
                                    <Form.Check // prettier-ignore
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </Form>
                                <button className="text-black" >
                                    <BsThreeDots className="text-2xl" />
                                </button>
                            </div>
                        </div>
                        {/* terms and conditions */}
                        <div className="flex flex-row justify-between p-2 border-b-2 items-center">
                            <label htmlFor="custom-switch">
                                الأحكام والشروط
                            </label>
                            <div className="flex items-center gap-2 ">
                                <Form>
                                    <Form.Check // prettier-ignore
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </Form>
                                <button className="text-black" >
                                    <BsThreeDots className="text-2xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </body>

            </main>
        </div>
    );
}

