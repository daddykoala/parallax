import './App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'




function App() {
  return (
    <div className="App">
      <div>normale</div>

    <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
      <ParallaxLayer offset={0} speed={0.01}>
        <div className='animation-layer parallax' id="artback"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.1}>
        <div className='animation-layer parallax' id='mountain'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.2}>
        <div className='animation-layer parallax' id='logoland'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.23}>
        <div className='animation-layer parallax' id='jungle1'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.30}>
        <div className='animation-layer parallax' id='jungle2'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35}>
        <div className='animation-layer parallax' id='jungle3'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <div className='animation-layer parallax' id='jungle4'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.45}>
        <div className='animation-layer parallax' id='manonmountain'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <div className='animation-layer parallax' id='jungle5'></div>
      </ParallaxLayer>
    </Parallax>
    </div>
  );
}

export default App;

