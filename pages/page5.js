import Footer from "/components/Footer";
import Header from "/components/Header";

const Dashboard = () => {
  return (
    <>
   
 <section className="pbc py-12">

        <Header />

 


         <div className="container mx-auto py-5 mt-10">

               <h1 className="text-center font-bold blue-2 leading-tight" style={{fontSize:"max(40px,4.5vw)"}}>Checkout <br />
our <span className="inline-block relative leading-none" style={{color:"rgba(248, 192, 200, 1)"}}>pricing <img alt="" src="/images/arrow-right.png" className="md:ml-12" /></span>  <br /> options  </h1>

               <div className="blue-2  text-center my-5">
                    <div className="mx-2 text-center">
                        Our Pricing options are budget friendly and <br />
                        The point of using Lorem Ipsum is that it has a. 
                    </div> 
                </div>


                <div className="flex items-center justify-center my-2">
                  <button className="py-3 px-4 rounded-full blue-2-bg text-white mx-2">See pricing options</button>

                </div>


         </div>
    </section>






    <section className="my-12 py-12 grey-3-bg">
        <div className="container mx-auto  py-5 rounded-3xl relative grid grid-cols-1 md:grid-cols-2 md:gap-x-10">

              <div>
                  <h1 className="blue-2 font-semibold leading-tight mb-4 text-[36px] ">Convenience and Quality on <br /> your Budget</h1>

                  <p>Our Pricing options are budget friendly and the point of using Lorem Ipsum is that it has a. </p>

                  <div className="flex justify-between mt-5"><span>What’s your budget like?</span> <span>NGN 10,000</span></div>

                  <div className="mt-3 relative">
                      <img src="/images/range.png"  alt="" height="18"  className="w-full"
                       />
                  </div>

                  <div className="mt-5">
                      <p className="font-semibold my-3">Select preferred service</p>

                      <div className="card flex items-center rounded-3xl grey-6-bg my-3">
                          <img alt="" src="/images/checked-square.png" width="24" height="24" />
                          <div className="ml-4">
                              <h3 className="font-semibold blue-2">Laundry</h3>
                              <p>Lorem ipsum dolor sit amet, consec adipiscing elit.</p>
                          </div>
                      </div>


                      <div className="card flex items-center rounded-3xl bg-white my-3">
                          <img alt="" src="/images/not-checked.png" width="24" height="24" />
                          <div className="ml-4">
                              <h3 className="font-semibold">Home Cleaning</h3>
                              <p>Lorem ipsum dolor sit amet, consec adipiscing elit.</p>
                          </div>
                      </div>

                      <div className="card flex items-center rounded-3xl bg-white my-3">
                          <img alt="" src="/images/not-checked.png" width="24" height="24" />
                          <div className="ml-4">
                              <h3 className="font-semibold">Errand</h3>
                              <p>Lorem ipsum dolor sit amet, consec adipiscing elit.</p>
                          </div>
                      </div>



                  </div>
              </div>


                  <div className="md:mx-5 border border-grey-200 rounded-2xl  grey-5-bg shadow-lg blue-2">
                 
                      <section className="py-4 grey-4-bg card">
                            <div className="text-[20px]">With Just</div>
                            <h2 className="text-[24px] font-semibold">NGN 10,000</h2>
                            <div>Per month: NGN 120,000/yr</div>
                      </section>

                      <section className="card">
                            <ul>
                              <li className="flex items-center mb-2 font-semibold">Laundry: NGN2,500</li>  

                                <li className="flex items-center mb-2"><img alt="" src='/images/checked.png' height="16" width="17" /> <span className="ml-2">Pick up and delivery in 48hrs</span></li>  
                                <li className="flex items-center mb-2"><img alt="" src='/images/checked.png' height="16" width="17" /> <span className="ml-2">Replace damaged items: No stories</span></li>  
                                <li className="flex items-center mb-2"><img alt="" src='/images/checked.png' height="16" width="17" /> <span className="ml-2">Cancel your subscription at anytime</span></li>                                
                            </ul>
                      </section>


                       <section className="card">
                            <ul>
                              <li className="flex items-center mb-2 font-semibold">Home Cleaning: NGN2,500</li>  

                                <li className="flex items-center mb-2"><img alt="" src='/images/checked.png' height="16" width="17" /> <span className="ml-2">Pick up and delivery in 48hrs</span></li>  
                                <li className="flex items-center mb-2"><img alt="" src='/images/checked.png' height="16" width="17" /> <span className="ml-2">Replace damaged items: No stories</span></li>  
                                <li className="flex items-center mb-2"><img alt="" src='/images/checked.png' height="16" width="17" /> <span className="ml-2">Cancel your subscription at anytime</span></li>                                
                            </ul>
                      </section>



                       <section className="card">
                            <ul>
                              <li className="flex items-center mb-2 font-semibold">Errands: NGNNGN2,500</li>  

                                <li className="flex items-center mb-2"><img alt="" src='/images/checked.png' height="16" width="17" /> <span className="ml-2">Pick up and delivery in 48hrs</span></li>  
                                <li className="flex items-center mb-2"><img alt="" src='/images/checked.png' height="16" width="17" /> <span className="ml-2">Replace damaged items: No stories</span></li>  
                                <li className="flex items-center mb-2"><img alt="" src='/images/checked.png' height="16" width="17" /> <span className="ml-2">Cancel your subscription at anytime</span></li>                                
                            </ul>
                      </section>
                      

                     


                  </div>


        </div>
    </section>
    <Footer />
  </>
  )
};





export default Dashboard;
