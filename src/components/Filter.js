import React from "react";
const Filter = (props)=>{
    let filterData = props.filterData
    const category = props.category
    const setCategory = props.setCategory
    const filterSelect = (title)=>{
        setCategory(title)
        console.log(category)
    }
    return(
        <div className="w-11/12 flex flex-wrap justify-center gap-4 mx-auto py-4">
            {
                filterData.map((data)=>{
                   return(<button onClick={()=>filterSelect(data.title)} key={data.id} className="box-border text-lg bg-black text-white px-3 py-1 rounded-md hover:opacity-50  transition-all duration-10 focus:border border-white">{data.title}</button>)
                })
            }
        </div>
    ) 
}

export default Filter