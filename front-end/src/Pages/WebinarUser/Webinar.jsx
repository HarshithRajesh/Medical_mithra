import React,{useEffect} from 'react'
import "./Webinar.css"
import NavBar from '../../components/NavBar/NavBar'

const Webinar = () => {
  useEffect(()=>{
    window.scroll(0,0);
  },[])
  return (
    <><div className="wrapper"><NavBar />
    <div>Webinar</div>
    </div></>
  )
}

export default Webinar