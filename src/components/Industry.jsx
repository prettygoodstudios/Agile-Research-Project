import React from "react";

const Industy = ({}) => {
    return (
        <div className="section industry">
            <h1 className="section__header">So what does the industry actully think?</h1>
            <p>I conducted a survery of 11 software developers and software quality assurance analysts. Here is what they have to say.</p>
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
        </div>
    )
}

export default Industy;