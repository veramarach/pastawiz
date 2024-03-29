import logo from "../assets/logo.png"
import { MdArrowUpward, MdClose, MdMenu} from "react-icons/md"
import React from "react"
import {Link, animateScroll as scroll} from "react-scroll"

const Header = () =>{
  const [navbar, setNavbar]= React.useState(false)
  const [arrow, setArrow]= React.useState(false)
    const [showMenu, setShowMenu] = React.useState(false)
    const scrollToTop = () => {
        scroll.scrollToTop()
    }
    const handleMenu =(e:any)=>{
        setShowMenu(!showMenu)
        e?.stopPropagation()
    }
    const changebackground = ()=>{
        if(window.scrollY >= 70){
            setNavbar(true)
        }else{    
            setNavbar(false)
        }
    }
    const changeArrow = ()=>{
        if(window.scrollY >= 200){
            setArrow(true)
        }else{    
            setArrow(false)
        }
    }
    window.addEventListener("scroll", changebackground)
    window.addEventListener("scroll", changeArrow)
  return (
    <div className={`${navbar ? "bg-black" :"bg-transparent" }  transition-all duration-200 ease-in fixed w-full mobile:w-screen mobile:px-2  z-10 text-white  `}>
        <div className="flex items-center justify-between h-[90px] px-40 mobile:px-0 tablet:px-2  ">
        <img src={logo} alt="" />
        <nav className="">
            <ul className="flex items-center mobile:hidden tablet:hidden text-xl font-bold space-x-10 ">
                <li><Link to="home" 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={1000} className=" hover:text-[#FFCC33] transition-colors duration-300 ease-in cursor-pointer">HOME</Link></li>
                <li><Link to="about" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={1000} className=" hover:text-[#FFCC33] transition-colors duration-300 ease-in cursor-pointer">ABOUT US</Link></li>
                <li><Link to="chefs" 
                spy={true} 
                smooth={true} 
                offset={-10} 
                duration={1000} className=" hover:text-[#FFCC33] transition-colors duration-300 ease-in cursor-pointer">CHEFS</Link></li>
                <li><Link to="menu" 
                spy={true} 
                smooth={true} 
                offset={-10} 
                duration={1000} className=" hover:text-[#FFCC33] transition-colors duration-300 ease-in cursor-pointer">MENU</Link></li>
                <li><Link to="gallery" 
                spy={true} 
                smooth={true} 
                offset={-10} 
                duration={1000} className=" hover:text-[#FFCC33] transition-colors duration-300 ease-in cursor-pointer">GALLERY</Link></li>
                <li><Link to="contacts" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={1000} className=" hover:text-[#FFCC33] transition-colors duration-300 ease-in cursor-pointer">CONTACTS</Link></li>
                
            </ul>
           
        </nav>
        <div className=" lg:hidden xl:hidden  phone:block tablet:block text-5xl  hover:text-[#FFCC33] transition-colors duration-300 ease-in" onClick={handleMenu}>
            <MdMenu/>
            
        </div>
        <nav className={`fixed bg-black top-0 bottom-0 px-10 pt-5   transition-all duration-700 ease-in ${showMenu ? 'left-0 w-full': 'left-full w-full'}`}>
            <div className=" flex justify-end text-5xl mobile:text-3xl mobile:flex  font-bold hover:text-[#FFCC33] transition-all duration-300 ease-in" onClick={handleMenu}>
                <MdClose/>
            </div>
            <ul className=" text-center  flex flex-col  text-xl mobile:text-base font-bold space-y-9  pt-5 ">
            <li><Link to="home" 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={900}>HOME</Link></li>
                <li><Link to="about" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={900}>ABOUT US</Link></li>
                <li><Link to="chefs" 
                spy={true} 
                smooth={true} 
                offset={-10} 
                duration={900}>CHEFS</Link></li>
                <li><Link to="menu" 
                spy={true} 
                smooth={true} 
                offset={-10} 
                duration={1000}>MENU</Link></li>
                <li><Link to="gallery" 
                spy={true} 
                smooth={true} 
                offset={-10} 
                duration={1200}>GALLERY</Link></li>
                <li><Link to="contacts" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={1200}>CONTACTS</Link></li>
            </ul>
           
        </nav>
        
       
        </div>
        <button className={`text-black bg-[#ffcc33] p-3 rounded-lg absolute right-20 top-[600px] text-2xl mobile:hidden font-extrabold ${arrow ? "block" : "hidden"}`} onClick={scrollToTop}>
          <MdArrowUpward/>
        </button>
    </div>
  )
}

export default Header