import React from 'react';

interface CustomComponent {
  headerText: string;
  paragraphText: string;
}

const CustomComponent: React.FC<CustomComponent> = ({ headerText, paragraphText }) => {
  return (
    <div>
      <h1>{headerText}</h1>
      <p>{paragraphText}</p>
    </div>
  );
};

export default CustomComponent;
