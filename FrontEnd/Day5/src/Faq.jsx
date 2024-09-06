import  { useState } from 'react';
import './faq.css';
import Navbar from './NavBar';
import Footer from './Footer';

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <Navbar/>
            <div className='md:flex items-center mb-12 px-6'>
                <div className="header-details md:w-3/5 tracking-wider">
                    <h1 className='text-3xl md:text-5xl w-auto md:w-5/6'>
                        Frequently Asked Questions
                    </h1>
                    <div className="faq-list mt-6">
                        {faqData.map((item, index) => (
                            <div className="faq-item" key={index}>
                                <div className="question-container" onClick={() => toggleAccordion(index)}>
                                    <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                                    <span className="plus">{openIndex === index ? '-' : '+'}</span>
                                </div>
                                {openIndex === index && (
                                    <p className="text-gray-700">{item.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

const faqData = [
    {
        question: 'How do I create an account?',
        answer: 'To create an account, simply click on the "Sign Up" button at the top right corner of the page and follow the instructions.'
    },
    {
        question: 'How do I apply for a job?',
        answer: 'To apply for a job, navigate to the job listing, click on the job title, and follow the application instructions provided by the employer.'
    },
    {
        question: 'Can I update my resume?',
        answer: 'Yes, you can update your resume at any time by logging into your account and accessing the profile settings.'
    }

];

export default FAQPage;
