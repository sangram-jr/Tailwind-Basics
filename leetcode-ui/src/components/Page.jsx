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
            quistion:"37. Reverse LinkedList",
            dificulty:"Easy"
        },
        {
            id:3,
            quistion:"5. Sqrt(x)",
            dificulty:"Easy"
        },
        {
            id:4,
            quistion:"11. Prime Number",
            dificulty:"Easy"
        },
        {
            id:5,
            quistion:"7. Binary Search ",
            dificulty:"Easy"
        },
        {
            id:6,
            quistion:"81. Array Duplicates",
            dificulty:"Easy"
        },
        {
            id:7,
            quistion:"105. Second Largest",
            dificulty:"Easy"
        },
        {
            id:8,
            quistion:"89. Missing in Array",
            dificulty:"Easy"
        },
        {
            id:9,
            quistion:"809. Count Inversion",
            dificulty:"Medium"
        },
        {
            id:10,
            quistion:"19. Sliding Window Maximum",
            dificulty:"Medium"
        },
        {
            id:11,
            quistion:"37. Prim's Algo",
            dificulty:"Hard"
        },
        {
            id:12,
            quistion:"39. Kruskal's Algo",
            dificulty:"Hard"
        }
    ]);

    
    function changeFilter(){
        setFilter(!filter);
    }

    

    if(!filter){
        return(
            <div className="min-h-screen bg-neutral-900 grid grid-cols-12 gap-11">
                <div className="grid col-span-2 bg-neutral-700 border-amber-50">

                </div>
                <div className="grid col-span-4 bg-neutral-800 mt-8 mb-30 ml-9 rounded-xl h-130">

                </div>
                <div className="grid col-span-6 text-gray-200 mt-8 mr-8">
                    <button onClick={changeFilter} className="cursor-pointer h-8 w-22 text-center font-semibold bg-gray-200 text-neutral-900 rounded-full">Filter</button>
                    {
                        list.map((x)=>(
                            <div key={x.id} className="bg-neutral-800 p-6 flex justify-between rounded-2xl mb-1 mr-4 mt-4">
                                <span className="font-bold">{x.quistion} </span>
                                <span className="text-green-700 font-semibold">{x.dificulty}</span>
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
