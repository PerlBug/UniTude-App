import React from 'react';
import Button from './Button';
import './Home.css';

const Home = ({onRouteChange}) => {
    return(
      <div className="button-box">
        <div className="mw9 center ph3-ns">
          <div className="cf ph2-ns">
            <div className="fl w-100 pa2 tc">
              <div className="b">UniTude</div>
              <div>Find a tutor on campus</div>
            </div>
            <div onClick={() => onRouteChange('uniselect')} className="fl w-100 w-50-ns pa2">
              <Button  buttonDesc="I am a Student"/>
            </div>
            <div onClick={() => onRouteChange('tutorsignup')} className="fl w-100 w-50-ns pa2">
              <Button buttonDesc="I am a Tutor"/>
            </div>
          </div>
        </div>
      </div>
    );

}

export default Home;
