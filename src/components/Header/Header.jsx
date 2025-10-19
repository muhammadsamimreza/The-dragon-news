import React from 'react';
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className='w-11/12 mx-auto'>
           <header className='flex flex-col justify-center items-center py-5 space-y-1'>
                 <img className='w-84' src={logo} alt="" />
                 <p>Journalism Without Fear or Favour</p>
           </header>
        </div>
    );
};

export default Header;