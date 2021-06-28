import React from 'react'
import { InputGroup } from 'react-bootstrap'

export default function FilterLink(props) {
    console.log("these are the filter props: ", props)
    return (
        <div>
            <h1>FilterLink</h1>
            <InputGroup>
                <input type="text" placeholder="Search" value={props.filter} onChange={props.filterOnChange} className="form-control" />
            </InputGroup>
        </div >
    )
}
