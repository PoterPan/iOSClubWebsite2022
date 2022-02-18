import * as React from "react";
import Navbar from "./compoments/navbar";

const IndexPage = () => {
  return (
    <div>
      {Navbar()}
      <div className="container mx-auto break-all">
        <div className="h-32"></div> {/* 空白區 */}
        {/* We are iOS Club */}
        <div className="py-5 sm:flex sm:p-10 sm:space-x-10 justify-center">
          <div className=" sm:w-4/12 w-full self-center">
            <div className="text-center text-5xl font-bold">
              <h1 className="py-3">We are</h1>
              <h1 className="py-3">iOS Club.</h1>
            </div>
            <p className="py-3 text-center text-gray-700">
              一個教你從零開始打造專屬 Apps 的社團
            </p>
          </div>
          <img
            className="w-full sm:w-6/12 p-10 sm:p-0"
            src={require("../images/svg/logo.svg").default}
            alt="logo"
          ></img>
        </div>
        {/* About iOS Club. */}
        <div className="py-5 sm:flex sm:p-10 sm:space-x-10 justify-center">
          <img
            className="w-full sm:w-6/12 p-10 sm:p-0"
            src={require("../images/svg/about_ios.svg").default}
            alt="logo"
          ></img>
          <div className=" sm:w-4/12 w-full self-center">
            <div className="text-center text-5xl font-bold">
              <h1 className="py-3">About</h1>
              <h1 className="py-3">iOS Club.</h1>
            </div>
            <p className="py-3 text-center text-gray-700">
              是全台唯二 Apple
              官方認證的社團，也是一個結合學術的志工性社團。每年寒、暑假社員們會有國際交流的機會，到海外參加
              iOS Club 官方舉辦的冬、夏令營，
              和不同國家的學生進行合作活動與技術交流。
            </p>
          </div>
        </div>
        {/* iOS Club 會做什麼 */}
        <div className="py-5 sm:flex sm:p-10 sm:space-x-10 justify-center">
          <div className=" sm:w-4/12 w-full self-center">
            <div className="text-center text-5xl font-bold">
              <h1 className="py-3">iOS Club 會做什麼</h1>
            </div>
            <p className="py-3 text-center text-gray-700">
              在比賽方面， 社團鼓勵所有社員參加對外性比賽。 近年來也都在WWDC
              學生挑戰賽及移動應用創新賽等比賽取得佳績。
              當然，平時社團活動也不僅僅有社課，我們還會舉辦講座、夜烤、WorkShop、社遊、期末聚等，超多活動等你們來參加！
              我們不只和葳格高中建立了長期的任教合作，
              身為志工性社團的我們，還會和相關機構及國小一同舉辦志工營隊，將在社團內所學回饋社會。
            </p>
          </div>
          <img
            className="w-full sm:w-6/12 p-10 sm:p-0"
            src={require("../images/svg/iosclub_doing.svg").default}
            alt="logo"
          ></img>
        </div>
        {/* iOS Club 做過什麼 */}
        <h2 className="text-center text-3xl py-3 font-bold">
          iOS Club 做過什麼
        </h2>
        <div className="py-5 px-5 sm:grid sm:grid-cols-3 sm:gap-3 justify-center text-center">
          <div className="w-full rounded-md shadow-lg">
            <h2 className="my-8">社團課程</h2>
            <p className="my-8">每週二、四的晚上 18:30～20:30</p>
            <p className="my-8">
              <a href="">Learn More</a>
            </p>
          </div>
          <div className="w-full rounded-md shadow-lg">
            <h2 className="my-8">社團課程</h2>
            <p className="my-8">每週二、四的晚上 18:30～20:30</p>
            <p className="my-8">
              <a href="">Learn More</a>
            </p>
          </div>
          <div className="w-full rounded-md shadow-lg">
            <h2 className="my-8">社團課程</h2>
            <p className="my-8">每週二、四的晚上 18:30～20:30</p>
            <p className="my-8">
              <a href="">Learn More</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
