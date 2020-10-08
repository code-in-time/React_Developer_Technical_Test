import React from 'react';

interface IProps {
  className: string;
  children: any;
  }

const Template1: React.FC<IProps> = (props) => {
  return (
    <div className={`Template1 ${props.className}`}>
      <h1>Doggy McDogface</h1>
      {props.children}
    </div>
  );
}

export default Template1;