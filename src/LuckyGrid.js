import React, { useState, useRef } from 'react'
import {LuckyGrid } from '@lucky-canvas/react'


export default function AppLuckyGrid() {
  const [blocks] = useState([
  ])

  const [annouchWinItem, setAnnouchWinItem] = useState(false);
  const [prizeItem, setPrizeItem] = useState(null);

  const winnerView = () => {
    return <div style={{
      opacity: !annouchWinItem ? "0" : "1",
      transition: "all .2s", backgroundColor: "pink", borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', width: "100%", height: "100%", flexDirection: 'column'
    }}>
      {prizeItem && <img src={prizeItem.src} alt="Prize" width={350} height={350} />}
      <button style={{
        backgroundColor: "#fff", color: "#000", padding: "15px 32px",
        textAlign: 'center',
        textDecoration: "none",
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        borderRadius: 20,
        border: 'none',
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
      }} onClick={() => {
        setPrizeItem(null);
        setAnnouchWinItem(null);
      }}>Thank You for visiting us</button>
    </div>
  }
  const prizeImgHat = {
    src: require('./asserts/prize-hat.png'),
    width: '180px',
    height: '180px',
  };

  const prizeImgMask = {
    src: require('./asserts/prize-mask.png'),
    width: '180px',
    height: '180px',
    range: 10,
  };

  const prizeImgShoes = {
    src: require('./asserts/prize-shoes.png'),
    width: '180px',
    height: '180px',
  }

  const prizeImgTiger = {
    src: require('./asserts/prize-tiger.png'),
    width: '180px',
    height: '180px',
  };

  const prizeImgTshirt = {
    src: require('./asserts/prize-tshirt.png'),
    width: '180px',
    height: '180px',
  };

  const prizeImgWristband = {
    src: require('./asserts/prize-wristband.png'),
    width: '180px',
    height: '180px',
  };

  const prizeImgThankYou = {
    src: require('./asserts/prize-thankyou.png'),
    width: '180px',
    height: '180px',
  };

  const prizeImgTryAgain = {
    src: require('./asserts/prize-try-again.png'),
    width: '180px',
    height: '180px',
  };


  const [prizes] = useState([
    { x: 0, y: 0, imgs: [prizeImgHat], range: 0 },
    { x: 1, y: 0, imgs: [prizeImgMask], range: 0 },
    { x: 2, y: 0, imgs: [prizeImgShoes], range: 1 },
    { x: 2, y: 1, imgs: [prizeImgTiger] , range: 4 },
    { x: 2, y: 2, imgs: [prizeImgTshirt] , range: 0 },
    { x: 1, y: 2, imgs: [prizeImgThankYou] , range: 40},
    { x: 0, y: 2, imgs: [prizeImgWristband], range: 40 },
    { x: 0, y: 1, imgs: [prizeImgTryAgain], range: 50 },
  ])
  const [buttons] = useState([
    {
      x: 1, y: 1,
      background: 'rgba(0,0,0,0)',
      imgs: [{
        x: 1, y: 1,
        src: require('./asserts/button.png'),
        width: '200px',
        height: '200px',
        background: '#b8c5f2',
        fonts: [{ text: '开始', top: '25%' }],
      }],
    },
  ])


  const myLucky = useRef()
  return <div style={{
    width: "580px",
    height: "560px", alignItems: 'center', justifyItems: 'center',
  }}>
    {!annouchWinItem ? <LuckyGrid
      ref={myLucky}
      width="580px"
      height="560px"
      blocks={blocks}
      prizes={prizes}
      buttons={buttons}

      defaultStyle={{
        background: '#b8c5f2'
      }}
      onStart={() => {
        myLucky.current.play()
        setTimeout(() => {
          myLucky.current.stop()
        }, 2500)
      }}
      onEnd={prize => {
        
        setTimeout(function () {
          setAnnouchWinItem(true);
          setPrizeItem(prize.imgs[0]);
        }, 800);

        
        
      }}
    /> : winnerView()}

  </div>
}