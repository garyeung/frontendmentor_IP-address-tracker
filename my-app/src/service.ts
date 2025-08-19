import { useEffect, useState } from "react";

export type Status = 'NONE'|'FAIL'|'OK';

export interface ErrorIP {
  code: number,
  messages: string 
} 

export interface Geo{
  "ip": string ,
  "location": {
    "country": string,
    "region": string,
    "city": string,
    "lat": number,
    "lng": number,
    "postalCode": string,
    "timezone": string,
    "geonameId": number 
  },
  "as": {
    "asn": number,
    "name": string,
    "route": string,
    "domain": string,
    "type": string 
  },
  "isp": string ,
  "domains"? : string[],
}


export interface Info {
    ip:string,
    location: {
        country: string,
        region: string,
        city: string,
        "lat": number,
        "lng": number,
        "postalCode": string,
        "timezone": string,
    },
    isp: string,
}

export async function getIPInfo(ip="") {
  const apiKey = process.env.API_KEY || "";
  const api = 'https://geo.ipify.org/api/v2/country,city?apiKey='+apiKey+'&ipAddress=';
  const response = await fetch(api+ip).then<Geo|ErrorIP>((r)=> r.json()).catch((e) => {
    console.error("Can't fetching data: " + e);
  });
  return response;
}

export const useFetch  = (initialIp:string) => {
  const [data, setData]  = useState<Info| null>(null);
  const [ip, setIp] = useState(initialIp);
  const [fetched, setFetched] = useState<Status>('NONE');

  useEffect(() => {
    getIPInfo(ip).then((d)=> {
      if(d){
        if(isGeo(d)){
          const g = d as Geo;
          setFetched('OK');
          setData({
            ip: g.ip,
            location: g.location,
            isp: g.isp
          })
        }
        if(isErrorIP(d)) {
          setFetched('FAIL')
        }
      }
    })
  }, [ip])

  return {fetched, data, setIp};
}

function isGeo(r: Geo| ErrorIP) {
  return (r as Geo).location !== undefined;
}
function isErrorIP(r: Geo| ErrorIP) {
  return (r as ErrorIP).code !== undefined && (r as ErrorIP).messages !== undefined;
}