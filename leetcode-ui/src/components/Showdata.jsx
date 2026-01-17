import { useState } from "react";


function Showdata({list,setList,filter,setFilter}){

    
    const [easyData,setEasyData]=useState([]);


    function easyHandler(){
        const p=list.filter((x)=>(
            x.dificulty==='Easy' 
        ))
        setEasyData(p);
    }
    function mediumHandler(){
        const p=list.filter((x)=>(
            x.dificulty==='Medium' 
        ))
        setEasyData(p);
    }
    function hardHandler(){
        const p=list.filter((x)=>(
            x.dificulty==='Hard' 
        ))
        setEasyData(p);
    }

    

    function filterHandler(){
        setFilter(!filter)
    }

    



    
    return(
            <div>
                <button onClick={filterHandler} className="bg-blue-500 cursor-pointer">No filter</button>
                <div>
                    <button onClick={easyHandler} className="bg-amber-300 cursor-pointer">Easy</button>
                    <button onClick={mediumHandler} className="bg-green-300 cursor-pointer">Medium</button>
                    <button onClick={hardHandler} className="bg-violet-300 cursor-pointer">Hard</button>
                </div>

                {/* initially easyData is empty, when user click on the easy button, then easyData array only hold  the easy quistion and show the user,
                 then when again user click on to the medium button then again page is reRender and again easyData array is empty and then hold only the medium data and show the user  */}
                <div>
                    {
                        easyData.map((x)=>(
                            <div key={x.id}>
                                <span>{x.quistion} {x.dificulty}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            
    )
    
   
    
    
}
export default Showdata;