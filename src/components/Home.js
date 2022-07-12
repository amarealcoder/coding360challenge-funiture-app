import './Home.css';

import couch from '../images/couch.png';
import appImage from '../images/app.svg';

const Home = () => {
  return (
    <section>
      <div className='intro-box'></div>

      <div className='intro-img1'>
        <img className='couch' src={couch} alt='army green couch' />
      </div>
      <div className='intro-img2'>
        <img className='appImage' src={appImage} alt='app screen' />
      </div>
    </section>
  );
};

export default Home;
