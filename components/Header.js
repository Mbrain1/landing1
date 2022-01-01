const Header = (props) => {
  return (
   <nav className="container nav-1 mx-auto flex justify-between items-center ">
          <img alt="" src="/images/logo.png" height="31" width="98" />

          <ul className="hidden md:flex">
            <li><a>Services <i className="fas fa-caret-down"></i></a></li>
            <li><a>About Us</a></li>
            <li><a>Pricing</a></li>
            <li><a>Reach Us</a></li>
            <li><a className="py-3 px-4 rounded-full blue-2-bg text-white text-[14px]">Get Started</a></li>
          </ul>

          <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-grey-200 group ">
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600"></div>

              <div className="z-50 absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                    <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                      <li className="hover:bg-gray-200 py-4 px-6 w-full"><a>Services <i className="fas fa-caret-down"></i></a></li>
                      <li className="hover:bg-gray-200 py-4 px-6 w-full"><a>About Us</a></li>
                      <li className="hover:bg-gray-200 py-4 px-6 w-full"><a>Pricing</a></li>
                      <li className="hover:bg-gray-200 py-4 px-6 w-full"><a>Reach Us</a></li>
                      <li className="hover:bg-gray-200 py-4 px-6 w-full"><a className="py-3 px-4 rounded-full blue-2-bg text-white text-[14px]">Get Started</a></li>
                    </ul>
              </div>

          </button>
      </nav>
  )
}

export default Header;