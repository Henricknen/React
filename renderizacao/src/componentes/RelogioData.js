import React from "react";

export default function Relogio() {
    return(
        <p>
            {new Date().toLocaleTimeString()}<br/>
            {new Date().toLocaleDateString()}
        </p>
    )
}