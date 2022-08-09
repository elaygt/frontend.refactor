import PropTypes from "prop-types"//Bir bileşenin prop’ları üzerinde tip kontrolü yapmak için
import React from "react"

function AtomInputField( { className,  label , type , name , value , onChange , placeHolder , required} ){
    return (
        <>
            <label> {label} </label>
            <input 
                className={className}
                type = {type}
                placeholder={placeHolder}
                name={name}
                value={value}
                onChange={onChange}
                required = {required}>

            </input>
            
            <br></br>
        </>
    )
}

AtomInputField.defaultProps = {
    
}

AtomInputField.propTypes = {
    type : PropTypes.string,
    placeHolder : PropTypes.string
}
export default AtomInputField