const Item =()=>{
return(
    <li className="flex justify-between bg-white px-3 py-4 mb-0.5 items-center rounded-md">
        <span>Todo</span>
        <div className="flex gap-2">
            <button className="bg-green-300 px-3 py-1.5 text-black rounded-md">Edit</button>
            <button className="bg-red-800 px-3 py-1.5 text-white rounded-md">Del</button>
        </div>
    </li>
)
}

export default Item;