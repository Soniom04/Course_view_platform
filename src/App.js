import './App.css';
import React from 'react';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Nav from './components/Nav'
import Filter from './components/Filter'
import Cards from './components/Cards.js';
import {apiUrl,filterData} from './data.js'
import {useState,useEffect} from 'react'
import {toast} from "react-toastify"
import Spinner from "./components/Spinner.js"
import Error from './components/Error.js';

function App() {
  console.log(filterData)
  const [courses,setCourses] = useState([])
  const [loading,setLoading] = useState(false)
  const[category,setCategory] = useState(filterData[0].title)
  const[fetched,setFetched] = useState(true)

  const fetchdata = async()=>{
    setLoading(true)
    try{
      const res = await fetch(apiUrl)
      const output = await res.json()
      setCourses(output.data)
      setLoading(false)
      // console.log(output.data)
    }
    catch{
      setLoading(false)
      setFetched(false)
      toast.error('Some Error Occured')
    }
  }

  useEffect(()=>{                            
    fetchdata();
  },[]) 


  return (
    <div className="min-h-screen flex flex-col bg-[#475569]">
      <Nav/>
      <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      <div className='w-11/12 max-w-[1200px] mx-auto mb-5'>
        {
          loading ? (<Spinner/>):(fetched?<Cards courses={courses} category={category}/>:<Error/>)
        }
      </div>
    </div>
  ); 
}
export default App;

// import React, { useState, useRef } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'; // Optional: For better styling

// export default function App() {
//   const [width, setWidth] = useState(100);
//   const boxRef = useRef(null);
//   const isDragging = useRef(false);

//   const handleMouseDown = () => {
//     isDragging.current = true;
//   };

//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   const handleMouseMove = (event) => {
//     if (isDragging.current) {
//       const newWidth = event.clientX - boxRef.current.getBoundingClientRect().left;
//       setWidth(newWidth);
//     }
//   };

//   return (
//     <div className="App" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
//       <h1>Adjust the Box Width</h1>
//       <div
//         ref={boxRef}
//         className="box"
//         style={{ width: `${width}px`, height: '100px', backgroundColor: 'lightblue', position: 'relative' }}
//       >
//         Width: {width}px
//         <div
//           className="resizer"
//           onMouseDown={handleMouseDown}
//           style={{ width: '10px', height: '100%', backgroundColor: 'darkblue', position: 'absolute', right: '0', top: '0', cursor: 'ew-resize' }}
//         />
//       </div>
//     </div>
//   );
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);


