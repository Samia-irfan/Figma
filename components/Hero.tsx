import React from "react";
import arrow from '@/app/assets/arrow.png';
import Image from "next/image";
import work from '@/app/assets/work.png';

export default function Hero() {
    return (
        <div className="relative w-[1920px] h-[829px] py-[140px] px-[220px] bg-[#043873] items-center">
            <div className=" w-[656px] h-[361px] gap-[60px]">
                <div className="w-[656px] h-[238px] gap-6">
                    <div className="w-[656px] h-[154px] flex flex-row justify-between">
                        <h2 className="font-bold leading-[77.45px] text-[#FFFFFF] tracking-[-0.02em] text-[64px]">
                            Get More Done With White Space
                        </h2>
                    </div>
                    <br />
                    <div className="w-[656px] h-[60px]">
                        <p className="font-normal text-[18px] tracking-[-0.02em] leading-[30px] text-[#FFFFFF]">
                            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
                        </p>
                    </div>
                
                <br /><br />
                <div className="w-[219px] h-[63px] gap-[10px] flex flex-row justify-between">
                    <button className="border-[1px] w-[219px] h-[63px] rounded-lg bg-[#4F9CF9] border-[#4F9CF9] p-5 flex items-center">
                        <p className="text-[18px] leading-[23px] tracking-[-0.02em] text-white font-medium">
                            Try Whitepace free
                        </p>
                        <div className="ml-auto">
                            <Image src={arrow} alt="arrow" width={14} height={14} />
                        </div>
                    </button>
                </div>

                </div>
            </div>

            
            <div className=" absolute flex top-[140px] right-[220px] w-[824px] h-[529px] bg-[#C4DEFD]"></div>


         

        {/* Second */}  
<div className=" w-full h-[1588px] mt-[555px] gap-[100px]">
    <div className="flex w-[1480px] h-[547px] gap-[60px]">
        {/* Left side (Text content) */}
        <div className="w-[672px] h-[411px] gap-[60px]">
            <div className="w-[672px] h-[288px] gap-6">
                <div className="w-[672px] h-[174px]">
                    <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#212529]">
                        Project Management
                    </h1>
                </div>
                <br />
                <div className="w-[672px] h-[90px] gap-6">
                    <p className="font-normal text-[18px] leading-[30px] tracking-[-0.02em]">
                        Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them <br /> to a note.
                    </p>
                </div>
                <div className="w-[201px] h-[63px] mt-5">
                    <button className="flex items-center py-5 px-6 gap-2 bg-[#4F9CF9] rounded-md">
                        <p className="text-[18px] leading-[23px] tracking-[-0.02em] font-medium text-white">
                            Get Started
                        </p>
                        <Image src={arrow} alt="arrow" width={14} height={14} />
                    </button>
                </div>
            </div>
        </div>

        {/* Right side (Blue Rectangle) */}
        <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
         </div>
            {/* Second close */}

            <br /><br /><br />



            <div className="w-[1480px] h-[661px] gap-[100px] flex items-center">
    {/* Image */}
    <div className="flex items-center w-[710px] h-[661px] gap-[100px] left-[35px] mt-[170px]">
        <Image src={work} alt="work together" width={661} height={661} />
    </div>
    
    {/* Text Content */}
    <div className="w-[670px] h-[249px] flex flex-col">
        {/* Title */}
        <div className="w-[670px] h-[87px]">
            <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#212529]">
                Work together
            </h1>
            <br /><br />
        </div>
                <div className="w-[670px] h-[60px] mt-6">
            <p className="font-normal text-[18px] leading-[30px] tracking-[-0.02em]">
                With Whitepace, share your notes with your colleagues and collaborate on them.
                You can also publish a note to the internet and share the URL with others.
            </p> 
        </div>
        <br /><br />
        <div className="w-[186px] h-[63px]">
           <button className=" flex items-center py-5 px-10 rounded-md bg-[#4F9CF9] gap-[10px]">
            <p className="w-[82px] h-[23px] font-medium text-[18px] leading-[23px] tracking-[-0.02em] text-white">
            Try it now
            </p>
        <Image src={arrow} alt="arrow" width={14} height={14} />

           </button>
        </div>
        {/*button closed*/}
    </div>
          </div>
          
          </div>

        </div>
    );
}

