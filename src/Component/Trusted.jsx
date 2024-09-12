import React from "react";
import figma from '../Image/figma.svg'
import toyota from '../Image/toyota.svg'
import spotify from '../Image/spotify.png'
import discord from '../Image/discord.svg'
const Trusted = () => {
    return ( 
        <>
            <div className="container">
                <p>Trusted by teams at</p>
                <div className="images flex items-center gap-4 mt-4">
                    <img src={toyota} className="w-24" alt="" />
                    <img src={figma} className="w-16" alt="" />
                    <img src={spotify} className="w-24" alt="" />
                    <img src={discord} className="w-24" alt="" />
                </div>
            </div>
        </>
     );
}
 
export default Trusted;