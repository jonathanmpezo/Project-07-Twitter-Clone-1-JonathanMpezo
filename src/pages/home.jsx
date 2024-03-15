import React from 'react';
import Header from '../components/header.jsx';
import Editor from '../components/editor.jsx';

import Place from '../components/place.jsx';
import Phase from '../components/phase.jsx';
import Time from '../components/time.jsx';
import Affiche from '../components/affiche.jsx';
import Image from '../components/image.jsx';
import Lune from'../components/lune.jsx';
  




// import Button from  '../components/button.jsx';




function Home() {
  return (
    <main className="timeline">
      <Header />
      <Editor />
      <Place />
      <Phase />
      <Time />
      <Affiche />
      <Image />
      <Lune/>





      {/* <Button/> */}

    </main>
  );
}

export default Home;

