import React, { useState } from "react";
import ImgAbout from "./img/logo.png";
import {
    BennerStyle, ButtonStyle, BennerText,
    AboutStyle, AboutImg, AboutHeading, AboutText,
    TestiStyle, TestiForm
} from "./StyleBody";

const Body = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [inputAuthor, setInputAuthor] = useState('');
    const [inputText, setInputText] = useState('');

    const handleAuthorChange = (e) => {
        setInputAuthor(e.target.value);
    };

    const handleTextChange = (e) => {
        setInputText(e.target.value);
    };

    const addTestimonial = () => {
        if (inputAuthor.trim() !== '' && inputText.trim() !== '') {
            const newTestimonial = {
                author: inputAuthor,
                text: inputText,
            };
            setTestimonials([...testimonials, newTestimonial]);
            setInputAuthor('');
            setInputText('');
        }
    };

    const deleteTestimonial = (index) => {
        const updatedTestimonials = testimonials.filter((_, i) => i !== index);
        setTestimonials(updatedTestimonials);
    };

    const [pesan, setPesan] = useState("Pesan dariku :");

    const handleReactClik = () =>{
        window.location.href = 'https://react.dev/';
    }

    const handleDashboardClick = () => {
        window.location.href = 'https://react.dev/learn';
    }

    return (
        <body>
            <BennerStyle>
                <BennerText>
                    <h3>The library for web and native user interfaces</h3>
                    <ButtonStyle onClick={handleReactClik}>Reactjs</ButtonStyle>
                </BennerText>
            </BennerStyle>
            <AboutStyle>
                <AboutImg>
                    <img src={ImgAbout} style={{height: "300px", width: "300px"}} alt="About" />
                </AboutImg>
                <AboutText>
                    <AboutHeading>ReactJS</AboutHeading>
                    <p>Learn React Once and Write Everywhere</p>
                    <ButtonStyle onClick={handleDashboardClick}>Dashboard</ButtonStyle>
                </AboutText>
            </AboutStyle>

            <section>
                <div>
                    <TestiForm>
                        <h1>Testimonial App</h1>
                        <label htmlFor="nama">Nama:</label>
                        <input
                            type="text"
                            placeholder="Enter author..."
                            value={inputAuthor}
                            onChange={handleAuthorChange}
                        />
                        
                        <label htmlFor="pesan">Pesan:</label>
                        <textarea
                            placeholder="Enter testimonial..."
                            value={inputText}
                            onChange={handleTextChange}
                        />
                        <ButtonStyle onClick={addTestimonial}>Add testimonial</ButtonStyle>
                    </TestiForm>

                    <TestiStyle className="testimonial-list">
                        {testimonials.map((testimonial, index) => (
                            <div className="box" key={index}>
                                <h2 className="card-title">{testimonial.author}</h2>
                                <p className="card-text">{testimonial.text}</p>
                                <button class="btn btn-info" onClick={() => deleteTestimonial(index)}>Delete</button>
                            </div>
                        ))}
                    </TestiStyle>
                </div>
            </section>
        </body>
    );
}
export default Body;
