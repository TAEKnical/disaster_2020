import React from "react";
import PropTypes from "prop-types";


function Message({id, msg, location, date}){
    return <div className="msgComponent">
        {id}
        {msg}
        {location}
        {date}
        </div>;
}

Message.propTypes ={
    id : PropTypes.string.isRequired,
    msg : PropTypes.string.isRequired,
    location : PropTypes.string.isRequired,
    date : PropTypes.string.isRequired
}

export default Message