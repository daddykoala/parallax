import './App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'




function App() {
  return (
    <div className="App">
      coucou
    <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
      <ParallaxLayer offset={0} speed={2.5}>
        <div className='animation-layer parallax' id='artback'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={2.5}>
        <div className='animation-layer parallax' id='mountain'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={2.5}>
        <div className='animation-layer parallax' id='logoland'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={2.5}>
        <div className='animation-layer parallax' id='jungle1'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={2.5}>
        <div className='animation-layer parallax' id='jungle2'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={2.5}>
        <div className='animation-layer parallax' id='jungle3'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={2.5}>
        <div className='animation-layer parallax' id='jungle4'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={2.5}>
        <div className='animation-layer parallax' id='manonmountain'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={2.5}>
        <div className='animation-layer parallax' id='jungle5'></div>
      </ParallaxLayer>
    </Parallax>
    </div>
  );
}

export default App;

