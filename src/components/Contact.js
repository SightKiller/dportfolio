import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('dhanushs_portfolio_2209', 'port_2209', form.current, 'ZFpXxVm6oln50J9A5')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });
    e.target.reset();  // Reset form after submission
  };

  return (
    <section id='contact'>
        <div className="bg-primary min-h-screen flex items-center justify-center p-5">
            <div className="max-w-md w-full">
            <h1 className="projects-title text-white ease-in-out fade-Out"><span className='main'>Contact</span> Me!</h1>
                <motion.form
                ref={form}
                onSubmit={sendEmail}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
                >
                <motion.div whileHover={{ scale: 1.05 }}>
                    <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    className="w-full p-2 text-gray-800"
                    required
                    />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="w-full p-2 text-gray-800"
                    required
                    />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full p-2 text-gray-800"
                    rows="4"
                    required
                    ></textarea>
                </motion.div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    Send Message
                </motion.button>
                </motion.form>
            </div>
        </div>
    </section>
    
  );
};

export default Contact;
