import React from 'react'
import Header from '../../Component/Header/Header'
import Background from '../../Component/Background/Backgroud'
import TopGame from '../../Component/Slider/TopGame'
import Footer from '../../Component/Footer/Footer'
import Group from '../../Component/Slider/Group'
import About from '../../Component/Slider/About'
function Home() {
  return (
    <div>
      <Header />
      <Background />
      <TopGame/>
      <About/>
      <Group/>
      <Footer/>
    </div>
  );
}

export default Home
