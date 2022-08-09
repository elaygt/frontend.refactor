import React, { useState } from 'react'
import AtomButton from "../atoms/AtomButton";
import { TASK_STATUS } from "../constant/taskStatuses";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AtomInputField } from "../atoms/AtomInputField";
import AtomSelection from "../atoms/AtomSelection";
import TaskService from "../../services/TaskService";

function Create( {handleClose}) { 
    const [id, setid] = useState('');
	const [projectName, setprojectName] = useState('');
	const [taskName, settaskName] = useState('');
	const [status, setstatus] = useState('');

    const taskService = new TaskService();

    const handleChangeId = (event) => {
        setid( () =>  event.target.value )
    }

    const handleChangeTaskName = (event) => {
        settaskName( () => event.target.value)
    }
    
    const handleChangeProjectName = (event) => {
        setprojectName( () =>  event.target.value)
    }

    const handleChangeStatus = (event) => {
        setstatus( () => event.target.value)
    }

    const createFunc = async(event) => {
        
        event.preventDefault();

        let obj ={
            id : id,
            task_name : taskName,
            project_name : projectName,
            status : status
          }
        
       try{
            await taskService.create(obj); 
            handleClose();
       }
       catch(error){
            alert("error");
       }
       
       
    }
	
    
    
return (
	//popup window
    //task oluşturma formu 
        <div className="popup-box">
            <div className="box">
               <form>

                <h5>Create Task</h5>
                <AtomButton 
                    className="btn-close"
                    onClick={handleClose} text  />
                 <AtomInputField 
                    className = "input-form"
                    label = "Id" 
                    type="input" 
                    name="id"
                    value={id} onChange= {handleChangeId} // detects when the value of an input element changes =>onchange
                    placeholder="Please Enter Id Number"
                    required={true}
                    />

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
                    text="Create"
                    onClick={ createFunc } />  
               </form> 
            </div>
        </div>
    )

    }
export default Create
