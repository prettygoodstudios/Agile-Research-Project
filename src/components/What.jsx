import React from "react";

const What = ({}) => {
    return (
        <div className="what section">
            <h1 className="section__header">So what is Agile?</h1>
            <p className="section__content">Agile is a management philosophy and methodology for 
project managment. It is most commonly used for
software development projects, but it can be applied
to any process that is a project. The Agile Manifesto is
a document that outlines the core principles of Agile. 
These principles are as follows.</p>
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
            Agile does not provide specific prescriptions and 
            methodologies, this provides organizations a great deal
            of flexibility in how they implement Agile. This also
            results in several implementations/frameworks of Agile.
            An Agile implementation/framework is a specific 
            methodology that adheres to the Agile Manfiesto.  
            </p>
        </div>
    )
}

export default What;