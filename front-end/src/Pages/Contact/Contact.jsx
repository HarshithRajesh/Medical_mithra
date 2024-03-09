import React, {useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./Contact.css"
import Grid from '@mui/material/Grid';
import { Contacting, Logo } from "../../images"
import Paper from '@mui/material/Paper';
import ContactForm from '../../components/ContactForm/ContactForm';


const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, [])


  return <div className="Spacing">

    <h2>Feel Free to Contact Us </h2>
    <div className="wrapper">
      <NavBar /></div>
    <br />
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} lg={6}>
        <Paper p={2} elevation={0}>
          <div className="content">
            <img src={Contacting} width={400} />
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <Paper p={2} elevation={0}>
          <div className="content1">
            <p>Hey there! <br />Feeling stressed about college applications or that medical/engineering entrance exam? We get it!  That's why Career Shapers is here for you (and your kiddo!).
              Think of us as your college and career BFFs.  We'll guide you through the whole process with a smile, making it feel way less overwhelming.  We're experts, but also super approachable, so you can ask us anything!? <br /> Ready to ditch the stress and join our supportive fam?  Let's chat!</p>
          </div>
        </Paper>
      </Grid>
    </Grid>
    <br />
    <ContactForm />
    
      <h2>We're here for you, Please drop us a message and our team will get in touch with you within 24 hours.</h2>
      <br /><br /><br />
    <div className="content">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7773.72543395877!2d77.54381228917927!3d13.04440917005253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dab52b44921%3A0xb20207a4d88820b!2sHappy%20Finserve!5e0!3m2!1sen!2sin!4v1709903488274!5m2!1sen!2sin" width="600" height="450" style={{ border: 10 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <br /></div>
  </div>
}

export default Contact