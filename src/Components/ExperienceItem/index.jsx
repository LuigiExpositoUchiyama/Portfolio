import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

/* CSS */
import experience from '../../Routes/Experiences/Experience.module.css';
import geral from '../../App.module.css';

const ExperienceItem = ({ imgSrc, altText, role, period, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      className={`${experience.experience} ${
        isOpen ? experience.expanded : ''
      }`}
    >
      <div
        className={experience.detalhes}
        onClick={toggleDetails}
        style={{ cursor: 'pointer' }}
      >
        <img src={imgSrc} alt={altText} />
        <div>
          <p>{role}</p>
          <p>{period}</p>
        </div>
        {isOpen ? (
          <FaChevronUp className={experience.icon} />
        ) : (
          <FaChevronDown className={experience.icon} />
        )}
      </div>
      <div
        className={`${experience.descricao} ${isOpen ? experience.show : ''}`}
      >
        {details.map((detail, index) => (
          <p key={index}>
            <span className={geral.cor2}>{detail.title}:</span>
            {detail.description}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ExperienceItem;
