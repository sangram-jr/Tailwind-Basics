import { useState } from "react";
import Showdata from "./Showdata";
import star from '../assets/star-icon.jpg'


const  Page=()=>{

    const [open,setOpen]=useState(false);
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

    function handleOpen(){
        setOpen(!open);
    }
    

    if(!filter){
        return(
            <div className="min-h-full grid grid-cols-12 gap-4 sm:gap-11">
                {/* First div (SlideBar part) */}
                {!open && (
                    <div className="fixed top-2 left-2 text-xl text-gray-200 cursor-pointer sm:hidden">
                        <button onClick={handleOpen}>☰</button>
                    </div>
                )}
               {/* desktop-always visible,position-static   mobile- if open is true then visible ,position is fixed*/}
               {/* translate-x-0 --> visible     -translate-x-100 ---> element moves out but in opacity element is still there , we only hide the element*/}
                <div className={`col-span-12 sm:col-span-2 bg-neutral-700 min-h-screen transition-all duration-300 fixed top-0 left-0 w-[75%] sm:static sm:w-auto sm:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
                    <div>
                        <div className="flex justify-between px-5 pt-2">
                            <p className="text-md font-bold text-gray-200">My Lists</p>
                            <button onClick={handleOpen} className=" text-gray-200 text-xl cursor-pointer sm:hidden">✕</button> 
                        </div>
                        <p className="text-gray-200 font-semibold text-md mt-2 ml-5">Created By Me</p>
                        <div className="bg-neutral-600 w-45 h-9 rounded-md ml-5 mt-4 cursor-pointer flex items-center gap-2">
                                <img src={star} className="h-6 w-7 pl-2"/>
                                <p className=" text-gray-200  text-center">Favorite</p>
                        </div>
                            
                    </div>
                </div>
                
                {/* second div (progress part) */}
                <div className="grid col-span-12 sm:grid sm:col-span-4 bg-neutral-800 mt-8 mb-30 rounded-xl h-140 ml-9">
                    <img src={star} alt="star-png" className="h-21 w-20 rounded-md ml-8 mt-8"/>
                    <h1 className="text-4xl text-gray-200 font-bold ml-8 -mt-9">Favorite</h1>
                    <p className="text-gray-200 ml-8 -mt-9">Sangram . 19 quistions . private</p>
                    <button className="ml-8 -mt-10 h-9 w-29 text-center font-semibold bg-gray-200 text-neutral-900 rounded-full">Practice</button>
                    <div className="bg-neutral-700 h-px w-96 -mt-8 ml-8"></div>
                    <p className=" text-gray-200 font-semibold ml-8 -mt-17">Progress</p>
                    <div className="grid grid-cols-12 ml-8 -mt-21 mb-4">
                        <div className="grid col-span-12 sm:grid sm:col-span-8 bg-neutral-700 mr-4 rounded-md  justify-center items-center">
                            <div className="w-37 h-37 rounded-full border-4 border-green-600 flex justify-center items-center">
                                <div className="text-gray-200 text-md flex flex-col"><span className="font-semibold text-3xl">19/19</span>Solved</div>
                            </div>
                        </div>
                        <div className="grid col-span-12 sm:grid sm:col-span-4 bg-neutral-800 mr-4 rounded-md">
                            <div className="m-1 bg-neutral-700 rounded-md text-green-500 flex items-center justify-center">Easy</div>
                            <div className="m-1 bg-neutral-700 rounded-md text-center text-yellow-500 flex items-center justify-center">Medium</div>
                            <div className="m-1 bg-neutral-700 rounded-md text-center text-red-500 flex items-center justify-center">Hard</div>
                        </div>
                    </div>
                </div>

                {/* Third div (quistions part) */}
                <div className="grid col-span-12 sm:grid sm:col-span-6 text-gray-200 mt-2 ml-2 sm:mt-8 sm:mr-8 w-full sm:w-170">
                    <button onClick={changeFilter} className="cursor-pointer h-8 w-22 text-center font-semibold bg-gray-200 text-neutral-900 rounded-full hover:bg-gray-50">Filter</button>
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
