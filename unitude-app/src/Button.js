import React from 'react';

const Button = (props) => {
  return(
    <div className="grow ba bg-light-blue br3 ma2 pa2 shadow-1">
      <div className="tc">
        {props.buttonDesc}
      </div>
    </div>
  );
}

export default Button;
