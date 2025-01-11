import { IoIosCall, IoMdMail } from "react-icons/io";

const TopBar = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 bg-[#FFEDED] justify-center py-2 px-4">
            <div className="flex items-center gap-2">
                <IoIosCall className="text-[#FF0000]" size={18} />
                <p className="font-medium text-xs md:text-sm">+91-9822384075/8329008308</p>
            </div>

            <div className="flex items-center gap-2">
                <IoMdMail className="text-[#FF0000]" size={18} />
                <p className="font-medium text-xs md:text-sm">sales@fluidmac.in/pp.abhijit@fluidmac.in</p>
            </div>
        </div>
    );
};

export default TopBar;
