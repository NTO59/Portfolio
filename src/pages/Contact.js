import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import CopyToClipboard from 'react-copy-to-clipboard';
import SocialNetwork from '../components/SocialNetwork';
import ButtonBottom from '../components/ButtonBottom';
import ContactForm from '../components/ContactForm';
import { motion } from "framer-motion";




const Contact = () => {

    const variants = {
        in: {
            opacity: 1,
            x: 0,
        },
    
        out:{
            opacity: 0,   
            x: 300
        }
    }
    const transition = {
        ease: [0.03, 0.87, 0.73, 0.9],
        duration: 0.6
    }
    return (
        <main>
            <Mouse />
            <motion.div 
            className="contact"
            exit="out"
            animate="in"
            initial="out"
            variants={variants}
            transition={transition}
            >
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>Adresse</h4>
                            <p>Rue E.Flament</p>
                            <p>59610 Fourmies</p>
                        </div>
                    </div>

                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard text='06.71.69.70.55' className="hover">
                                <p style={{ cursor: 'pointer' }}
                                    className='clipboard' onClick={() => {
                                        alert('Téléphone copié !')
                                    }}>06.71.69.70.55</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text='Nicolas.touzard59@gmail.com' className="hover">
                                <p style={{ cursor: 'pointer' }}
                                    className='clipboard' onClick={() => {
                                        alert('Email copié !')
                                    }}>Nicolas.touzard59@gmail.com</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork/>
                    <div class="credits">
                        <p>NTO - 2021</p>
                    </div>
                </div>
                <ButtonBottom left={'/project-3'} />
            </motion.div>
        </main>

    );
};
export default Contact;