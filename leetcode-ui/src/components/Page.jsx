import { useState } from "react";
import Showdata from "./Showdata";


const  Page=()=>{

    const[filter,setFilter]=useState(false);
    const [list,setList]=useState([
        {
            id:1,
            quistion:"12. two sum",
            dificulty:"Easy"
        },
        {
            id:2,
            quistion:"19. Sliding Window Maximum",
            dificulty:"Medium"
        },
        {
            id:3,
            quistion:"37. Prim's Algo",
            dificulty:"Hard"
        }
    ]);

    
    function changeFilter(){
        setFilter(!filter);
    }

    

    if(!filter){
        return(
            <div>
                <button onClick={changeFilter} className=" bg-red-500 cursor-pointer">Filter</button>
                <div>
                    {
                        list.map((x)=>(
                            <div key={x.id}>
                                <span>{x.quistion} {x.dificulty}</span>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        )
    }
    return(
        <Showdata filter={filter} setFilter={setFilter} list={list} setList={setList}/>
    )
    
}
export default Page;
