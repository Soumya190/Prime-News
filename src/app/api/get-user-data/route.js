import { NextResponse } from "next/server";
import { RateLimiterMemory } from "rate-limiter-flexible";
import { GETUserIP } from "../../../../utils/ip";
import { log } from "console";

const rateLimiter = new RateLimiterMemory({
  points: 4, // 5 requests
  duration: 60, // per second
});

export async function GET(){
    const userIP = await GETUserIP();
    console.log("User IP:", userIP);
    try{
        await rateLimiter.consume(userIP,2);
    }catch(err){
        return NextResponse.json({message:"Too many requests"},{status:429});
    }
    return NextResponse.json({message:"User data fetched successfully"},{status:200});
}