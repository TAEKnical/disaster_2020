import React from "react";
import propTypes from "prop-types";
import { GoogleMap } from "react-google-maps";
import withScriptjs from 'react-google-maps/lib/withScriptjs';

function Map({lat,lng,name,addr}){
    return(
        <div className="mapComponent">
            const myMap = withScriptjs(withGoogleMap((props) => 
            (<GoogleMap />)));
        </div>
    );
}

Map.propTypes = {
    lat : propTypes.number.isRequired,
    lng : propTypes.number.isRequired,
    name : propTypes.string.isRequired,
    addr : propTypes.string.isRequired
}


export default Map;