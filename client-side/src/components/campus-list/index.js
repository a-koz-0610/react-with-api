import React from 'react';

const CampusList = ({ campuses }) => {
    return (
        campuses.map(campus => {
            return (
                <div key={campus.id}>
                    <h3>{campus.name}</h3>
                    <ul>
                        {campus.bootcamps.map(bootcamp => {
                            return (
                                <li key={bootcamp.id}>{bootcamp.name}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        }))
}
export default CampusList;
