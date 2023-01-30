import React from 'react'
import { useState } from 'react'
import ToolCard from './ToolCard.jsx';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
// import './CircleAnimation.css'
import './Tools.css'

const Tools = () => {
  const data = [
    {
        name: 'Vs Code',
        id: 0,
        img_src: "https://img.icons8.com/color/512/visual-studio-code-2019.png",
        alt:'vs_img',
        text: 'Best coding IDE to ever exist,comes with tons of customization',
    },
    {
        name: 'Discord',
        id: 1,
        img_src: "https://img.icons8.com/color/512/discord-logo.png",
        alt:'discord_img',
        text: 'Discord ultimate hangout spot, home to many bots such as midjourney ',
    },
    {
        name: 'Github',
        id: 2,
        img_src: "https://img.icons8.com/ios-glyphs/512/github.png",
        alt:'github_img',
        text: `A developer's go-to platform for collaborating and showcasing their code`,
    },
    {
        name: 'Figma',
        id: 3,
        img_src: "https://img.icons8.com/color/512/figma.png",
        alt:'figma_img',
        text: 'A boon for webapp designers, from wireframe to animation, it has it all ',
    },
    {
        name: 'Notion',
        id: 4,
        img_src: "https://img.icons8.com/material-outlined/512/notion.png",
        alt:'notion_img',
        text: 'The most used, well designed, versatile and professional productivity app',
    },
    {
        name: 'MongoDB',
        id: 5,
        img_src: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png",
        alt:'mongoDB_img',
        text: 'A scalable and reliable No-SQL database solution for professional use',
    },
    {
        name: 'Canva',
        id: 6,
        img_src: "https://img.icons8.com/fluency/512/canva-app.png",
        alt:'canva_img',
        text: ' Free and with ton of templates, a prefect alternative of photoshop.',
    },
];
const [idNumber, setIdNumber] = useState(0);
const changeId = (id) => {
    setIdNumber(id);
};
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
  <div className='tool_main'>

    <div className="tool_header"><h1>Tools Used</h1></div>
    <div className='tools' id='tools'>
        <div className="left_arrow"><button onClick={leftArrow}><IoIosArrowBack/></button></div>
        <div className="card">
         
          <div className="tool_img_div"> <span className="tool_img"><img src={data[idNumber].img_src} alt={data[idNumber].alt}></img></span></div>
          <div className="tool_desc_block">
            <div className="tool_desc">
             <h3>{data[idNumber].name}</h3>
             <p>{data[idNumber].text}</p>
            </div>
          </div>
          
         </div>
        <div className="right_arrow"><button onClick={rightArrow}><IoIosArrowForward/></button></div>
        
    </div>
    <div className="list_container">
     <div className="tool_list">
        {data.map(function (obj, i) {
                    return <ToolCard id={obj.id} img_src={obj.img_src} key={i} changeId={changeId} />;
                })}
     </div>
    </div>
    
    </div>
  )
}

export default Tools