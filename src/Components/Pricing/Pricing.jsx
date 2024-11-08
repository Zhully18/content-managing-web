import React from 'react';
import './Pricing.css';

const pricingPlans = [
  {
    name: "Basic",
    price: "$10.90",
    duration: "month",
    description: "Great Content, Limited Time",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
      "Feature 5",
      "Feature 6",
      "Feature 7"
    ]
  },
  {
    name: "Standard",
    price: "$40.99",
    duration: "month",
    description: "Great Content, Limited Time",
    features: [
      "Feature A",
      "Feature B",
      "Feature C",
      "Feature D",
      "Feature E",
      "Feature F",
      "Feature G"
    ]
  },
  {
    name: "Premium",
    price: "$60.99",
    duration: "month",
    description: "Great Content, Limited Time",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
      "Feature 5",
      "Feature 6",
      "Feature 7"
    ]
  }
];

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h2 className="pricing-title f-size font">Pricing Plans</h2>
      <p className="pricing-subtitle">
        Get all you need with these affordable plans tailored to suit your needs.
      </p>
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-price">{plan.price} <span>/{plan.duration}</span></p>
            <p className="plan-description">{plan.description}</p>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="plan-button">Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
