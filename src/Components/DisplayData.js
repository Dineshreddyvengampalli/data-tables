import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

import {useEffect} from 'react'

let DisplayData = (props)=>{
    let displayData = props.item
    useEffect(()=>{
        
        $(document).ready( function () {
        console.log(displayData)
        $('#table_id').DataTable({
        data : displayData,
        retrieve: true,
        columns: [
            { data: 'id' },
            { data: 'title' }   
        ]  
        });
        } );
        

    },[props])
    
    
    return(
        <div className="App">
        <table id="table_id" width='100%'>
          <thead>
              <tr>
                  <th>id</th>
                  <th>Title</th>
                  
              </tr>
          </thead>
      
        </table>
    </div>
    )

}

export default DisplayData