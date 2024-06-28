import React,{useState} from "react";
import Card from './Card'
import { toast } from "react-toastify";
const Cards = (props) =>{
    const[likedCourses,setLikedCourses] = useState([])
    let courses = props.courses
    let category = props.category
    console.log(courses[category])

    const getCourses = ()=>{
        if(category === 'All'){
            let allCourses = []
            Object.values(courses).forEach(courseCategory=>{
                courseCategory.forEach(course=>{
                    allCourses.push(course); 
                }) 
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
    }
    if(getCourses()!==undefined){
        return(
            <div className="flex flex-wrap justify-center items-center gap-8 mt-5">
                    {
                        getCourses().map((course)=>{     
                            return(<Card course={course} key={course.id} 
                                likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>)
                        })
                    }   
            </div>
        )
    } 
    else
    toast.error('No Data Found')
        return(
        <p className="mx-auto text-white text-4xl font-bold mt-10 flex justify-center">Sorry...No Data Found!!!!</p>
    )
}

export default Cards