import {useState} from "react";
import Footer from "/components/Footer";
import Header from "/components/Header";

const Dashboard = () => {

  const [service,setService] = useState(0);
  const [status,setStatus] = useState({status:false,percentage:0});
  const [page,setPage] = useState(1);


  return (
    <div className="relative overflow-hidden">
   
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






    <form className="my-12 py-12 grey-3-bg">
        <div className="container mx-auto  py-5 rounded-3xl relative grid grid-cols-1 md:grid-cols-2 md:gap-x-10">

              <div>
                  <h1 className="blue-2 font-semibold leading-tight mb-4 text-[36px] ">Convenience and Quality on <br /> your Budget</h1>

                  <p>Our Pricing options are budget friendly and the point of using Lorem Ipsum is that it has a. </p>

                  <div className="flex justify-between mt-5"><span>What’s your budget like?</span> <span>NGN 10,000 </span></div>

                
                  <div className="mt-5 relative">
                      <div className="w-full h-1 bg-gray-200 "></div>

                      <div className={`w-full h-1 blue-2-bg absolute top-0`} style={{width:`${status.percentage}%`}}></div>

                      <div className={`rounded-full w-7 h-7 blue-2-bg absolute -top-[12px]`} style={{left:`${status.percentage}%`}}></div>
                  </div>

                  <div className="mt-5">
                      <p className="font-semibold my-3">Select preferred service</p>

                      {page == 1 ? <>
                      <div className={`card flex items-center rounded-3xl my-3 ${service > 0 ? 'grey-6-bg' : 'bg-white'} `}>
                          <label htmlFor={service < 2 && 'laundry'} className="cursor-pointer min-w-[20px] h-[20px] rounded border bg-white border-blue-900 flex justify-center items-center"> {service > 0 && <i className="fas fa-check text-[10px] text-blue-900"></i>}</label>

                          <input type="checkbox"  id="laundry" onChange={(e) => {setService(service == 1 ? 0 : 1);setStatus(service == 1 ? {percentage:0,status:false} : {percentage:50,status:true})}}  hidden/>                          
                          <div className="ml-4">
                              <h3 className={`font-semibold ${service > 0 && 'blue-2'}`}>Laundry</h3>
                              <p>Lorem ipsum dolor sit amet, consec adipiscing elit.</p>
                          </div>
                      </div>

                       <div className={`card flex items-center rounded-3xl my-3 ${service > 1 ? 'grey-6-bg' : 'bg-white'} `}>
                          <label htmlFor={service > 0 && service < 3 && 'home-cleaning'} className="cursor-pointer min-w-[20px] h-[20px] rounded border bg-white border-blue-900 flex justify-center items-center"> {service > 1 && <i className="fas fa-check text-[10px] text-blue-900"></i>}</label>

                          <input type="checkbox"  id="home-cleaning" onChange={(e) => {setService(service == 2 ? 1 : 2);setStatus({percentage:50,status:true})} }  hidden/> 

                          <div className="ml-4">
                              <h3 className={`font-semibold ${service > 1 && 'blue-2'}`}>Home Cleaning</h3>
                              <p>Lorem ipsum dolor sit amet, consec adipiscing elit.</p>
                          </div>
                      </div>

                        <div className={`card flex items-center rounded-3xl my-3 ${service > 2 ? 'grey-6-bg' : 'bg-white'} `}>
                          <label htmlFor={service > 1  && 'errand'} className="cursor-pointer min-w-[20px] h-[20px] rounded border bg-white border-blue-900 flex justify-center items-center"> {service > 2 && <i className="fas fa-check text-[10px] text-blue-900"></i>}</label>

                          <input type="checkbox"  id="errand" onChange={(e) => {setService(service == 3 ? 2 : 3); setStatus(service == 3 ? {percentage:0,status:false} : {percentage:50,status:!status.status})}}  hidden/> 

                          <div className="ml-4">
                              <h3 className={`font-semibold ${service > 2 && 'blue-2'}`}>Errand {page}</h3>
                              <p>Lorem ipsum dolor sit amet, consec adipiscing elit.</p>
                          </div>
                      </div>
                      </> :

                       <div className="card flex items-center rounded-3xl my-3 grey-6-bg">
                        <input type='email' className="form-control border" placeholder="Email" onChange={(e) => e.target.value.length > 0 ? setStatus({percentage:100,status:true}) : setStatus({percentage:50,status:false})} />
                       </div>



                        }

                      


                  </div>
              </div>


                  <div className="md:mx-5 border border-grey-200 rounded-2xl  grey-5-bg shadow-lg blue-2">
                 
                      <section className="py-4 grey-4-bg card">
                            <div className="text-[20px]">With Just</div>
                            <h2 className="text-[24px] font-semibold">NGN 10,000</h2>
                            <div>Per month: NGN 120,000/yr</div>
                      </section>

                {page == 1 ?

                    <>
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
                      </> : 

                      <>  

                       <section className="card">
                            <ul>
                              <li className="flex items-center mb-2 font-semibold">Errands: NGNNGN2,500</li>  

                                <li className="flex items-center mb-2"><img alt="" src='/images/checked.png' height="16" width="17" /> <span className="ml-2">Pick up and delivery in 48hrs</span></li>  
                                <li className="flex items-center mb-2"><img alt="" src='/images/checked.png' height="16" width="17" /> <span className="ml-2">Replace damaged items: No stories</span></li>  
                                <li className="flex items-center mb-2"><img alt="" src='/images/checked.png' height="16" width="17" /> <span className="ml-2">Cancel your subscription at anytime</span></li>                                
                            </ul>
                      </section>

                      </>}

                     


                  </div>



                     
                    <div className={`col-span-1 md:col-span-2 flex  ${page > 1 ? 'justify-between' : 'justify-end'} my-5`}>

                        {page > 1 && <button type="button" className="blue-2-bg text-white rounded py-2 px-6" onClick={() => {setPage(--page); setStatus({percentage:50,status:true})}}>Back</button>}

                        {status.status == true &&
                          <button type="button" className="blue-2-bg text-white rounded py-2 px-6 " onClick={() => {setPage(++page); setStatus({...status,status:!status.status})}}>{page == 1 ? 'Next' : 'Finish'}</button>}

                      </div>

        </div>


    </form>
    <Footer />
  </div>
  )
};





export default Dashboard;
