import { tasks } from "../components/tasks";
import { validateInputs } from "../components/utilities/validation";

/**
 * @class TaskService
 */
export default class TaskService{
    
/**
 * @function createTask - This function creates a new task row and appends to Task Table
 * @param {Object} taskObject - This is a task object that will be appended in Task Table
 * @return {Object}  - This function returns created task itself 
 * @throw  {Error} 
 * @async
 */
    async createTask(taskObject){
        
        if( Object.values(taskObject).every ( x => x) && !validateInputs( taskObject ) ){
             tasks.push(taskObject);
                return taskObject;
        }
        else {
            throw new Error("Invalid Properties");
        }
    }

/**
 * @function updateTask - This function updates existing task's value or values
 * @param {Object} taskObject - This is a task in Task Table that will be updated with incoming object 
 * @param {Object} newObjectVal - This is new task value of existing task in Task Table that will be replaced with old value
 * @async
 */
    async updateTask(taskObject , newObjectVal){
        if( Object.values(taskObject).every ( x => x) ){

            tasks.forEach( task => {
                
                if(task.id === newObjectVal.id) {
                    task.project_name = newObjectVal.project_name;
                    task.task_name = newObjectVal.task_name;
                    tasks.status = newObjectVal.status
                }
                console.log("tasks UPDATE:",tasks)
            })

        }       
    }
/**
 * @function deleteTask - This function removes task or tasks from table
 * @param {Array} tasksArray - This array contains ids that will be removed from table
 * @async 
 */
    async deleteTask( tasksArray ){
        if(tasksArray && tasksArray.length > 0){

            let ids ;
            let indexOfDelete; 
            
            tasksArray.forEach( taskId => {
                ids = tasks.map( task => task.id);
                indexOfDelete = ids.indexOf(taskId);
                tasks.splice(indexOfDelete , 1)
            })
            
        }   
        else{
            alert("There is not selected tasks to delete")
        }
    }

/**
 * @function checkById - This function controls that task id exists or not.
 * @param {Number} taskId - This is an id of task  
 * @returns {Boolean} - This task id exists or not
 * @async
 */
    async checkById(taskId){
        try{
            let parsedTaskId = parseInt(taskId );
            if(!parsedTaskId){
                let value = tasks.find( task => task.id === taskId)
                console.log("value: ",value)
                return value;
            }
        }
        catch(error){
            console.log("Error in TaskService.checkById() :",error);
        }
        

    }

    /**
 * @function byId - This function returns task that has taskId which is specified in parameter.
 * @param {Number} taskId - This is an id of task  
 * @returns {Object} - Task Object
 * @async
 */
     async byId(taskId){
        let task = tasks.find( task => task.id === taskId)
        console.log("task in byid",task);
        
        return task ;
        
    }
}