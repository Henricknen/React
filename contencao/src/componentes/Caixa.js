import React from "react";

export default function Caixa(props) {
    return(
        <>
            <h1>Git Hub</h1>
            <p>{props.github}</p>       {/* obtendo o link do git passado em 'App.js' */}
            {props.children}        {/* obtendo os filhos de 'Caixa' com 'props.children' */}
        </>
    );
}