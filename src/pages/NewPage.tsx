import React from 'react';
import CustomComponent from 'component/header';
const NewPage: React.FC = () => {
  return (
    <div>
        <CustomComponent
        headerText="Custom Header Text"
        paragraphText="This is a custom paragraph."
      />
    </div>
  );
};

export default NewPage;
