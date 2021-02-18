import React from "react";

const Frameworks = ({}) => {
    return <div className="framework section" id="frameworks">
        <h1 className="section__header">What are the main implementations/frameworks?</h1>
        <div className="framework__well">
            <div className="framework__well__card">
                <h2>Scrum</h2>
                <p>Scrum is an Agile framework where work is split into iterations that are called sprints. Each sprint has a fixed duration. A typical sprint duration ranges from 2 to 6 weeks. At the start of each sprint work is picked off a queue called the product backlog. The team guided by their Scrum coach the Scrum Master will pick tasks that they believe can be completed by the end of the sprint. Once tasks are picked from the backlog, no new tasks can be added to the sprint. Items in the product backlog are sorted first based off of priority and secondly by duration and other factors. Each task is timeboxed meaning if it cannot be completed within the sprint it is decreased in size. At the end of each sprint working software is delivered to the customer.</p>
            </div>
            <div className="framework__well__card">
                <h2>Kanban</h2>
                <p>It is an Agile implementation where software is broken into discrete and small units that are added to a queue called the product backlog. Items in the queue have different priorities. The highest priority items are picked off the queue first. Kanban differs from Scrum in the sense that there are no iterations and items are continuously added and removed off of the product backlog. In addition, Kanban uses a Kanban board to visualize the progress of tasks. The Kanban board shows which tasks are at which step in the process. This can help visualize bottlenecks.</p>
            </div>
            <div className="framework__well__card">
                <h2>Extreme Programming</h2>
                <p>It is primarily concerned with baking in quality into the software development process. This eliminates the need for dedicated Quality Assurance team members. Extreme programming requires unit tests to be written, before any production code is written. Unit tests are automated tests that test a specific unit of code. This provides an automated way to test the software and eliminates the waste created by code traveling between software developers and quality assurance analysts. In addition, Extreme Programming mandates that all programming be done via pair-programming. This is where two developers work in tandem allowing them to simultaneously write and review code. This eliminates the need for a dedicated code review step in the development process. Extreme Programming is all about incorporating quality into the process inorder to eliminate non value-adding quality assurance steps.</p>
            </div>
            <div className="framework__well__card">
                <h2>Lean</h2>
                <p>An implementation of Agile that focuses on eliminating processes that do not add value. This is done through the use of value stream mapping and other analytical methods. Value stream mapping is a process where a process is described using a diagram showing each value adding step and the key statistics of each step.</p>
            </div>
            <div className="framework__well__card">
                <h2>Scrum at Scale</h2>
                <p>Scrum at Scale is based on the Scrum framework, but is technically not part of the Scrum framework, since the Scrum framework is immutable. Scrum at Scale is designed for large enterprise organizations. In Scrum at Scale there are Scrum teams that are part of larger units called Scrums of Scrums. Scrums of Scrums have a Scrum of Scrum Master and a Chief Product Owner. These individuals coordinate scaled daily Scrums and sprint retrospectives with each team's Scrum Master and product owner. They ensure that each team is supporting the organization's visions and goals and promote synergies between teams. In addition, some Scrum at Scale organizations may have multiple Scrum of Scrums. In this case there is an Executive Action Team that coordinates work between the different Scrums of Scrums. Scrum at Scale should be used, when a flat organization structure is not possible due to the scale, geographies or scope of an organization. </p>
            </div>
        </div>
    </div>
}

export default Frameworks;