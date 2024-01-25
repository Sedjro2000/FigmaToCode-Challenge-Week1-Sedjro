import React from 'react';

const ButtonAppointement = ({ bgColor, imageSrc, textColor }) => {
  const buttonStyle = `${bgColor} rounded-full p-4 inline-flex items-start box-border relative mt-2`;
  const imageStyle = 'h-6 w-6';
  const textStyle = `text-${textColor} font-sora-semibold text-lg font-semibold`;

  return (
    <button className={buttonStyle}>
      <div className="inline-flex items-start gap-2">
        <img className={imageStyle} alt="Icon" src={imageSrc} />
        <div className={textStyle}>
          Book an appointment
        </div>
      </div>
    </button>
  );
};

export default ButtonAppointement;
