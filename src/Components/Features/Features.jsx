// Features.jsx
import React from 'react';
import { FaShippingFast, FaRegStar, FaRegCheckCircle } from 'react-icons/fa';
import './Features.css';
import { FcDocument, FcIdea, FcPositiveDynamic, FcSynchronize } from 'react-icons/fc';

const Features = () => {
  return (
    <div className="features">
      <h2 className='font'>Our Working Process</h2>
      <p className="description">
        Our Process From Concept to Content Success
      </p>

      <div className="cards-container">
        {/* Best Quality Card */}
        <div className="card">
          <FcIdea className="icon" />
          <h3>Discovery & Strategy</h3>
          <p>We start by getting to know your brand, goals, and audience. Through in-depth discussions and research, we build a tailored content strategy that aligns with your vision and targets measurable outcomes</p>
        </div>

        {/* Free Shipping Card */}
        <div className="card">
          <FcDocument className="icon" />
          <h3>Content Creation</h3>
          <p>Once we have a plan, our creative team goes to work. From drafting engaging articles and social media posts to designing visuals, we create quality content that resonates with your audience and your brand’s voice</p>
        </div>

        {/* Warranty Card */}
        <div className="card">
          <FcPositiveDynamic className="icon" />
          <h3>Review & Optimization</h3>
          <p>Content performance matters. We continuously review, measure, and refine your content to ensure it’s driving results. Through analytics and feedback, we make adjustments to maximize engagement and conversion.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
