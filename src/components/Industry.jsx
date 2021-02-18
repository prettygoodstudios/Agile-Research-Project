import React from "react";

const Industy = ({}) => {
    return (
        <div className="section industry" id="industry">
            <h1 className="section__header">So what does the industry actually think?</h1>
            <p>I conducted a survey of 11 software developers and software quality assurance analysts. Here is what they have to say.</p>
            <h2>What Agile frameworks/implementations do they use?</h2>
            <div className="industry__framework-graph">
                <img src="https://staticgeofocus.s3-us-west-2.amazonaws.com/Screen+Shot+2021-02-16+at+9.20.30+PM.png"/>
            </div>
            <h2>How much knowledge of Agile is necessary to be an effective team member?</h2>
            <div className="industry__comments">
                <div className="industry__comments__comment">
                    In my opinion, not much. You can get work done without knowing Agile. If you know and work within the ideas of Agile and the SDLC you can be more efficient in all the processes.
                    <div className="industry__comments__comment__carot"></div>
                </div>
                <div className="industry__comments__comment">
                    Very little, so long as the other members help you out. If your team is starting from scratch you'll want everyone to have a working knowledge.
                    <div className="industry__comments__comment__carot"></div>
                </div>
                <div className="industry__comments__comment">
                    Somewhat knowledgeable. One can go through the motions of the Scrum ceremonies but understanding their purpose is very important to get the most value out of them.
                    <div className="industry__comments__comment__carot"></div>
                </div>
                <div className="industry__comments__comment">
                    I think a basic understanding is good enough unless you are leading the SCRUM.
                    <div className="industry__comments__comment__carot"></div>
                </div>
            </div>
            <h2>How does their opinions stack up with managers, the official values of Agile and the official guidelines of frameworks such as Scrum?</h2>
            <p>
            They are for the most part using a two-week sprint. This aligns with the views of many academics and managers. I interviewed Guillermo Matetzi, a Scrum Master at Nuskin Enterprises and he states that he believes a two-week sprint is ideal for most development teams. He holds this opinion as a sprint duration longer than two weeks is generally too long to get prompt feedback, but a sprint duration that is shorter than two weeks is generally too short to get meaningful work done. This can be problematic due to user-stories in Scrum being timeboxed. One way in which the opinions of developers significantly differ from management and academics was their position on the level of understanding of Agile required to work effectively on an Agile team. Guillermo holds the position that it is absolutely essential for the members of an Agile team to understand the core principles and values of the methodology. The official Scrum Guide and Agile principles also hold this same position. In contrast, the opinions of the developers were mostly that only a minimum understanding is necessary. This is interesting as it suggests that there might be a disconnect between what managers and academics envision and what actually gets implemented. I personally view that it is important to consider and review the opinions and thoughts of team-members, when implementing Agile.
            </p>
        </div>
    )
}

export default Industy;