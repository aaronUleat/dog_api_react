import React from 'react';

const Sub_Breeds = props => {
    return(
        <div className={`sub-breed`}>
            <h5 className={`is-size-4 has-text-success`}>Sub-Breeds</h5>
            <ul>
                {
                    props.sub_breeds.map(sub => <li><a href="#">{sub}</a> </li> )
                }
            </ul>
        </div>
    )
};


export default Sub_Breeds;