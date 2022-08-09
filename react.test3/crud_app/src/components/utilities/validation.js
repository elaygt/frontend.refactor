/**
 * @function validateInputs - This function validate task object's properties that whether they have empty string or not 
 * @param {Object} object - This is a task object 
 * @returns {Boolean}
 */
 export function validateInputs(object) {
    let values = Object.values(object);
    
    let result = values.filter( property => property.trim().length === 0 );
    
    return (result.length >0);
}