
function Showdata({list,setList,filter,setFilter}){

    

    function filterHandler(){
        setFilter(!filter)
    }
    return(
        <div>
            <button onClick={filterHandler} className="bg-blue-500 cursor-pointer">No filter</button>
            <div>
                <button className="bg-amber-300 cursor-pointer">Easy</button>
                <button className="bg-green-300 cursor-pointer">Medium</button>
                <button className="bg-violet-300 cursor-pointer">Hard</button>
            </div>
        </div>
    )
}
export default Showdata;