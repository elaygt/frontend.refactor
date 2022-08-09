import React, {useState} from "react";
import Create from "../components/Create";
import Edit from "../components/Edit";
import AtomButton from "../components/atoms/AtomButton";
import AtomTable from "../components/atoms/AtomTable";
import TaskService from "../services/TaskService";

function MainPage(){
  
    const [isShown , setIsShown] = useState(false);
    const [isCreate , setIsCreate] = useState(false);
    const [isUpdate , setIsUpdate] = useState(false);
    
    const [state , setState] = useState({
        selected : []
    })
    
    const taskService = new TaskService();

    
    
    const togglePopupUpdate = () => { 
        setIsUpdate( update => !update);
    }


    const deleteTaskFromTable = () => {
        if(state?.selected?.length >0){
            console.log(state.selected," are deleted");
            taskService.deleteTask( state.selected );
            handleOnSelect([] , false)
            handleOnSelectAll(false , [])
        }
        else{
            alert("There is no selected task to delete");
        }
    }

    
    const updateTable = (row) => {
        
        if(state.selected.length === 1){
            togglePopupUpdate();

        }
        else{
            alert("Please select only one task to update");
        }
    }

    let handleOnSelect = (row, isSelect) => {
        if (isSelect) {
          setState(() => ({
            selected: [...state.selected, row.id]
          }));
          console.log("selected:", state.selected);
        } else {
          setState(() => ({
            selected: state.selected.filter(x => x !== row.id)
          }));
        }
      }
      
    let  handleOnSelectAll = (isSelect, rows) => {
        const ids = rows.map(r => r.id);
        if (isSelect) {
          setState(() => ({//setState() çağırdığımızda parametre olarak verdiğiniz nesneyi alıp mevcut state’e aktarır.
            selected: ids
          }));
        } else {
          setState(() => ({
            selected: []
          }));
        }
      }
    const selectRow = {
        mode : "checkbox",
        clickToSelect : true ,
        selected: state.selected,
        style: { backgroundColor:'#FFC0CB' },
        onSelect: handleOnSelect,
        onSelectAll: handleOnSelectAll
    }
    return (
        <div >
            {
                    <header >
                
                        <p>
                            <AtomButton 
                                className="btn" 
                                text ="Show Tasks"
                                onClick = {() =>  setIsShown(cur => !cur)}/>
                            
                            <AtomButton 
                                className="btn"
                                text = "Create Task" 
                                onClick={() => setIsCreate(!isCreate)}/>  
                            
                            <AtomButton 
                                 className="btn"  
                                 text ="Edit Tasks" 
                                 onClick = {updateTable }/>

                            <AtomButton 
                                 className="btn"  
                                 text ="Delete Tasks" 
                                 onClick = {deleteTaskFromTable}/>
                            
                        </p>
                        
                            { isUpdate && (
                                        <Edit
                                            dataId = {state.selected[0]}
                                            handleClose = {togglePopupUpdate}/>
                                )
                            }

                            <br></br>
                            
                            { isShown && (
                                    <AtomTable 
                                        selectRow = {selectRow}/>
                            )}
            
                            { isCreate && (            
                                    <Create
                                        handleClose = {() => setIsCreate(!isCreate)}/>
                                
                            )}
                        
                    </header>
                     
            } 
        </div>
    );
}
export default MainPage