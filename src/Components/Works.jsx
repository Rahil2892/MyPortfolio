import React from 'react';
import { useState } from 'react'
import portfolio_img from "../Img/porfolio_img.png"
import QuizR_img from "../Img/QuizR_img.png"
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import './Works.css'
import "./CircleAnimation.css";

const Works = () => {
  const data = [
    {
        name: 'Portfolio',
        id: 0,
        img_src: portfolio_img,
        src_code:'https://github.com/AvishYadav/testingapp',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, fugit asperiores ipsam alias, laborum laudantium vel natus quibusdam rem totam repudiandae pariatur rerum sint error dignissimos ullam eum minima enim odit. Hic ratione vitae, ex cupiditate aliquid eligendi natus autem quo nesciunt recusandae illo suscipit, et sit! Doloremque est ab, minus dolore voluptatum corporis optio alias numquam iste esse, reprehenderit velit error commodi atque!         Best coding IDE to ever exist,comes with tons of customization',
        tech:"HTML , CSS , ReactJS, ",
    },
    {
      name: 'QuizR',
      id: 1,
      img_src: QuizR_img,
      src_code:'https://github.com/Rahil2892/QuizR',
      text: 'Best coding IDE to ever exist,comes with tons of customization       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, unde cumque. Culpa laborum debitis et nobis expedita distinctio inventore, officiis adipisci nemo eum doloremque sapiente natus praesentium tempore corporis nam ducimus iste.      ',
      tech:"HTML , CSS , ReactJS , MongoDB , NodeJS , TailwindCSS , ",
    },
    {
      name: 'Portfolio',
      id: 2,
      img_src: portfolio_img,
      src_code:'https://github.com/AvishYadav/testingapp',
      text: 'Best coding IDE to ever exist,comes with tons of customization',
      tech:"HTML , CSS , ReactJS, ",
    },
    {
      name: 'Portfolio',
      id: 3,
      img_src: QuizR_img,
      src_code:'https://github.com/Rahil2892/QuizR',
      text: 'Best coding IDE to ever exist,comes with tons of customization',
      tech:"HTML , CSS , ReactJS, ",
    },
    {
      name: 'Portfolio',
      id: 4,
      img_src: portfolio_img,
      src_code:'https://github.com/AvishYadav/testingapp',
      text: 'Best coding IDE to ever exist,comes with tons of customization',
      tech:"HTML , CSS , ReactJS, ",
    },
    {
      name: 'Portfolio',
      id: 5,
      img_src: QuizR_img,
      src_code:'https://github.com/Rahil2892/QuizR',
      text: 'Best coding IDE to ever exist,comes with tons of customization',
      tech:"HTML , CSS , ReactJS, ",
    },
    {
      name: 'Portfolio',
      id: 6,
      img_src: portfolio_img,
      src_code:'https://github.com/AvishYadav/testingapp',
      text: 'Best coding IDE to ever exist,comes with tons of customization',
      tech:"HTML , CSS , ReactJS, ",
    },
];
const [idNumber, setIdNumber] = useState(0);

const rightArrow = () => {
    if (idNumber + 1 >= data.length) {
        setIdNumber(0);
    } else {
        setIdNumber(idNumber + 1);
    }
};
const leftArrow = () => {
    if (idNumber === 0) {
        setIdNumber(data.length - 1);
    } else {
        setIdNumber(idNumber - 1);
    }
};
  return (
  <div className='work'>
    <div id='work_header'><h1>My Recent Work</h1></div>
    <div className="work_container">
      <div className="left_arrow"><button onClick={leftArrow}><IoIosArrowBack/></button></div>
      <div className="work_card">
        <div className="work_img"><img src={data[idNumber].img_src} alt="wrk_image" /></div>
        <div className="work_desc_card">
          <div className="work_desc">
            <h2>{data[idNumber].name}</h2>
            <b>Tech:</b>
            <i>{data[idNumber].tech}</i>
            <p>{data[idNumber].text}</p>  
          </div>
          <a href={data[idNumber].src_code}>Source Code</a>
        </div>
      </div>
      <div className="right_arrow"><button onClick={rightArrow}><IoIosArrowForward/></button></div>
    </div>
    </div>
    
  )
}
export default Works