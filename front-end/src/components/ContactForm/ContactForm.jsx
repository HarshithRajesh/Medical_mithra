import styles from './ContactForm.module.css'
import Button from "../Button/Button"
import { message, telephone, Mail, ContactService } from "../../images"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    
    const onSubmit = (event) => {
        event.preventDefault();
        toast.success('Submited successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
      };
      


    return <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button text="Via Chat Support" image={<img src={message} />} />
                <Button text="Via Call" image={<img src={telephone} />} />
            </div>
            <Button isOutline={true} text="Via eMail" image={<img src={Mail} />} />
            <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce} 
/>
            <form onSubmit={onSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor="Name">Name</label>
                    <input required placeholder='Enter your full name' type="text" name="Name" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email">Email</label>
                    <input required placeholder='Enter your valid Email' type="email" name="email" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="number">Contact Number</label>
                    <input placeholder='Enter your number' type="tel" name="number" />
                </div>
                <div className={styles.form_control}>
                    <label required htmlFor="message">Message</label>
                    <textarea rows={4} placeholder='Message' name="message" />
                </div>
                <div className={styles.form_control_check}>
                    <input required type="checkbox" name="check" />
                    <label htmlFor="chec"> I authorize Medical Mentor to contact me via email, SMS & voice call.</label>
                </div>
                <div style={{
                    display: 'flex', justifyContent: 'left', padding: '0 12%'
                }}>
                    <Button  text="SUBMIT" /></div>
            </form>
        </div>
        <div className={styles.contact_image}>
            <img src={ContactService} width={608} height={615} /> 
            
        </div>
        
    </section>
}

export default ContactForm