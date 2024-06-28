import React from "react"
import {FcLike} from "react-icons/fc"
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify"

export default function Card(props){
    let course = props.course
    let likedCourses = props.likedCourses
    let setLikedCourses = props.setLikedCourses
    let desc=`${course.description.substring(0,100)}...`

function handleClick(){
    if(likedCourses.includes(course.id)){
        setLikedCourses((prev) => prev.filter((cid) => cid!==course.id))
        toast.warning('Like Removed')
    }
    else if(likedCourses.length ===0){
        setLikedCourses([course.id])
        toast.success('Like Succesfully')
    }
    else{
        setLikedCourses((prev) =>[...prev,course.id])
        toast.success('Like Succesfully')
    }
}

    return(
        <div className="w-[350px] rounded-md overflow-hidden h-fit bg-[#0f172a]">
             <div className="relative">
                <img src={course.image.url}></img>
                <div className="absolute right-3 bottom-[-15px] bg-white rounded-full w-[40px] h-[40px] flex justify-center items-center">
                <button>
                    {
                        likedCourses.includes(course.id)?<FcLike fontSize={27} onClick={handleClick}/>:<FcLikePlaceholder fontSize={27} onClick={handleClick}/>
                    }
                </button>
                </div>
             </div>
             <div className="text-white space-y-2 p-3"> 
                <p className="font-bold text-lg">{course.title}</p> 
                <p >{desc}</p> 
             </div>
        </div>
    )
}