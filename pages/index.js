import Footer from "/components/Footer";
import Header from "/components/Header";

const Dashboard = () => {
  return (
    <div className="relative overflow-hidden">
   
 <section className="pbc py-12">

        <Header />

         <div className="container mx-auto py-5 mt-10">

               <h1 className="text-center font-bold blue-2 leading-tight" style={{fontSize:"max(40px,4.5vw)"}}>Focus on the <br/> things you <span className="text-red-200 inline-block relative leading-none">love <img alt="" src="/images/arrow-right.png" height="13" width="124" /></span> <br /> while we do the rest</h1>

               <div className="blue-2  flex items-center justify-center my-2"><span className="mx-2">Laundry</span> <span className="text-[30px]">&bull;</span> <span className="mx-2">Errands</span> <span className="text-[30px]">&bull;</span> <span className="mx-2">House Cleaning</span> </div>


                <div className="flex items-center justify-center my-2">
                  <button className="py-3 px-4 rounded-full blue-2-bg text-white mx-2">Make Life Easy For Me</button>

                  <button className="py-3 px-4 rounded-full bg-white border border-red-200  text-red-200 mx-2 flex justify-between items-center"><span className="mr-3">Watch Demo</span> <img alt="" src="/images/play.png" /></button>

                </div>


         </div>
    </section>



 <section className="pbc">

         <div className="container mx-auto py-5">

                <div className="grid grid-cols-1  md:grid-cols-4 gap-x-5 gap-y-[70px]">
                 <div className="flex items-center justify-center">
                     <h2 className="font-bold ac text-[40px] leading-tight text-center md:text-left">What should <br /> kara do for <br /> you?</h2>
                </div>



                 <div className="card  bg-red-100 text-center shadow-xl">
                    <div className="absolute -top-1/4 -left-1 flex justify-center  w-full">
                       <img alt="" className="rounded-full  service" src="/images/group3.png" height="148" width="98" />
                    </div>

                      <div className="mt-12">                          
                         <a className="font-semibold">Laundry</a> 
                      </div> 

                      <div className="text-[14px] my-5">
                        Lorem Ipsum is simpy dummy text of the printing
                      </div>

                      <div className="mb-3">
                          <a href="#" className="btn bg-white text-red-200">Learn more</a>
                      </div>
                </div>


                 

            <div className="card  bg-white text-center shadow-xl">
                    <div className="absolute -top-1/4 -left-1 flex justify-center  w-full">
                       <img alt="" className="rounded-full  service" src="/images/group3.png" height="148" width="98" />
                    </div>

                      <div className="mt-12">                          
                         <a className="font-semibold">Home Cleaning</a> 
                      </div> 

                      <div className="text-[14px] my-5">
                        Lorem Ipsum is simpy dummy text of the printing
                      </div>

                      <div className="mb-3">
                          <a href="#" className="btn bg-blue-400 text-white">Learn more</a>
                      </div>
                </div>


                <div className="card  bg-white text-center shadow-xl">
                    <div className="absolute -top-1/4 -left-1 flex justify-center  w-full">
                       <img alt="" className="rounded-full  service" src="/images/group3.png" height="148" width="98" />
                    </div>

                      <div className="mt-12">                          
                         <a className="font-semibold">Errands</a> 
                      </div> 

                      <div className="text-[14px] my-5">
                        Lorem Ipsum is simpy dummy text of the printing
                      </div>

                      <div className="mb-3">
                          <a href="#" className="btn bg-purple-300 text-white">Learn more</a>
                      </div>
                </div>

            </div>

         </div>
    </section>


    <section className="grey-1-bg relative">
        <img alt="" src="/images/group2.png" className="absolute bottom-0 right-0 z-10" />

         <div className="container mx-auto py-5">

                <div className="grid grid-cols-5 my-4 place-items-center">
                    <img alt="" src="/images/facebook2.png"  />

                    <img alt="" src="/images/spotify.png"  />

                    <img alt="" src="/images/shopify.png"  />

                    <img alt="" src="/images/google.png"  />

                    <img alt="" src="/images/slack.png"  />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-5">
                 <div className="card bg-white">
                      <div className="flex items-center">
                          <img alt="" className="rounded-full mr-3" src="/images/persons/1.png" height="47" width="47" />
                          
                          <p className="text-[14px]"><a className="font-semibold block">Mabel Harrison</a> <a className="font-semibold ac block">@mabel</a></p>
                      </div> 

                      <p className="text-[12px] mt-3">
                        There are many variations of passages of lorem Ipsum
                        available, but the majority have suffered alteration
                      </p>
                </div>


                 <div className="card bg-white">
                      <div className="flex items-center">
                          <img alt="" className="rounded-full mr-3" src="/images/persons/2.png" height="47" width="47" />
                          
                          <p className="text-[14px]"><a className="font-semibold block">Mabel Harrison</a> <a className="font-semibold ac block">@mabel</a></p>
                      </div> 

                      <p className="text-[12px] mt-3">
                        There are many variations of passages of lorem Ipsum
                        available, but the majority have suffered alteration
                      </p>
                </div>



                 <div className="card bg-white">
                      <div className="flex items-center">
                          <img alt="" className="rounded-full mr-3" src="/images/persons/3.png" height="47" width="47" />
                          
                          <p className="text-[14px]"><a className="font-semibold block">Mabel Harrison</a> <a className="font-semibold ac block">@mabel</a></p>
                      </div> 

                      <p className="text-[12px] mt-3">
                        There are many variations of passages of lorem Ipsum
                        available, but the majority have suffered alteration
                      </p>
                </div>


                 <div className="card bg-white">
                      <div className="flex items-center">
                          <img alt="" className="rounded-full mr-3" src="/images/persons/4.png" height="47" width="47" />
                          
                          <p className="text-[14px]"><a className="font-semibold block">Mabel Harrison</a> <a className="font-semibold ac block">@mabel</a></p>
                      </div> 

                      <p className="text-[12px] mt-3">
                        There are many variations of passages of lorem Ipsum
                        available, but the majority have suffered alteration
                      </p>
                </div>


                 <div className="card bg-white">
                      <div className="flex items-center">
                          <img alt="" className="rounded-full mr-3" src="/images/persons/5.png" height="47" width="47" />
                          
                          <p className="text-[14px]"><a className="font-semibold block">Mabel Harrison</a> <a className="font-semibold ac block">@mabel</a></p>
                      </div> 

                      <p className="text-[12px] mt-3">
                        There are many variations of passages of lorem Ipsum
                        available, but the majority have suffered alteration
                      </p>
                </div>


                 <div className="card bg-white">
                      <div className="flex items-center">
                          <img alt="" className="rounded-full mr-3" src="/images/persons/6.png" height="47" width="47" />
                          
                          <p className="text-[14px]"><a className="font-semibold block">Mabel Harrison</a> <a className="font-semibold ac block">@mabel</a></p>
                      </div> 

                      <p className="text-[12px] mt-3">
                        There are many variations of passages of lorem Ipsum
                        available, but the majority have suffered alteration
                      </p>
                </div>

            </div>

         </div>
    </section>


    <section className="grey-1-bg">
         <div className="container mx-auto py-5 grid grid-cols-1 md:grid-cols-2 gap-2">
                 <div className="flex flex-col  items-center justify-center">
                      <h2 className="ac text-[100px] font-semibold text-center">FAQS</h2>
                      <p className="text-[18px] text-center">You’ve got questions, we’ve got answers</p>
                </div>

                <div>
                    <p className="item">
                        <div className="flex justify-between border-b border-gray-200 items-center py-3"><h3 className="font-semibold ac text-[24px] ">How to call Kara</h3>  <img alt="" src="/images/plus.png" width="31" height="31" /></div>

                        <div className="py-4">Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin professor
                            at Hampden-Sydney College in Virginia, looked up one of the more
                            obscure Latin words, consectetur, from a Lorem Ipsum passage,
                            and going through the cites of the word in classical literature,
                            discovered the undoubtable source.</div>
                    </p>

                     <p className="item">
                        <div className="flex justify-between border-b border-gray-200 items-center py-3"><h3 className="font-semibold ac text-[24px] ">How to earn points</h3>  <img alt="" src="/images/plus.png" width="31" height="31" /></div>
                    </p>


                     <p className="item">
                        <div className="flex justify-between border-b border-gray-200 items-center py-3"><h3 className="font-semibold ac text-[24px] ">Is Kara available in my region?</h3>  <img alt="" src="/images/plus.png" width="31" height="31" /></div>
                    </p>


                     <p className="item">
                        <div className="flex justify-between border-b border-gray-200 items-center py-3"><h3 className="font-semibold ac text-[24px] ">Is Kara available in my region?</h3>  <img alt="" src="/images/plus.png" width="31" height="31" /></div>
                    </p>



                     <p className="item">
                        <div className="flex justify-between border-b border-gray-200 items-center py-3"><h3 className="font-semibold ac text-[24px] ">Earn points</h3>  <img alt="" src="/images/plus.png" width="31" height="31" /></div>
                    </p>

                     <p className="item">
                        <div className="flex justify-between border-b border-gray-200 items-center py-3"><h3 className="font-semibold ac text-[24px] ">Support</h3>  <img alt="" src="/images/plus.png" width="31" height="31" /></div>
                    </p>


                </div>
         </div>
    </section>



    <section className="my-12">
        <div className="container mx-auto why-us py-5 rounded-3xl relative">
              <div className="top-header">
                  <h1 className="blue-1 font-semibold leading-tight mb-2 text-[36px] text-center">Still wondering why <br /> to choose us?</h1>

                  <p className="text-[14px] text-center">Contrary to popular belief, Lorem Ipsum is not <br />simply random text. It has roots in a piece of classical </p>
              </div>


              <div className="block md:flex mx-auto w-full sm:10/12 md:w-7/12 my-10">
                  <div className="mx-5"
                  >
                      <img alt="" src="/images/group1-2.png" className="mx-auto" height="317" width="238" />
                  </div>

                  <div className="mx-5">
                      <p>
                        <h2 className="blue-1 text-[24px] font-semibold mb-2">Quality Service</h2>
                        <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical </div>
                      </p>

                       <p>
                        <h2 className="blue-1 text-[24px] font-semibold mb-2">Service at it’s best</h2>
                        <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical </div>
                      </p>


                       <p>
                        <h2 className="blue-1 text-[24px] font-semibold mb-2">Reliabilty</h2>
                        <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical  </div>
                      </p>


                  </div>


              </div>

              <img alt="" src="/images/group1.png" className="absolute top-0 left-0" style={{width: "max(50px,15vw)"}} />
        </div>
    </section>
    <Footer />
  </div>
  )
};





export default Dashboard;
