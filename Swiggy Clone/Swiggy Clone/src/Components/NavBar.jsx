import logo from '../Assets/Aditya-logos.jpeg'
import { Link, NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import SignUpAndSignIN from './SignUpAndSignIn';
import { useState } from 'react';

export default function NavBar(){
    const[signIn,setSignIn]=useState('');

    function handleSignIn(){
        setSignIn('right-full');
        <SignUpAndSignIN defaultPosition={signIn}/>
    }

    return(
        <div className="w-screen fixed top-0 left-0 h-24  shadow-md bg-[white] flex justify-around items-center p-4 z-20">
           <Link to='/'> <img src={logo} alt="Logo" className='w-[80px] h-[80px]' /></Link>
            <div className="flex justify-between  w-[600px]">
                <NavLink to='/search'className={({ isActive }) =>
                isActive ? 'text-OnHoverColor' : 'text-black'
                }>
                    <div className="flex gap-2 items-center text-[17px] hover:text-OnHoverColor hover:cursor-pointer">
                        <FaSearch /> <span>Search</span>
                    </div>
                </NavLink>
                <div className="flex gap-2 items-center text-[17px] hover:text-OnHoverColor hover:cursor-pointer">
                     <BiSolidOffer /> <span>Offers</span>
                </div>
                <div className="flex gap-2 items-center text-[17px] hover:text-OnHoverColor hover:cursor-pointer">
                    <IoHelpBuoyOutline /> <span>Help</span>
                </div>
                <NavLink to='/signUp' onClick={handleSignIn} className={({isActive})=>isActive?'text-OnHoverColor':'text-black'}>
                    <div className="flex gap-2 items-center text-[17px] hover:text-OnHoverColor hover:cursor-pointer">
                        <CiUser /> <span>Sign In</span>
                    </div>
                </NavLink>
                
                <NavLink to='/Cart' className={({isActive})=>isActive ? 'text-OnHoverColor' : 'text-black'}>
                    <div className="flex gap-2 items-center text-[17px] hover:text-OnHoverColor hover:cursor-pointer">
                        <FaOpencart /> <span>Cart</span>
                    </div>
                </NavLink>
                
            </div>
        </div>
    )
}