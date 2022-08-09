import { tasks } from "../../components/tasks";
import BootstrapTable from 'react-bootstrap-table-next';
import { COLUMNS } from "../constant/tableColumns";



function AtomTable( { selectRow } ){  //Select a single row in the table =>selectRow
     return (
        <div>
            <BootstrapTable 
                keyField='id' 
                data={ tasks } 
                columns={ COLUMNS } 
                selectRow={selectRow}/>
            </div>
    )
    
}
export default AtomTable