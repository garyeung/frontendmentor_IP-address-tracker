import { useState } from "react"
import { Status } from "../service"
import iconArrow from '../assets/images/icon-arrow.svg'

function Input({verified="NONE", pushIp,}:{verified: Status, pushIp: (s:string) => void}) {
    const [ip, setIp] = useState("");

    const holdertext = 'Search for any IP address (IPv4 or IPv6)';
    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setIp(e.target.value);
    }

    return (
        <div className="w-full">
            <div className="flex justify-center mx-[10%] md:mx-[25%] lg:mx-auto lg:w-[512px]">
            <input onChange={handleInput} onKeyDown={(e) => {
                if(e.key === 'Enter'){
                    pushIp(ip);
                }
            }} placeholder={holdertext} className="focus:outline-none text-[18px] p-4 rounded-2xl rounded-tr-none rounded-br-none w-full text-very-dark-gray"/>
            <button onClick={() => pushIp(ip)} className="w-16 bg-very-dark-gray rounded-tr-2xl rounded-br-2xl hover:opacity-85 active:opacity-85"><img src={iconArrow} alt="send" className="m-auto"/></button>
            </div>
            <div>
                <span className="text-white text-xs font-bold">{(verified === 'FAIL')? "Please input correct IPv4 or IPv6 address.": ""}</span>
            </div>
        </div>
    )
}

export default Input;