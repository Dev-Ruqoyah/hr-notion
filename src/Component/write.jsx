import React from "react";
import Subsection from "./Subsection";
import Subsect from "./Subsect";
import ImageSection from "./ImageSection";
import block from '../Image/block.webp'
import att from '../Image/att.webp'
import aii from '../Image/aii.webp'
import write from '../Image/write.webp'
const Write = () => {
    return ( 
        <>
            <div className="container mx-auto py-10">
                <div className="grid md:grid-cols-2 grid-cols-1 place-items-end">
                    <Subsection 
                        section={"Write"}
                        title={"Find the right words."}
                        subtitle={"Capture ideas, gather feedback from teammates, and ask AI to add the finishing touches."}
                        link={"Explore docs & notes"}
                    />
                    <div className="grid grid-cols-3 container mx-auto gap-10">
                        <Subsect image={block} header={"Building Blocks"} subheader={"100+ content types to communicate any idea."}/>

                        <Subsect image={att} header={"Collaborative tools"} subheader={"Built for teams to share, suggest, and comment."}/>

                        <Subsect image={aii} header={"AI-assisted"} subheader={"Edit, draft, translate. Ask, and AI will answer."}/>
                    </div>

                </div>
                <ImageSection image={write}/>
            </div>
        </>
     );
}
 
export default Write;