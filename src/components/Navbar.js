import React, { Fragment, useState } from 'react';
import logo from '../Img/logo.png'
import { BsXLg,BsTextParagraph } from "react-icons/bs";


const Navbar = () => {
    let Links = [
        {name:'Home', link:'/'},
        {name:'About', link:'/'},
        {name:'Our Chief', link:'/'}
    ]

    const [isOpen,setisOpen] = useState(false)
    return (
       <Fragment>
            <div className='bg-white w-full fixed top-0 left-0'>
                <div className='md:px-10 py-4 md:flex items-center justify-between'>
                    <div className='flex items-center cursor-pointer'>
                        <img className='w-16' src={logo} alt="" />
                        <span className='font-bold text-yellow-600 text-xl'>Foodie</span>
                    </div>

                    <div className='absolute right-8 top-6 cursor-pointer text-3xl md:hidden'onClick={()=>setisOpen(!isOpen)} >
                        {
                            isOpen ? <BsXLg/>:<BsTextParagraph/>
                        }
                        
                    </div>
                    <ul className={`md:flex md:items-center pl-9 md:pl-0 md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto transition-all ease-in duration-500 bg-white ${isOpen ? 'top-12': 'top-[-490px]'}`}>
                        {
                            Links.map((link)=> 
                                (
                                    <li className='my-7 md:my-0 md:ml-8 font-semibold'><a href="/">{link.name}</a></li>
                                    
                                )
                                
                             )
                             
                        }
                        <button className='btn bg-yellow-600 text-white py-1 px-3 rounded md:ml-8 md:static'>Start with us</button>
                    </ul>
                </div>
            </div>

            <div>
             <h1>Foodie</h1>
            </div>
       </Fragment>
    );
};

export default Navbar;