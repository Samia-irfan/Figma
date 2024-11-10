import Image from "next/image"
import logo from '@/app/assets/logo.png'
export default function Navbar(){
    return(
        <div className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center">
            <div className="w-[191px] h-[34px]">
                <Image src={logo} alt="whitespace" />
            </div>
            <div className="w-[737.5px] h-[60px] flex justify-between items-center">
                <div className="w-[549px] h-[23px] gap-[32px]">
                    <ul className="flex flex-row justify-between text-white leading-[23px] font-medium text-[18px]">
                        <li>Product</li>
                        <li>Solution</li>
                        <li>Resources</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="w-[126px] h-[60px] ml-[188.5px]">
                    <button className=" font-medium px-10 py-4 rounded-lg bg-[#FFE492]">Login</button>
                </div>
            </div>
        </div>
    )
}