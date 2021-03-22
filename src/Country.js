import React from 'react';

const Country = (props) => {

    // Sorts the scores depending on the sortOrder
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
            <tbody>
                <tr>
                    <th colSpan="2">
                        HIGH SCORES: {props.country.name}
                    </th>
                </tr>
                {scores.map((s, index) => 
                    <tr key={index}>
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