import React from "react";
import Helper from "../../components/Helper";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import HeaderComponent from '../Products/component/HeaderComponent';

export default function Marketing({ darkMode, setDarkMode }) {
    return (
        <div className={`flex flex-wrap' gap-1 ${darkMode ? "#282828" : "transparent"}`}>
            <Sidebar />
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Helper />
            <main

                className="my-24 px-4 w-full flex flex-col overflow-hidden"
            >
                <HeaderComponent label={"الأدوات التسويقية "} />

            </main>
        </div>
    );
}

