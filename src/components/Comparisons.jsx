import React from "react";


const Comparisons = ({}) => {
    return (
        <div className="comparisons section">
            <h1 className="section__header">Some basic comparisons of the frameworks/implementations</h1>
            <table className="comparisons__table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Scrum</th>
                        <th>Kanban</th>
                        <th>Lean</th>
                        <th>Extreme Programming</th>
                        <th>Scrum at Scale</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Iterations</th>
                        <td>&#10003;</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>&#10003;</td>
                    </tr>
                    <tr>
                        <th>Scrum or Kanban Board</th>
                        <td>&#10003;</td>
                        <td>&#10003;</td>
                        <td></td>
                        <td></td>
                        <td>&#10003;</td>
                    </tr>
                    <tr>
                        <th>Backlog</th>
                        <td>&#10003;</td>
                        <td>&#10003;</td>
                        <td>&#10003;</td>
                        <td>&#10003;</td>
                        <td>&#10003;</td>
                    </tr>
                    <tr>
                        <th>Eliminates Processes</th>
                        <td>&#10003;</td>
                        <td>&#10003;</td>
                        <td>&#10003;</td>
                        <td>&#10003;</td>
                        <td>&#10003;</td>
                    </tr>
                    <tr>
                        <th>Flat Organization Structure</th>
                        <td>&#10003;</td>
                        <td>&#10003;</td>
                        <td>&#10003;</td>
                        <td>&#10003;</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Comparisons;