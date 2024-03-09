import React,{useEffect} from 'react'
import "./Webinar.css"
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../Footer/Footer'

const Webinar = () => {
  useEffect(()=>{
    window.scroll(0,0);
  },[])
  return (
    <><div className="wrapper"><NavBar />
    <div>Webinar</div>
    </div>
    <Footer/>
    </>
  )
}

export default Webinar