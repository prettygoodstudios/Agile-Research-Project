import React from "react";

const Keys = ({}) => {
    return (
        <div className="section keys">
            <h1 className="section__header">What are the key components of all Agile frameworks?</h1>
            <h2 className="keys__component">Product Backlog</h2>
            <p>All Agile frameworks rely on some sort of product backlog. A product backlog is a line of features that have been requested to be developed. Each item in the backlog has a priority. Higher priority items will exit the backlog sooner. The process of adding, removing and adjusting backlog items is called refinement. Different frameworks/implementations have different practices for refining backlog items. In general backlog items are refined with the input of the Product Owner, stakeholders, Agile coach and team members. This requires both an intimate knowledge of the customers wants as well as the technical aspects involved. System level design from software engineering can be used to determine the depency between feature requests and how to break up the features into seperate tasks. This is essential to backlog refinement.</p>
            <h2 className="keys__component">Self Managing Teams</h2>
            <p>In addition, all Agile frameworks use self-managing teams. A self-managing team is a team that is independently accountable and responsible for delivering a specific product or service. This often requires teams comprised of individuals with different specialities and skillsets. Teams of this nature are commonly referred to as cross-functional. For example, the latest Scrum guide dictates that there should be no dedicated Quality Assurance and DevOps teams. Traditionally there is a dedicated Quality Assurance team for testing code and a DevOps team incharge of managing infrasture such as servers, networking equipment and cloud computing configurations. Many implementations of Agile eliminate these dedicated teams. This requires team-members to be flexible and motivated as they must coordinate with team-members with extremely different skillsets. In addition, it places additionally accountability on each team-member as there is generally only one member of each skillset on each team. If there is no buy in from team-members, this can be quite challening. Therefore, Agile should only be implemented when it fits the company culture and work enviroment.</p>
        </div>
    )
}

export default Keys;