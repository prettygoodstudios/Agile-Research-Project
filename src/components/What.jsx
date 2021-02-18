import React from "react";

const What = ({}) => {
    return (
        <div className="what section" id="about">
            <h1 className="section__header">So what is Agile?</h1>
            <p className="section__content">Agile is a management philosophy and methodology for project management. It is most commonly used for software development projects, but it can be applied to any process that is a project. The Agile Manifesto is a document that outlines the core values of Agile. These core values are as follows.</p>
            <div className="what__manifesto">
                <div className="what__manifesto__item">
                    <span>Individuals and interactions</span> over processes and tools
                </div>
                <div className="what__manifesto__item">
                    <span>Working software</span> over comprehensive documentation
                </div>
                <div className="what__manifesto__item">
                    <span>Customer collaboration</span> over contract negotiation
                </div>
                <div className="what__manifesto__item">
                    <span>Responding to change</span> over following a plan
                </div>
            </div>
            <p className="section__content">
            Agile does not provide specific guidelines and practices. Agile only provides general guidelines and a philosophy to project management. The result of this is that organizations have great flexibility in how they implement Agile. This also results in several implementations/frameworks of Agile existing. An Agile implementation/framework is a specific methodology that adheres to the Agile Manifesto.
            </p>
        </div>
    )
}

export default What;