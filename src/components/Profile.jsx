import React from 'react'

import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile(props) {
    return (
        <div>
            <h1>Profile</h1>
            <Image style={{ width: "50%" }}
                src="https://picsum.photos/200" roundedCircle />
            <h4>King of Js</h4>
            <h5>{props.faveLinks} favelinks</h5>
            <h5>{props.sharedLinks} sharedlinks</h5>
        </div>
    )
}
