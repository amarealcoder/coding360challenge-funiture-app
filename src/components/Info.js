import './Info.css';
import React from 'react';
import { Button } from './Button';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaKey, FaPaypal, FaLightbulb } from 'react-icons/fa';

const Info = ({ text, icon }) => {
  return (
    <section className='info-container'>
      <div className='info-btn'>
        <Button icon={<AiOutlineDownload size={25}/>} text={'Download The App'} />
      </div>
      <div className='info-content'>
        <div className='info-box'>
          <div className='info-icons'>
            <FaKey size={30}/>
          </div>
          <h3>Safe</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil
            facilis?
          </p>
        </div>

        <div className='info-box'>
          <div className='info-icons'>
            <FaPaypal size={30}/>
          </div>
          <h3>Easy Payments</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil
            facilis?
          </p>
        </div>

        <div className='info-box'>
          <div className='info-icons'>
            <FaLightbulb size={30}/>
          </div>
          <h3>Anytime</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil
            facilis?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
