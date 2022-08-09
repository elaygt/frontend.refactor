import { AtomInputField } from "../atoms/AtomInputField";
function InputGroups({ className }){

    return (
        <div >
            <AtomInputField 
                className = {className}
                label = "Id" 
                type="input" 
                placeholder="Enter Id Number"/>

            <AtomInputField 
                className = {className}
                label = "Task Name" 
                type="input" 
                placeholder="Enter Task Name"/>
                
            <AtomInputField 
                className = {className}
                label = "Project Name" 
                type="input" 
                placeholder="Enter Project Name"/>
            
        </div>
    )
}
export default InputGroups
