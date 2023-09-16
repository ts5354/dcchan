// App.tsx

import React, { useState,useEffect } from 'react';
import GJW from "./illust_ex.gif"

import PG from "./pg_ex.gif"
import DCC from "./info.gif";
import './App.css';
import IE from "./internet_nft_art.png";
import PG_img from "./IMG_0149.jpg"
import useSound,{ useSound as playSound }from 'use-sound';
import dc_info from "./dc_info.mp3";
import illust_ex from "./illust_ex.wav";
import gift from "./gift.wav";
import pg from "./pg.wav";
import finger from "./icon_finger.png";
import Gift_img from "./IMG_0150.jpg";
import Ex_img from "./IMG_0152.jpg";
interface ModalProps {
  show1: boolean;
  setShow1: React.Dispatch<React.SetStateAction<boolean>>;
  Img1: string;
  setImg1: React.Dispatch<React.SetStateAction<string>>;
  p: string;
  Bg:string;
  setBg: React.Dispatch<React.SetStateAction<string>>;
}
 function  Modal ({show1,setShow1,p,Img1,setImg1,Bg,setBg}:ModalProps) {
  const [play1] = useSound(dc_info);
  if (show1){
  return (
      <div>
          <div id="overlay">
          <div id="content">
          <img src={Bg} className="ie" />
          <p dangerouslySetInnerHTML={{ __html: p }}></p>
          <p>
          <button onClick={() => 
          {
            setShow1(false);
            setImg1(DCC);
            
            play1();
          }}>close</button></p>
          </div>
      </div>
      </div>
  );
  }else {
  return null;
  } 
}

function App() {
  
  const [show, setShow] = useState(false)
  const [pText, setPText] = useState("EEE");
  const [Img1, setImg1] = useState(DCC);
  const [Bg, setBg] = useState("");
  const [play1] = useSound(dc_info);
  const [play2] = useSound(illust_ex);
  const [play3] = useSound(gift);
  const [play4] = useSound(pg);
  const changePText = (newText:string) => {
    setPText(newText);
  };
  useEffect(() => {
    // 初回のみ実行
    play1();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      
      if (!show) {
        play1();
        console.log("voice");
      }
    }, 60000);

    return () => clearInterval(interval); // コンポーネントがアンマウントされるときにクリア
  }, [show,play1]);

  return (
    <div className="App">
      <img src={Img1} alt="でじこんちゃん" className='dcchan' />
      
      <div id="container">
      <button className="btn btn-gradient" onClick={
        () =>{

        setShow(true);
        changePText("<span><h1>イラスト展示</h1><br/><br/>イラスト展示では<br/>イラスト班のみんなの「花」についての<br>テーマイラストを展示しているよ！<br/>お高そうな額縁でおしゃれでしょ！</span>");
        setImg1(GJW);
        setBg(Ex_img);
        play2();
        }}
        >
        <span>イラスト展示</span>
      </button>
      <button className="btn btn-gradient" onClick={() => {
        setShow(true);
        changePText("<span><h1>グッズ</h1><br/><br/>グッズでは<br/>デジコンのオリジナルの<br>グッズを販売しているよ！<br/>え！？無料では上げられないよ〜！</span>");
        setImg1(GJW);
        setBg(Gift_img);
        play3();
      }}
      >
         <span>グッズ</span>
      </button>
      <button className="btn btn-gradient" onClick={() => {
        setShow(true);
        changePText("<span><h1>プログラミング展示</h1><br/><br/>プログラミング展示では<br/>プログラミング班のみんなが作った<br>ゲームなどを展示しているよ！<br/>パソコン壊さないでね（ ;  ; ）</span>");
        setImg1(PG);
        setBg(PG_img);
        play4();
      }}>
        <span>プログラミング展示</span>
      </button>
      <Modal show1={show} setShow1={setShow} p={pText} Img1={Img1} setImg1={setImg1} Bg={Bg} setBg={setBg}/>
      <div className='howto'>
      <img src={finger} alt="指" className='finger'/>
      <p className="push">みたいページを押してね！</p>
      </div>
      </div>
    </div>
  );
}

export default App;
