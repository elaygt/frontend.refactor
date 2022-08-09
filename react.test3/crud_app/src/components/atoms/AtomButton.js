import PropTypes from "prop-types"//Bir bileşenin prop’ları üzerinde tip kontrolü yapmak için


function AtomButton( { className, text  , onClick} ){

    return (
        <button
            className = {className}
            onClick = {onClick.pr}
        >
        {text}    
        </button>
    );
}

AtomButton.defaultProps = {
    text:'text',
}

AtomButton.propTypes = {
    text : PropTypes.string.isRequired,
    color : PropTypes.string,
    onClick : PropTypes.func
}
export default AtomButton