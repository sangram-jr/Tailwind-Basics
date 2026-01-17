import { useState } from "react";


const  Page=()=>{

    
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

    

    

    
    return(
            <div>
                
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
export default Page;
