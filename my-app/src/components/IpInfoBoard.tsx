import { Info } from "../service";

const defaultProps: Info  = {
    ip:'...',
    location: {
        country: '...',
        region: '...',
        city:'...', 
        "lat": 0,
        "lng": 0,
        "postalCode": "",
        "timezone": "...",
    },
    isp: "...",

}
function IpInfoBoard({ip = defaultProps.ip, location = defaultProps.location, isp = defaultProps.isp}: Info){
    const InfoIp = ip;
    const InfoLocation = location.city + ", " + location.region + " " + location.postalCode;
    const InforTimezone = location.timezone;
    const InforISP = isp ;
    const IPADDRESS = 'ip address',
          LOCATION = 'location',
          TIMEZONE = 'timezone',
          ISP = 'isp';

    const items: InfoItemProps[] = [
        {name:IPADDRESS, message: InfoIp},
        {name: LOCATION, message: InfoLocation},
        {name: TIMEZONE, message: "UTC "+InforTimezone},
        {name:  ISP, message: InforISP}
    ]
    const elements = items.map((item, index) => {
                    return <InfoItem {...item} key={item.name+index}/>
    })
    return (
        <div className="bg-white absolute z-10 top-40 left-[10%] w-[80%] flex flex-col gap-y-2 p-4 rounded-2xl md:w-[50%] md:left-[25%] lg:left-[10%] lg:w-[80%] lg:flex-row lg:justify-between lg:h-32 lg:items-center">
          {elements}
        </div>
    )
}

interface InfoItemProps {name: string, message: string}

function InfoItem({name,message}: InfoItemProps){
    return (
        <div className="lg:border-l lg:border-l-dark-gray first:border-0 lg:text-left lg:py-1 lg:pr-8 lg:pl-4">
            <span className="text-dark-gray uppercase font-bold text-xs">{name}</span>
            <p className="text-very-dark-gray font-bold text-lg lg:text-xl lg:font-medium">{message}</p>
        </div>
    )
}

export default IpInfoBoard;