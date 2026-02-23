import React from 'react';
import { User, AtSign, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

import Footer from './Footer';

const InfoCard = ({ title, items, index }) => (
    <motion.div
        className="contact-info-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        {items.map((item, index) => (
            <div className="info-item" key={index}>
                <span className="info-label">{item.label}:</span>
                <span className="info-value">{item.value}</span>
            </div>
        ))}
    </motion.div>
);

const Contact = () => {
    const contactInfo = [
        {
            items: [
                { label: 'Country', value: 'India' },
                { label: 'State', value: 'Tamil Nadu' },
                { label: 'City', value: 'Coimbatore' },
            ],
        },
        {
            items: [
                { label: 'Email', value: 'ezhilgunasekaren05@gmail.com' },
                { label: 'Instagram', value: '__josh._._7' },
                { label: 'Linked-In', value: 'Ezhil G' },
            ],
        },
        {
            items: [
                { label: 'Personal', value: '+91 63791 99043' }
            ],
        },
    ];

    return (
        <div className="contact-section">
            <motion.h2
                className="page-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                CONTACT
            </motion.h2>

            <motion.div
                className="contact-top-header"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h3 className="sub-section-title">Contact Information</h3>
            </motion.div>

            <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                    <InfoCard key={index} index={index} items={info.items} />
                ))}
            </div>

            <motion.div
                className="contact-form-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="sub-section-title">Get in Touch</h3>
                <div className="form-card">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group">
                            <div className="input-icon">
                                <User size={18} />
                            </div>
                            <input type="text" placeholder="Name" />
                        </div>

                        <div className="input-group">
                            <div className="input-icon">
                                <AtSign size={18} />
                            </div>
                            <input type="email" placeholder="Email" />
                        </div>

                        <div className="input-group">
                            <div className="input-icon textarea-icon">
                                <Mail size={18} />
                            </div>
                            <textarea placeholder="Message" rows="5"></textarea>
                        </div>

                        <button type="submit" className="send-btn">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </motion.div>

            <Footer />
        </div>
    );
};

export default Contact;
