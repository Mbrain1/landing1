import {useState} from "react";
import Link from "next/link";

const Header = (props) => {

  const [showServices,setShowServices] = useState(false);

  return (
   <nav className="z-50 container nav-1 mx-auto flex justify-between items-center ">
          <Link href="#"><a><img alt="" src="/images/logo.png" height="31" width="98" /></a></Link>

          <ul className="hidden md:flex">
            <li className="overflow-hidden"><a className="cursor-pointer" onClick={() => setShowServices(!showServices)}>Services <i className="fas fa-caret-down"></i></a>

                 <div className={`bg-white border rounded-xl absolute z-50 transition-all duration-300 ${showServices ? 'visible top-20 ' : 'invisible top-12 '}`}>
                    <div className="hover:bg-gray-200"><a className="py-3 block px-6">Laundry</a></div>
                    <div className="hover:bg-gray-200"><a className="py-3 block px-6">Errands</a></div>
                    <div className="hover:bg-gray-200"><a className="py-3 block px-6">House Cleaning</a></div>
                  </div>
                

            </li>
            <li><Link href="#"><a>About Us</a></Link></li>
            <li><Link href="#"><a>Pricing</a></Link></li>
            <li><Link href="#"><a>Reach Us</a></Link></li>
            <li><Link href="#"><a className="py-3 px-4 rounded-full blue-2-bg text-white text-[14px]">Get Started</a></Link></li>
          </ul>

          <div className={`z-50 absolute top-0 left-0  h-screen  w-full ${showServices ? 'block' : 'hidden'}`} onClick={() => setShowServices(false)}></div>

          <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-grey-200 group ">
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600"></div>

              <div className="z-50 absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                    <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                      <li className="hover:bg-gray-200 py-4 px-6 w-full overflow-hidden"><a onClick={() => setShowServices(!showServices)}>Services <i className="fas fa-caret-down"></i></a>

                       <div className={`bg-white border  absolute z-50 transition-all duration-300 ${showServices ? 'visible right-20 ' : 'invisible right-0 '}`}>
                          <div className="hover:bg-gray-200"><a className="py-3 block px-6">Laundry</a></div>
                          <div className="hover:bg-gray-200"><a className="py-3 block px-6">Errands</a></div>
                          <div className="hover:bg-gray-200"><a className="py-3 block px-6">House Cleaning</a></div>
                      </div>

                  </li>
                      <li className="hover:bg-gray-200 py-4 px-6 w-full"><a>About Us</a></li>
                      <li className="hover:bg-gray-200 py-4 px-6 w-full"><a>Pricing</a></li>
                      <li className="hover:bg-gray-200 py-4 px-6 w-full"><a>Reach Us</a></li>
                      <li className="hover:bg-gray-200 py-4 px-6 w-full"><Link href='#'><a className="py-3 px-4 rounded-full blue-2-bg text-white text-[14px]">Get Started</a></Link></li>
                    </ul>
              </div>

          </button>
      </nav>
  )
}

export default Header;