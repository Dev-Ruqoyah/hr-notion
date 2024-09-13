import React from "react";
import Subsection from "./Subsection";
import Subsect from "./Subsect";
import ImageSection from "./ImageSection";
import answer from '../Image/answer.webp'
import edit from '../Image/edit.webp'
import conn from '../Image/conn.webp'
import notion from '../Image/notion.webp'
const Notion = () => {
    return ( 
        <>
            <div className="container mx-auto py-16">
                <div className="grid md:grid-cols-2 grid-cols-1 place-items-end">
                    <Subsection 
                        section={"Notion AI"}
                        title={"Get a brain boost."}
                        subtitle={"Built right into your workspace, Notion AI is at the ready to brainstorm ideas, summarize, help you write, and find what you’re looking for." }
                        link={"Try Notion AI"}
                    />
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 container mx-auto gap-10">
                        <Subsect image={answer} header={"Instant answers"} subheader={"Ask any question about your team’s docs and projects."}/>

                        <Subsect image={edit} header={"Personalized editor"} subheader={"Generate content that’s always relevant."}/>

                        <Subsect image={conn} header={"AI connectors"} subheader={"Access info from all your tools, right inside Notion."}/>
                    </div>

                </div>
                <ImageSection image={notion}/>
            </div>
        </>
     );
}
 
export default Notion;