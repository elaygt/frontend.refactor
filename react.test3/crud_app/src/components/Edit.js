import React, { useState } from 'react'
import { AtomInputField } from "../atoms/AtomInputField";
import AtomButton from "../atoms/AtomButton";
import { tasks } from "../components/tasks";
import { TASK_STATUS } from "../constant/taskStatuses";
import AtomSelection from "../atoms/AtomSelection";
import TaskService from "../../services/TaskService";

function Edit({dataId , handleClose}) {
    const prevObject = tasks.find( task => task.id === dataId);
    console.log("prevObject: ",prevObject);




	const [projectName, setProjectName] = useState('');
	const [taskName, setTaskName] = useState('');
	const[id,setid] = useState('');
	const [status, setStatus] = useState('');

    const taskService = new TaskService();

    
    const handleChangeId = (event) => {
        setid( () =>  event.target.value )
    }

    const handleChangeTaskName = (event) => {
        setTaskName( () => event.target.value)
    }
    
    const handleChangeProjectName = (event) => {
        setProjectName( () =>  event.target.value)
    }

    const handleChangeStatus = (event) => {
        setStatus( () => event.target.value)
    }

    
    const updateTaskFunc = async(event) => {

        event.preventDefault();
        
        await taskService.updateTask(prevObject , {
            id : id,
            task_name : taskName,
            project_name : projectName,
            status : status
        })

        handleClose()
        
    }
	//popup window
return (
	<div className="popup-box">
            <div className="box">
               <form>

               <h5>Update Task</h5>
                {console.log("data in updatTask: ",dataId)}
                <AtomButton 
                    className="btn-close"
                    onClick={handleClose} text  />
                 <AtomInputField 
                    className = "input-form"
                    label = "Id" 
                    type="input" 
                    name="id"
                    value={id} onChange= {handleChangeId}// detects when the value of an input element changes =>onchange
                    placeholder="Please Enter Id Number"
                    required={true}
                    defaultValue={prevObject.id}/>

                <AtomInputField 
                    className = "input-form"
                    label = "Task Name" 
                    type="input"
                    name="task_name"
                    value={taskName} onChange= {handleChangeTaskName}// detects when the value of an input element changes =>onchange
                    placeholder="Please Enter Task Name"
                    required={true}/>
                    
                <AtomInputField 
                    className = "input-form"
                    label = "Project Name" 
                    type="input" 
                    name="project_name"
                    value={projectName} onChange= {handleChangeProjectName}// detects when the value of an input element changes =>onchange
                    placeholder="Please Enter Id Number"
                    required={true}/>
                <AtomSelection
                    className="selection-form"
                    id = "selection_task"
                    label="Status:"
                    name="status"
                    value={status} onChange= {handleChangeStatus}// detects when the value of an input element changes =>onchange
                    options = { TASK_STATUS } />
                
                <AtomButton 
                    className = "btn-create-update"
                    text="Update"
                    onClick={ updateTaskFunc }/>
                  
               </form>
            </div>
        </div>
    
)}
export default Edit
