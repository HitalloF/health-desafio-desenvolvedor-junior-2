import React from 'react'

const input = ({ id, label, setValue,required , ...props }) => {
    return (
        <div>
 
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} name={id} onChange={({target})=>setValue(target.value)} required={required} {...props}/>

        </div>
    )
}

export default input