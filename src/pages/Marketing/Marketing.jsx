import React from "react";
import { BsPersonCheckFill, BsTicketPerforated } from "react-icons/bs";
import { CiBadgeDollar, CiBank, CiBullhorn, CiCalendar, CiCreditCard1, CiDiscount1, CiGift, CiSearch, CiSettings } from "react-icons/ci";
import { GiLovers, GiNotebook } from "react-icons/gi";
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
                <div className="flex justify-end items-center my-3">

                    <button className="flex flex-row items-center gap-2 text-black">
                        <span><CiSettings className="text-xl" /></span>
                        اعدادات التسويق
                    </button>
                </div>
                <body>
                    <h2>الخصومات</h2>
                    <discounts className="flex flex-row gap-3 my-3">
                        <div className="flex cursor-pointer flex-col justify-center items-center border rounded-md p-3 gap-3">
                            <BsTicketPerforated className="text-green-300 text-3xl" />
                            <h3>كوبونات التخفيض</h3>
                            <p>انشاء كوبون او مجموعة كوبونات</p>
                        </div>
                        <div className="flex cursor-pointer flex-col justify-center items-center border rounded-md p-3 gap-3">
                            <CiDiscount1 className="text-green-300 text-3xl" />
                            <h3> العروض االخاصة</h3>
                            <p>تفعيل وإدارة العروض ومتابعة إحصائياتها</p>
                        </div>
                        <div className="flex cursor-pointer flex-col justify-center items-center border rounded-md p-3 gap-3">
                            <CiBank className="text-green-300 text-3xl" />
                            <h3>عرض البنك </h3>
                            <p>إنشاء عروض وخصومات عند الدفع ببطاقة بنك محدد</p>
                        </div>
                    </discounts>
                    <h2>الحملات</h2>
                    <campaigns className="flex flex-row gap-3 my-3">
                        <div className="flex cursor-pointer flex-col justify-center items-center border rounded-md p-3 gap-3">
                            <BsPersonCheckFill className="text-green-300 text-3xl" />
                            <h3> السلات المتروكة</h3>
                            <p>إرسال تذكير للعملاء لإتمام الشراء</p>
                        </div>
                        <div className="flex cursor-pointer flex-col justify-center items-center border rounded-md p-3 gap-3">
                            <CiBullhorn className="text-green-300 text-3xl" />
                            <h3> إعلانات سويبلي </h3>
                            <p>إنشاء وإدارة حملات إعلانية في عدة منصات</p>
                        </div>
                        <div className="flex cursor-pointer flex-col justify-center items-center border rounded-md p-3 gap-3">
                            <CiBullhorn className="text-green-300 text-3xl" />
                            <h3>الحملات التسويقية  </h3>
                            <p>التسويق عبر الرسائل النصية والإشعارات</p>
                        </div>
                        <div className="flex cursor-pointer flex-col justify-center items-center border rounded-md p-3 gap-3">
                            <CiBadgeDollar className="text-green-300 text-3xl" />
                            <h3>التسويق بالعمولة   </h3>
                            <p>إنشاء رابط أو كوبون تسويقي</p>
                        </div>
                    </campaigns>
                    <h2>التسويق بالمحتوى</h2>
                    <contentmarketing className="flex flex-row gap-3 my-3">

                        <div className="flex cursor-pointer flex-col justify-center items-center border rounded-md p-3 gap-3">
                            <CiBullhorn className="text-green-300 text-3xl" />
                            <h3> الإعلانات   </h3>
                            <p>عرض شريط إعلانى في صفحات المتجر</p>
                        </div>
                        <div className="flex cursor-pointer flex-col justify-center items-center border rounded-md p-3 gap-3">
                            <GiNotebook className="text-green-300 text-3xl" />
                            <h3>المدونة    </h3>
                            <p>نشر مقالات عن منتجاتك وخدماتك</p>
                        </div>
                        <div className="flex cursor-pointer flex-col justify-center items-center border rounded-md p-3 gap-3">
                            <CiSearch className="text-green-300 text-3xl" />
                            <h3>تحسين محركات البحث    </h3>
                            <p>زيادة عدد مرات طهور متجرك وزياراته</p>
                        </div>
                    </contentmarketing>
                    <h2>الأدوات المتقدمة</h2>
                    <advancedtools className="flex flex-row gap-3 my-3">

                        <div className="flex cursor-pointer flex-col justify-center items-center border rounded-md p-3 gap-3">
                            <GiLovers className="text-green-300 text-3xl" />
                            <h3>ولاء العملاء      </h3>
                            <p>إكسب العملاء عبر نقاط ولاء ومكافآت</p>
                        </div>
                        <div className="flex cursor-pointer flex-col justify-center items-center border rounded-md p-3 gap-3">
                            <CiGift className="text-green-300 text-3xl" />
                            <h3>  الإهداء الرقمى   </h3>
                            <p>إتاحة خيار المشتريات الرقمية</p>
                        </div>
                        <div className="flex cursor-pointer flex-col justify-center items-center border rounded-md p-3 gap-3">
                            <CiCreditCard1 className="text-green-300 text-3xl" />
                            <h3> الطلب المباشر    </h3>
                            <p>إختصار خطوات إتمام الطلب على العميل</p>
                        </div>
                        <div className="flex cursor-pointer flex-col justify-center items-center border rounded-md p-3 gap-3">
                            <CiCalendar className="text-green-300 text-3xl" />
                            <h3>الجدول الزمني للتسويق </h3>
                            <p>معاينة العروض المجدولة</p>
                        </div>
                    </advancedtools>
                </body>
            </main>
        </div>
    );
}

