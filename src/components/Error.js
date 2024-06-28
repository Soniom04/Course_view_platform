import React from "react";

export default function Error(){
    return(
        <div className="max-w-[500px] mx-auto flex flex-col space-y-3 items-center mt-5">
            <img className="w-2/3" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"></img>
            <p className="text-4xl font-bold text-white">Oops! Some Error Occured</p>
        </div>
    )
}