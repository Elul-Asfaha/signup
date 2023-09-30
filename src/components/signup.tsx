import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { SiShopify } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
const Signup = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 bg-[#112540] md:w-[90%] lg:w-[80%] xl:min-w-[50%] xl:max-w-[70%] h-[80%] rounded-lg'>
            <div className='flex flex-col gap-3 text-white p-5'>
                <p className='text-2xl'>Let's get you Signed Up</p>
                <p className='text-gray-500'>Start your 30-day free trial</p>
                <div className='flex gap-4 justify-between'>
                    <button className='flex-1 flex gap-2 items-center justify-center bg-[#203858] rounded-sm px-5 py-1'>
                        <FcGoogle />
                        <span className='hidden lg:flex'>Google</span>
                    </button>
                    <button className='flex-1 flex gap-2 items-center justify-center bg-[#203858] rounded-sm px-5 py-1'>
                        <BsFacebook className='text-blue-500' />
                        <span className='hidden lg:flex'>Facebook</span>
                    </button>
                    <button className='flex-1 flex gap-2 items-center justify-center bg-[#203858] rounded-sm px-5 py-1'>
                        <SiShopify className='text-green-400' />
                        <span className='hidden lg:flex'>Shopify</span>
                    </button>
                </div>
            </div>
            <div className='flex flex-col justify-center px-10'>
                <div className='flex flex-col gap-2 items-center px-8 bg-[#0B1B32] rounded-lg h-[90%] py-10'>
                    <p className='text-gray-300 text-center'>
                        We currently use Reaktion across our customers to give
                        them better instight into their entire buisness.
                        Reaktion is a tool that i whish had been there years
                        ago. Thisi means that we now have everything together in
                        one place, and have the wildest tools for tracking data,
                        CLTV, and much more. if you are a buisness owner or
                        agency owner, Reaktion is a must. Definitely the
                        <span className='text-gray-200'>
                            best tool on the market
                        </span>{" "}
                        at all! in addition to the tool, the team behind
                        Reaktion is always fresh on new ideas and insights,
                        which are also quickly implemented, Can definitely be
                        recommended!"
                    </p>
                    <img
                        src='https://source.unsplash.com/1700x1000?profile'
                        alt=''
                        className='rounded-full h-[60px] w-[60px] object-cover'
                    />
                    <p className='text-white'>
                        Emil nissen -{" "}
                        <span className='text-gray-200'>CEO & Director</span>
                    </p>
                    <div className='flex gap-1 text-xl text-orange-500'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
