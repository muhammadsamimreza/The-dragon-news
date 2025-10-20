import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header className="flex flex-col justify-center items-center pt-5 space-y-1">
        <img className="w-84" src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p>{format(new Date(), "EEEE, MMMM, dd, yyyy")} </p>
      <div className="bg-gray-200 py-2 px-5 my-5">
         <div className="flex gap-5 items-center">
            <button className="btn bg-red-600 text-white"> Latest </button>
            <div> 
                <Marquee className="flex gap-10">
                    <p>Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain as.</p>
                    <p>Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain as.</p>
                    <p>Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain as.</p>
                </Marquee>
            </div>
         </div>
      </div>
      </header>
    </div>
  );
};

export default Header;
