import Image from "next/image"

import { BookUser, LucideMoveLeft, LucideMoveRight, } from "lucide-react";




const Homepage = () => {
  return (
    <main >

   <div className="text-white min-h-screen bg-[url('/image.png')] bg-cover bg-center">
  <header className="flex justify-between items-center px-6 py-4 md:px-10 lg:px-20">
    <h1 className="text-xl font-bold">RESUME TAILOR</h1>
    <nav className="space-x-6 hidden md:flex">
      <a href="#" className="hover:text-green-400 transition-colors duration-200">Home</a>
      <a href="#" className="hover:text-green-400 transition-colors duration-200">Pricing</a>
      <a href="#" className="hover:text-green-400 transition-colors duration-200">Testimonials</a>
      <a href="#" className="hover:text-green-400 transition-colors duration-200">Help</a>
    </nav>
    <button className=" text-white outline px-5 py-1 rounded-md font-medium  transition-colors duration-200">Login</button>
  </header>

  {/* Hero Section */}
  <section className="relative overflow-hidden bg-[url('/Mask_group.png')] bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center py-16 md:py-20 lg:py-24">
    <div className="container  mx-auto px-4 flex flex-col md:flex-row  items-center justify-between z-10">
      <div className="max-w-xl text-center md:text-left mb-12 md:pb-14 ">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Land Your Next Job</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Let AI build a resume that passes the ATS and stands out to recruiters
        </p>
         <button className="mt-8 gap-3 bg-[#40BEA7] text-white px-8 py-4 rounded-full font-semibold flex justify-start items-center">
  <h1>Build Your AI Resume</h1>
  <span>
    <Image src="/Frame1.png" alt="AI Robot" width={15} height={15} />
  </span>
</button>

      
      </div>
      

      <div className="relative w-full md:w-auto flex justify-center md:justify-end items-center">
         <Image src="/Group.png" alt="AI Robot" width={700} height={700} className="" />
       
       
      </div>
    </div>
  </section>
</div>

      {/* Benefits Section */}
      <section className="bg-[#F2F7FD] text-black md:pt-2">
        <div className=" mx-auto px-18 ">
          <div className="grid grid-cols-1  p-6 md:grid-cols-3 gap-8 text-center bg-white rounded-lg shadow-xl  md:-mt-28 relative z-20">
            {/* Pass ATS screens */}
            <div className="p-4 flex flex-col items-center">
              <div className="mb-4">
               <Image src="/vector.png" alt="Interviews icon" width={35} height={45} className="object-contain" />
              </div>
              <p className="font-semibold text-lg">Pass ATS screens</p>
            </div>
            {/* 2x more interviews */}
            <div className="p-4 flex flex-col items-center">
              <div className="mb-4">
                 <Image src="/vector.png" alt="Interviews icon" width={35} height={45} className="object-contain" />
              </div>
              <p className="font-semibold text-lg">2x more interviews</p>
            </div>
            {/* Higher paying jobs */}
            <div className="p-4 flex flex-col items-center">
              <div className="mb-4">
                 <Image src="/vector.png" alt="Interviews icon" width={35} height={45} className="object-contain" />
              </div>
              <p className="font-semibold text-lg">Higher paying jobs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section  bg-[#F2F7FD]*/}
      <section className=" bg-[url('/image-2.png')] py-10 text-black">
        <div className="container mx-auto pt-10 px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Trying To Find A New Job Is Exhausting
            </h3>
            <p className="mb-4 text-gray-700 text-base md:text-lg">
              80% of resumes get rejected by robots before a human sees them. <br />
              Hours wasted applying... only to get auto-rejected.<br />
              Missed interviews for jobs you&apos;re perfect for.
            </p>
            <p className="mb-4 font-semibold text-lg">The ATS doesn’t care about:</p>
            <ul className="mb-6 text-gray-700 space-y-2 text-base md:text-lg">
              <li className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Your hard work
              </li>
              <hr className="text-gray-200" />
              <li className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Your career story
              </li>
              <hr className="text-gray-200" />
              <li className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Your unique skills
              </li>
              <hr className="text-gray-200" />
            </ul>
            <p className="mb-8 text-gray-700 text-base md:text-lg">
              It only cares about keywords. We&apos;ll give your resume the right <br />
              keywords in a way that still makes sense to recruiters.
            </p>
           <button className="mt-8 gap-3 bg-[#40BEA7] text-white px-8 py-4 rounded-full font-semibold flex justify-start items-center">
  <h1>Build Your AI Resume</h1>
  <span>
    <Image src="/Frame1.png" alt="AI Robot" width={15} height={15} />
  </span>
</button>

          </div>

          <div className="  ">
            <Image src="/image1.png" alt="Happy client 1" width={200} height={150} className="rounded-lg object-cover w-full h-full aspect-[4/3] shadow-md" />
            <div className="p-4 bg-blue-500 mt-2 rounded-md">
                <h1 className="text-[36px] text-white">
                    2000+
                </h1>
                <h2 className="text-[20px] text-white">Satisfied Clients</h2>
            </div>
            
          </div>

          <div className=" grid grid-cols-1 gap-3 ">
            <Image src="/image2.png" alt="Happy client 1" width={200} height={150} className="" />
            <Image src="/image3.png" alt="Happy client 2" width={200} height={150} className="" />
            
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto relative">
     <div className="text-center my-14">
         <h1 className="text-[45px] font-semibold">
        Land Your Next Job Faster Using Our  <br />
AI Resume Builder
      </h1>
      <h3 className="text-[16px] font-semibold">Process Steps:</h3>
      <p>Our AI knows what ATS bots and hiring managers want. All you have to do is</p>
     </div>


        <div className="grid grid-cols-1 md:grid-cols-3">

            <div>
               
              <Image src="/Frame11.png" alt="Profile" width={217} height={156} className="mx-auto" />
              <h3 className="text-[25px] font-bold text-center">Click to Build Your Resume</h3>
            </div>
            <div>
               
              <Image src="/Frame22.png" alt="Profile" width={217} height={156} className=" mx-auto" />
              <h3 className="text-[25px] font-bold text-center">Click to Build Your Resume</h3>
            </div>
            <div>
               
              <Image src="/Frame33.png" alt="Profile" width={217} height={156} className="mx-auto" />
              <h3 className="text-[25px] font-bold text-center">Click to Build Your Resume</h3>
            </div>
            
        </div>
         <button className="my-4  gap-3 bg-[#40BEA7] text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center mx-auto shadow-lg transition-colors duration-200 group">
      Build Your AI Resume
      <span > <Image src="/Frame1.png" alt="AI Robot" width={15} height={15} className="" /></span>
    </button>


    <div className=" absolute top-66 left-80 ">

     <Image src="/Arc2.png" alt="AI Robot" width={100} height={100} className="" />
    </div>
    <div className=" absolute top-84 right-82 ">

     <Image src="/Arc3.png" alt="AI Robot" width={100} height={100} className="" />
    </div>


      </section>



      <section className="my-10  bg-[url('/Mask.png')] bg-cover bg-center ">
         <div className="text-center max-w-5xl mx-auto  py-14">
             <h1 className="text-[45px] my-10 text-semibold">Here What You Get</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 ">
           


            <div className=" space-y-2">
                
         <Image src="/Group1.png" alt="Profile" width={50} height={50} className="mx-auto" />
         <h1 className="text-[28px] font-semibold ">ATS- Formatting</h1>
         <p className="text-[20px]"> Proven layouts that algorithms read perfectly </p>
            </div>
            <div className=" space-y-2">
                
         <Image src="/Group2.png" alt="Profile" width={50} height={50} className="mx-auto" />
         <h1 className="text-[28px] font-semibold ">AI Keyword Injection</h1>
         <p className="text-[20px]"> Auto-matches skills to <br /> job descriptions </p>
            </div>
            <div className=" space-y-2">
                
         <Image src="/Group3.png" alt="Profile" width={50} height={50} className="mx-auto" />
         <h1 className="text-[28px] font-semibold ">AI Keyword Injection</h1>
         <p className="text-[20px]"> Update old resumes for new roles instantly</p>
            </div>
        </div>
         </div>




      </section>






     <section className="my-10">
  <h1 className="text-[45px] my-10 font-semibold text-center">Success Stories</h1>
  <div className="flex mx-auto max-w-5xl">
    
    <div className="relative w-1/2">
      
      <Image src="/profile.png" alt="Profile" width={350} height={350} className="mx-auto" />

      <div className="absolute top-6 left-11 transform ">
        <Image src="/circle.png" alt="Circle" width={74} height={74} />
      </div>
      <div className="absolute top-12 right-8 transform ">
        <Image src="/indicate.png" alt="Circle" width={106} height={131} />
      </div>

    </div>

    {/* Right Side Text */}
    <div className="w-1/2 justify-center mt-8">
      <p className="text-[25px]">
        This might be the best AI resume builder I’ve used. Most cost $20-30 a month… For $7.99 I sent 20 resumes and got 3 interviews. Game-changer.
      </p>
      <h1 className="text-[30px] font-semibold">Christian Barlow</h1>
      <p className="text-[25px]">Software Engineer</p>


      <div className="flex gap-3 mt-16">
         <button className="p-3 bg-white rounded-full drop-shadow-xl text-blue-400"><LucideMoveLeft /></button>
      <button className="p-3 bg-white rounded-full drop-shadow-xl text-blue-400 "><LucideMoveRight />
</button>
      </div>
      
    </div>
  </div>
</section>



       {/* Trusted by professional */}
      <section className=" bg-[url('/Mask.png')] bg-cover bg-center  flex items-center justify-center md:py-10 mt-10  mx-auto px-4">
  <div className="text-center max-w-5xl ">
    <h1 className="text-3xl font-bold mb-4">Trusted by Professionals</h1>
    <p className="text-[22px]">
      Discover why our platform is recognized as the best AI resume builder for job seekers ready to transform their career trajectory. Our advanced AI resume technology is designed to streamline the application process, ensuring that every resume is optimized to pass ATS filters and catch the eye of recruiters.
     <br /> <br />
      By leveraging cutting-edge algorithms and data-driven insights, we’ve built the best resume builder AI that not only saves you time but also increases your chances of landing interviews and ultimately, your dream job. Whether you're revamping an old resume or creating one from scratch, our solution is the ideal choice for a seamless and effective job search.
    </p>
    <button className="my-8  gap-3 bg-[#40BEA7] text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center mx-auto shadow-lg transition-colors duration-200 group">
      Build Your AI Resume
      <span > <Image src="/Frame1.png" alt="AI Robot" width={15} height={15} className="" /></span>
    </button>

    <Image src="/write.png" alt="AI Robot" width={750} height={200} className="mx-auto" />

  </div>
</section>

 {/* footer */}
<section className="">
  <div className="bg-[#1E1926] text-center p-4">
    <p className="text-white">
      © Copyright {new Date().getFullYear()} All rights reserved to Horizon
    </p>
  </div>
</section>



    </main>
  )
}

export default Homepage;