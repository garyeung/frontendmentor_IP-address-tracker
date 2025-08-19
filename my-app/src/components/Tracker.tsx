import { LatLngExpression } from "leaflet";
import { Info, Status,} from "../service";
import Input from "./Input";
import IpInfoBoard from "./IpInfoBoard";
import Map from "./Map";

function Tracker({fetched,data, setIp}: {fetched: Status, data: Info, setIp: (s:string)=>void}) {
    const title = "IP adress tracker";
    const position: LatLngExpression = [data.location.lat, data.location.lng];

    return (
    <div className="font-rubik">
      <div className="bg-mobile-pattern bg-center bg-cover lg:bg-desktop-pattern text-center w-full h-[30vh] relative flex flex-col justify-start items-center">
        
        <h1 className="capitalize text-white text-2xl font-medium p-5 lg:text-3xl">{title}</h1>
        <Input verified={fetched} pushIp={setIp} />
        <IpInfoBoard {...data}/>
      </div>
      <div className="sticky">
        <Map position={position}/>
      </div>
    </div>);

}

export default Tracker;