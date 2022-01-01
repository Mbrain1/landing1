const Footer = (props) => {
  return (
   <footer className="pbc py-10">

    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-2 gap-y-8 md:grid-cols-5 mb-12">
          <div className="col-span-2 md:col-span-1 ">
            <img src="/images/logo.png" height="31" width="98" className="mx-auto" />
          </div>
          <div className=" ">
              <p className="mb-3 ac font-semibold">Company</p>
              <div className="mb-2"><a href="#">About Keykara</a></div>
              <div className="mb-2"><a href="#">Companies</a></div>
              <div className="mb-2"><a href="#">Pricing</a></div>
          </div>

          <div className=" ">
              <p className="mb-3 ac font-semibold">Services</p>
              <div className="mb-2"><a href="#">Food</a></div>
              <div className="mb-2"><a href="#">Cleaning</a></div>
              <div className="mb-2"><a href="#">Cleaning</a></div>
              <div className="mb-2"><a href="#">Laundry</a></div>
              <div className="mb-2"><a href="#">Errands</a></div>
          </div>

          <div className=" ">
              <p className="mb-3 ac font-semibold">Others</p>
              <div className="mb-2"><a href="#">FAQs</a></div>
              <div className="mb-2"><a href="#">Blog</a></div>
              <div className="mb-2"><a href="#">Contact Us</a></div>
              <div className="mb-2"><a href="#">Terms Of Service</a></div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-row items-center justify-center md:justify-items-center md:justify-start">
              <img src="/images/instagram.png" height='32' width="32"  className="mx-2"/> 

              <img src="/images/facebook.png" height='32' width="32"  className="mx-2"/> 

              <img src="/images/twitter.png" height='32' width="32" className="mx-2" />
            </div>
          </div>
        </div>
          <hr className="w-full" />

          <div className="md:flex justify-between my-4">
              <div className="ac text-[13px] text-center md:text-left">Copyright © 2021 Heykara. All rights reserved.</div>

              <div className="ac text-center md:text-left"><a className="ac text-[13px]">Terms of Use</a> | <a className="ac text-[13px]">Privacy Policy</a></div>
          </div>
      </div>
  </footer>
  )
}

export default Footer;