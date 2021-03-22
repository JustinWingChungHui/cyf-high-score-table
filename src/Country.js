import React from 'react';

const Country = (props) => {

    let scores;

    if (props.sortOrder === 'ascending') {
        scores = props.country.scores
                    .sort((a, b) => a.s < b.s ? -1 : 1).slice();
    } else {
        scores = props.country.scores
                    .sort((a, b) => a.s < b.s ? 1 : -1).slice();
    }
    


    return(
        <table className="countryTable">
            <thead>
                <th colSpan="2">
                    HIGH SCORES: {props.country.name}
                </th>
            </thead>
            <tbody>
                {scores.map(s => 
                    <tr>
                        <td>
                            {s.n}
                        </td>
                        <td className="score">
                            {s.s}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Country;