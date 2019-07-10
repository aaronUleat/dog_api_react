import React from 'react';
import mapObject from '../Utilities/mapObject';
import Sub_Breeds from "./Sub_Breed";
import {Link} from "react-router-dom";

const Razas = props => {


    return(
        <div className={`columns is-multiline`}>
            {
                mapObject(props.razas,(key, raza) =>
                    <div key={key} className={`column is-one-third`}>
                        <div className={`card`}>
                            <header className={`card-header`}>
                                <p className={`card-header-title is-capitalized`}>
                                    {key}
                                </p>
                            </header>
                            <div className={`card-content is-clearfix`}>
                                <a className="button is-link">GO TO DOG IMAGE</a>
                                {raza.length > 0 ? <Sub_Breeds sub_breeds={raza} /> : <h3> This dog doesn't contain sub-breeds </h3>}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
};

export default Razas;
