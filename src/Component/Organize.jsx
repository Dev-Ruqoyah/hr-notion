import React from "react";
import Subsection from "./Subsection";
import Subsect from "./Subsect";
import ImageSection from "./ImageSection";
import team from '../Image/team.webp'
import inte from '../Image/inte.webp'
import just from '../Image/just.webp'
import organize from '../Image/organize.webp'
const Organize = () => {
    return ( 
        <>
            <div className="container mx-auto py-10">
                <div className="grid md:grid-cols-2 grid-cols-1 place-items-end">
                    <Subsection 
                        section={"Organize"}
                        title={"Remember everything."}
                        subtitle={"No more endless searching for the info you need. Everything you and your team store in Notion is accessible in an instant."}
                        link={"Explore knowledge management"}
                    />
                    <div className="grid grid-cols-3 container mx-auto gap-10">
                        <Subsect image={team} header={"Teamspaces"} subheader={"Dedicated space for every team and project."}/>

                        <Subsect image={inte} header={"Integrations"} subheader={"Connected to all your favorite tools."}/>

                        <Subsect image={just} header={"Just ask AI"} subheader={"Instant answers when you need them."}/>
                    </div>

                </div>
                <ImageSection image={organize}/>
            </div>
        </>
     );
}
 
export default Organize;