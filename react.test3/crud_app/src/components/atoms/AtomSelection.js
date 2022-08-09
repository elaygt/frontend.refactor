import React from "react"

function AtomSelection( { className,  id , name , value , onChange , label , options  } ){


    let optArray = options.map( option => //The minimal option parser that returns options in array
                        
            <option 
                value={option.value_text}>
                {option.value_text} 
            </option>)

    return (
        <div 
            className={className}
            >
            <label> {label} </label>
            <select 
                id = {id}
                name = {name}
                value = {value}
                onChange={onChange}>
                
                {optArray}

            </select>
        </div>
    )
}
export default AtomSelection