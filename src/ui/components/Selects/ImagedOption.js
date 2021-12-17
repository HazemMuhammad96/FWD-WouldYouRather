import React from 'react'

export default function ImagedOption(props) {
    const value = props.value;

    return (
        <option value={value.id}>
            {value.name}
        </option>
    )
}