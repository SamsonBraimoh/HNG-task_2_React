import React from "react";
import '../App.css'

export default function Button ({label}) {
    return(
        <>
            <button className="reusableBtn">{label}</button>
        </>
    )
}