import React, { Fragment,useState } from 'react';
import logo from '../Img/logo.png'
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

const Navbar = () => {
    const Links = [
        {name:"HOME",link:'/'},
        {name:"OUR CHIEF",link:'/'},
        {name:"ABOUT",link:'/'},
    ]

    const [open,setOpen] = useState(false)
    const [close,setClose] = useState(true)
    
    return (
        <Fragment>
            <div className='w-full mb-0 fixed top-0 left-0 md:px-40 px-7'>
                <div className='flex items-center justify-between'>
                    <div className='flex item-center'>
                        <a href='/'><img className='w-20 cursor-pointer' src={logo} alt="" /></a>
                    </div>

                    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <BsList name={open ? 'close':'menu'}></BsList>
                    </div>


                    <div className={`md:flex justify-between md:items-center md:pb-0 pb-12 absolute bg:white md:static md:z-auto z-[-1] right-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                        <ul className='md:flex font-semibold' >
                        {
                            Links.map((link)=>(
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                            ))
                        }
                        
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Navbar;