import React, { useState } from 'react';
// import testimonialsData from './testimonialsData';
import './Testimonials.css';
// import lady from '../../assets/laddy1.jpg'
import lady2 from '../../assets/ladyy.jpg'
// import { BiComment } from 'react-icons/bi';
import { RiDoubleQuotesL } from 'react-icons/ri';
import man1 from "../../assets/man2.jpg"
import man2 from "../../assets/man3.jpg"

const Testimonials = () => {

    const testimonialsData = [
        {
          id: 1,
          name: "Harrell Steward",
          title: "Tech Analyst",
          comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
          image: lady2 // Replace with actual image paths
        },
        {
          id: 2,
          name: "Jane Doe",
          title: "UX Designer",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis viverra ligula, ac faucibus orci luctus et.",
          image: man1
        },
        {
          id: 3,
          name: "John Smith",
          title: "Software Engineer",
          comment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
          image: man2
        },
        // Add more testimonials as needed
      ];
      
  const [activeTestimonial, setActiveTestimonial] = useState(testimonialsData[0]);

  const handleTestimonialClick = (testimonial) => {
    setActiveTestimonial(testimonial);
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title f-size font">What Our Clients are Saying</h2>
      <p className="testimonials-subtitle">
        Discover what our students have to say about their learning experience.
      </p>
      
      <div className="testimonials-content">
        {/* Comment Box */}
        <div className="comment-box">
          <img src={activeTestimonial.image} alt={activeTestimonial.name} className="active-avatar" />
          <RiDoubleQuotesL className='comment-icon'/>
          <p className="comment-text">{activeTestimonial.comment}</p>
          <p className="comment-author">{activeTestimonial.name}</p>
          <p className="comment-title">{activeTestimonial.title}</p>
        </div>

        {/* User Avatars */}
        <div className="avatar-gallery">
          {testimonialsData.map((testimonial) => (
            <img 
              key={testimonial.id} 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="avatar" 
              onClick={() => handleTestimonialClick(testimonial)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
