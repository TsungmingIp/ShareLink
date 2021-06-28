import React from 'react'
import Link from "./Link"
import 'bootstrap/dist/css/bootstrap.min.css';



export default function LinkList(props) {
    return (
        <div>
            <h1>Linklist</h1>
            {props.links.map((link, index) => {
                return <Link index={index} key={index} link={link} />;
            })}
        </div>
    )
}
