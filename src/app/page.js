import Image from "next/image";
import { FiSearch, FiMenu } from 'react-icons/fi';
import logo from '../../images/Logo.png';
import fav from "../../images/Favorites.png";
import cart from "../../images/Cart1.png";
import user from "../../images/User.png";
import loc from "../../images/Location.png";
import vec from "../../images/Vector.png";
import pay from "../../images/Payment.png";
import iphone from "../../images/Phone-mini.png";
import headphones from "../../images/headphones.png";
import watch from "../../images/watch.png";
import card from "../../images/card.png";
import logob from "../../images/Logo-b.png";
import twitter from "../../images/Twitter.png";
import facebook from "../../images/Facebook.png";
import tiktok from "../../images/Tiktok.png";
import insta from "../../images/Instagram.png";

export default function Home() {
  return (
    <div>
    <div className="w-full border-b border-[#B5B5B5]  px-2 py-4 md:py-2 md:px-20">
      {/* Header for laptop and tablet */}
      <div className="hidden md:flex md:justify-between md:items-center md:px-8">
        {/* Logo and Search Bar Section */}
        <div className="flex items-center space-x-6 lg:ml-24">
          <Image src={logo} height={40} width={200} alt="Logo" className="w-auto h-auto sm:w-[40px] sm:h-[25px] md:w-[65.4px] md:h-[22.87px]" />
          <div className="relative bg-gray-100 rounded-lg overflow-hidden flex items-center w-full max-w-xs lg:max-w-sm">
            <span className="absolute left-3">
              <FiSearch className="text-gray-500" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-transparent focus:outline-none w-full"
            />
          </div>
        </div>
        
        {/* Navigation Buttons Section */}
        <div className="flex flex-auto items-center px-6 md:px-6 space-x-8 md:space-x-12   lg:space-x-10">
          <button className="flex flex-auto items-center">Home</button>
          <button className="flex flex-auto items-center text-gray-500 opacity-70">About</button>
          <button className="flex flex-auto items-center text-gray-500 opacity-70">Contact Us</button>
          <button className="flex flex-auto items-center text-gray-500 opacity-70">Blog</button>
        </div>
        
        {/* Icons Section */}
        <div className="flex flex-auto items-center space-x-10  pl-10  lg:space-x-8 ">
          <Image src={fav} height={32} width={32} alt="Favorites" className=" flex felx-auto w-[32px] h-[32px]" />
          <Image src={cart} height={32} width={32} alt="Cart" className="w-[32px] h-[32px]  flex felx-auto " />
          <Image src={user} height={32} width={32} alt="User" className="w-[32px] h-[32px]  flex felx-auto " />
        </div>
      </div>

      {/* Header for mobile */}
      <div className="flex justify-between items-center md:hidden px-4">
        <div className="flex items-center space-x-6">
          <Image src={logo} height={40} width={40} alt="Logo" className=" sm:w-[60px] sm:h-[30px] md:w-[65.4px] md:h-[22.87px]" />
        </div>
        <FiMenu className="text-gray-500 text-2xl" />
      </div>
    </div>
    <div className="w-full flex felx-auto py-10  space-x-3 ">
      <div className="hidden md:flex md:flex-auto items-center md:ml-44  ">
        <Image src={loc} height={40} width={40} className="w-[24px]  h-[24px] mr-4"/>
        <div className="flex flex-col">
          <div className=" font-inter text-[#B2B2B2] font-medium text-[14px]">Step1</div>
          <div className=" font-inter text-[#B2B2B2] font-medium text-[19px]">Address</div>
        </div>
      </div>
      <div className="flex flex-auto items-center ">
        <Image src={vec} height={40} width={40}  className="w-[24px] bg-slate-500 rounded-[18px]  h-[24px] mr-4"/>
        <div className="flex flex-col">
          <div className=" font-inter text-[#B2B2B2] font-medium text-[14px]">Step2</div>
          <div className=" font-inter text-[#B2B2B2] font-medium text-[19px]">Shopping</div>
        </div>
      </div>
      <div className="flex flex-auto items-center ">
        <Image src={pay} height={40} width={40}  className="w-[24px]  h-[24px] mr-4"/>
        <div className="flex flex-col">
          <div className=" font-inter text-[#000000] font-medium text-[14px]">Step3</div>
          <div className=" font-inter text-[#000000] font-medium text-[19px]">Payment</div>
        </div>
      </div>
    </div>
    <div className="flex flex-auto px-2 md:px-24 py-6 gap-20 w-full ">
      <div className="hidden md:flex  md:flex-col md:h-auto  md:py-6 md:mt-6 md:px-4 md:border md:rounded-xl md:border-[#EBEBEB]">
        <div className="flex flex-col font-inter font-medium text-[20px] text-[#000000]">Summary</div>
        <div className=" flex flex-col space-y-4 w-full  py-4 pr-3 ">
          <div className="flex flex-row w-full  py-2 px-2 items-center rounded-xl bg-[#F6F6F6]">
            <Image src={iphone} height={40} width={40} className="mr-2 items-center"/>
            <div className="font-inter flex-grow font-medium leading-6 items-center text-[16px] mr-10 text-[#000000]">Apple iPhone 14 Pro Max 128Gb</div>
            <div className="font-inter font-bold text-[16px] items-center text-[#000000]">$1399</div>
          </div>
          <div className="flex flex-row w-full items-center py-2 px-2 rounded-xl bg-[#F6F6F6]">
            <Image src={headphones} height={40} width={40} className="mr-2 items-center"/>
            <div className="font-inter font-medium  felx-grow leading-6 items-center text-[16px] mr-10 text-[#000000]">AirPods Max Silver</div>
            <div className="font-inter font-bold text-[16px] ml-auto items-center text-[#000000]">$549</div>
          </div>
          <div className="flex flex-row w-full items-center  py-2 px-2 rounded-xl bg-[#F6F6F6]">
            <Image src={watch} height={40} width={40} className="mr-2 items-center"/>
            <div className="font-inter font-medium flex-grow leading-6 items-center text-[16px] mr-10 text-[#000000]">Apple Watch Series 9 GPS 41mm</div>
            <div className="font-inter font-bold text-[16px] ml-auto items-center text-[#000000]">$399</div>
          </div>
        </div>
        <div className="flex flex-col w-full h-60 py-3 pr-3">
          <div className=" leading-4 font-inter font-medium text-[14px] text-[#545454]">Address</div>
          <div className="py-6 leading-6  mb-2">1131 Dusty Townline, Jacksonville, TX 40322</div>
          <div className=" leading-4 pb-2 font-inter font-medium text-[14px] text-[#545454]">Shipment method</div>
          <div className="leading-6 font-inter font-medium text-[16px] text-[#000000]">Free</div>
          <div className=" flex flex-col mt-4 ">
            <div className="flex flex-row  w-full  py-2 justify-between items-center">
              <div className="leading-6  text-[#000000] tracking-3per font-inter font-medium text-[16px]">Subtotal</div>
              <div className=" leading-8 text-[#000000] font-inter font-medium text-[16px]">$2347</div>
            </div>
            <div className="flex flex-row  w-full  py-1 justify-between  items-center">
              <div className="leading-8  text-[#545454]  font-inter font-normal text-[16px]">Estimated Tax</div>
              <div className=" leading-8 text-[#000000] font-inter font-medium text-[16px]">$50</div>
            </div>
            <div className="flex flex-row  w-full  justify-between  items-center">
              <div className="leading-8  text-[#545454] tracking-3per font-inter font-normal text-[16px]">Estimated Shipping & Handling</div>
              <div className=" leading-8 text-[#000000] font-inter font-medium text-[16px]">$29</div>
            </div>
            <div className="flex flex-row  w-full  py-2 justify-between  items-center">
              <div className="leading-6  text-[#000000] tracking-3per font-inter font-bold text-[16px]"> Total</div>
              <div className=" leading-8 text-[#000000] font-inter font-bold text-[16px]">$2426</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:px-0 ">
        <div className="py-6 mt-6 font-inter font-bold  text-[20px] leading-4 tracking-wide md:tracking-3per">Payment</div>
        <div className="flex flex-auto h-8 gap-14 ">
          <div className="relative flex items-center">
            <button className="font-inter font-medium  text-[15px] leading-4 tracking-3per text-[#000000]">Credit Card</button>
            <div className="absolute left-0 right-0 bottom-[-8px] h-[1px] bg-black"></div>
          </div>
          <button className="font-inter font-medium text-[15px] leading-4 tracking-3per text-[#000000]">PayPal</button>
          <button className="font-inter font-medium text-[15px] leading-4 tracking-3per text-[#000000]">PayPal Credit</button>
        </div>
        <Image src={card} className="py-10"/>
        <div className="flex flex-col gap-4 ">
          <input
                type="text"
                placeholder="CardHolder Name"
                className=" rounded-md py-3 px-4 bg-transparent border  border-[#CECECE] w-auto"
              />
          <input
                type="text"
                placeholder="Card Number"
                className=" rounded-md py-3 px-4  bg-transparent border  border-[#CECECE] w-auto"
              />
          <div className="flex flex-auto gap-4">
            <input
                  type="text"
                  placeholder="Exp.Date"
                  className=" rounded-md py-3 px-4 bg-transparent border  border-[#CECECE] w-full md:w-auto"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className=" rounded-md py-3 px-4 bg-transparent border  border-[#CECECE] w-full md:w-auto"
                />
          </div>
        </div>  
        <div className="felx flex-row items-center py-6">
          <input
            type="checkbox"
            className="mr-3 rounded focus:ring-black checked:bg-black "
            defaultChecked
          />
          <span className="font-inter font-medium text-[15px] leading-6 text-[#000000]">Same as billing Address </span>
        </div>
        <div className="flex flex-row gap-4">
          <button className="py-6 px-20 border w-full items-center rounded-md border-[#000000] font-inter font-medium text-[16px] leading-4">Back</button>
          <button className="py-6 px-20 border bg-black items-center text-white rounded-md w-full border-[#000000] font-inter font-medium text-[16px] leading-4 1">Pay</button>
        </div>
      </div>
    </div>
    <div className="bg-black py-[104px] px-20  gap-6">
      <div className="flex flex-col md:flex md:flex-row md:gap-44 gap-8 pb-6">
        <div className="space-y-4  pb-7 md:flex md:flex-col md:gap-2 ">
          <Image src={logob} className="w-[65.4px] h-[22.87px] mx-auto md:m-0"/>
          <div className="font-inter font-medium text-[14px] leading-6 mx-auto text-center md:text-start  md:w-96 text-[#CFCFCF]">We are a residential interior design firm located in Portland. 
            Our boutique-studio offers more than</div>
        </div>
        <div className="flex flex-col  pb-7  text-center md:text-start gap-2">
          <div className="font-inter font-semibold text-[16px] leading-4 text-[#FFFFFF]">Services</div>
          <div className="font-inter font-normal text-[14px] leading-8 text-[#CFCFCF]">Bonus Program</div>
          <div className="font-inter font-normal text-[14px] leading-8 text-[#CFCFCF]">Gift cards</div>
          <div className="font-inter font-normal text-[14px] leading-8 text-[#CFCFCF]">Credit and payment</div>
          <div className="font-inter font-normal text-[14px] leading-8 text-[#CFCFCF]">Services contracts</div>
          <div className="font-inter font-normal text-[14px] leading-8 text-[#CFCFCF]">Non-cash account</div>
          <div className="font-inter font-normal text-[14px] leading-8 text-[#CFCFCF]">Payment</div>
        </div>
        <div className="flex flex-col gap-2 pb-7 text-center md:text-start">
          <div className="font-inter font-semibold text-[16px] leading-4 text-[#FFFFFF]">Assistance to the buyer</div>
          <div className="font-inter font-normal text-[14px] leading-8 text-[#CFCFCF]">Find an order</div>
          <div className="font-inter font-normal text-[14px] leading-8 text-[#CFCFCF]">Terms of delivery</div>
          <div className="font-inter font-normal text-[14px] leading-8 text-[#CFCFCF]">Exchange and return of goods</div>
          <div className="font-inter font-normal text-[14px] leading-8 text-[#CFCFCF]">Guarantee</div>
          <div className="font-inter font-normal text-[14px] leading-8 text-[#CFCFCF]">Frequently asked questions</div>
          <div className="font-inter font-normal text-[14px] leading-8 text-[#CFCFCF]">Terms of use of the site</div>
        </div>
      </div>
      <div className="flex flex-row justify-between md:justify-start md:gap-10">
        <Image src={twitter} className="mx-4 md:m-0"/>
        <Image src={facebook} className="mx-4 md:m-0"/>
        <Image src={tiktok} className="mx-4 md:m-0"/>
        <Image src={insta} className="mx-4 md:m-0"/>
      </div>
    </div>
    </div>
  );
}
