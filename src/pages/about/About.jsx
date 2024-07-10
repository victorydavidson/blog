// About.jsx
import React from 'react';
import "./about.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src="https://images.pexels.com/photos/5490266/pexels-photo-5490266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Artist" />
      </div>
      <div className="about-text-container">
        <h2>About Me</h2>
        <div className="about-text">
          <p>
            Welcome to my blog! I'm Alex Johnson, an aspiring artist based in the heart of London.
            Art has been my passion since childhood, and I've dedicated my life to exploring its endless possibilities.
            Growing up surrounded by the rich history and vibrant culture of London, I've drawn inspiration from its bustling streets, iconic landmarks, and diverse communities. 
            Each painting I create is a reflection of my unique perspective and experiences, infused with a sense of wonder and curiosity.
          </p>
          <p>
            My artistic journey has taken me on many adventures, from exploring hidden alleyways to capturing the majestic beauty of the countryside. 
            I'm constantly experimenting with different techniques and styles, pushing the boundaries of my creativity with every stroke of the brush. 
            Through my art, I strive to evoke emotions, spark conversations, and inspire others to see the world in new ways. 
            Whether it's a bold cityscape or a tranquil landscape, each piece tells a story and invites viewers to embark on a journey of imagination and discovery.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default About;
