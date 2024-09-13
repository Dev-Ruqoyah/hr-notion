import React from "react";
import Subsection from "./Subsection";
import Subsect from "./Subsect";
import ImageSection from "./ImageSection";
import checklist from '../Image/checklist.webp'
import calendarSheet from '../Image/calendarSheet.webp'
import bolt from '../Image/bolt.webp'
import plan from '../Image/plan-v5.webp'
const Plan = () => {
    return ( 
        <>
            <div className="container mx-auto py-10">
                <div className="grid md:grid-cols-2 grid-cols-1 place-items-end">
                    <Subsection 
                        section={"Plan"}
                        title={"Your Workflow. Your way."}
                        subtitle={"There’s a lot to keep track of. Notion’s flexible pages allow you to design your ideal workflow and view it by timeline, task, team, or level of doneness." }
                        link={"Explore projects"}
                    />
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 container mx-auto gap-10 ">
                        <Subsect image={checklist} header={"Tasks and to-dos"} subheader={"Tackle any project, big or small."}/>

                        <Subsect image={calendarSheet} header={"Custom views"} subheader={"Visualize work in any format, from calendars to kanban boards."}/>

                        <Subsect image={bolt} header={"Automations"} subheader={"Put tedious tasks on autopilot."}/>
                    </div>

                </div>
                <ImageSection image={plan}/>
            </div>
        </>
     );
}
 
export default Plan;