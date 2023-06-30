import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5,faCss3,faJsSquare,faReact,faVuejs,faFigma,faNode,faNodeJs} from '@fortawesome/free-brands-svg-icons'
import {faPen, faCode, faBasketball} from '@fortawesome/free-solid-svg-icons'



function AboutMe() {
  return (
    <About id="about">
       <div className='summary'>
       <h1>About Me</h1>
        <div className='box-row'>
          <div className='box'>
            <div className='box-header'>
              <FontAwesomeIcon icon={faPen} color="#073763" size="1x" className='fa-fw'/>
              <h2>Designer</h2>
            </div>
            <p>I love to create the design and layout of a site. Whether its bringing my own ideas to life to bringing someones elses to the screen, I find real joy in figuring out exactly how everything should look and the colors that should be associated with each design. I like to start with a pen and paper before moving on to Figma, where I create my final design.</p>
          </div>
          <div className='box'>
            <div className='box-header'>
              <FontAwesomeIcon icon={faCode} color="#073763" size="1x" className='fa-fw'/>
              <h2>Developer</h2>
            </div>
            <p>Coding has always been an interesting subject and when I finally found the lane that I wanted to pursue in it I was ecstatic. I love the constant innovation in the space and learning new technologies so that I can implement them into my own work is something that I always find great joy in doing</p>
          </div>
          <div className='box'>
            <div className='box-header'>
              <FontAwesomeIcon icon={faBasketball} color="orange" size="1x" className='fa-fw'/>
              <h2>Team Player</h2>
            </div>
            <p>I've played team sports my entire life and love being part of a team. Its great when a team can come together and figure out the perfect roles for each member so that the end goal can be met in the most productive fashion.</p>
          </div>
        </div>
       </div>
       <div className='my-stack'>
        <h1>My Stack</h1>
        <div className='icon-row'>
          <div className='icon'>
            <FontAwesomeIcon icon={faHtml5} color="red" size="4x" className='fa-fw'/>
            <label>HTML</label>
          </div>
          <div className='icon'>
            <FontAwesomeIcon icon={faCss3} color="blue" size="4x" className='fa-fw' />
            <label>CSS</label>
          </div>
          <div className='icon'>
            <FontAwesomeIcon icon={faJsSquare} color="yellow" size="4x" className='fa-fw' />
            <label>JavaScript</label>
          </div>
          <div className='icon'>
            <FontAwesomeIcon icon={faReact} color="blue" size="4x" className='fa-fw' />
            <label>React</label>
          </div>
        </div>
        <div className='icon-row row-2'>
        <div className='icon'>
            <FontAwesomeIcon icon={faNode} color="green" size="4x" className='fa-fw'/>
            <label>Node.js</label>
          </div>
          <div className='icon'>
            <FontAwesomeIcon icon={faVuejs} color="black" size="4x" className='fa-fw' />
            <label>Vue.js</label>
          </div>
          <div className='icon'>
            <FontAwesomeIcon icon={faFigma} color="navyblue" size="4x" className='fa-fw' />
            <label>Figma</label>
          </div>
        </div>
       </div>      
    </About>
  )
}

const About = styled.div`
    color:lightgrey;
    display:block;
    h1{
        font-size:45px;
        font-family:'Diphylleia';
        text-align:center;
        color:#073763;
    }
    p{
        font-family:'Diphylleia';
        text-align:center;
        color:#073763;
    }
    .summary{
      .box-row{
        display:flex;
        padding:5px;

        .box{
          width:400px;
          border:1px solid black;
          margin-right:20px;
          border-radius:20px;
          background-color:#f0f0f0;
          box-shadow: 14px 14px 0 -4px #bf4d03, 14px 14px 0 0 black;

          .box-header{
            display:flex;
            position:relative;
            left:130px;
            padding:5px;

            h2{
              margin-left:10px;
              font-family:'Diphylleia';
              position:relative;
              top:-10px;
              color:#bf4d03;
            }
          }
          
        }
      }
    }

    .my-stack{
      background-color:#073763;
      margin-top:20px;

      h1{
        color:#bf4d03;
      }

      .icon-row{
        padding:10px;
        position:relative;
        left:350px;
        display:flex;
        margin-top:10px;
        align-items:center;

        .icon{
          display:flex;
          margin-right:40px;
          flex-direction:column;
          padding:17px;
          background-color:#f0f0f0;
          border-radius:50px;

          label{
            position:relative;
            left:17px;
            margin-top:10px;
            color:#bf4d03;
          }
        }
      }

      .row-2{
        position:relative;
        left:450px;
      }
    }


@media(min-width:768px) and (max-width:991px){

  
    h1{
        font-size:45px;
        font-family:'Diphylleia';
        position:relative;
        left:-100px;
        color:#073763;
    }
    p{
        font-family:'Diphylleia';
        text-align:center;
        color:#073763;
    }
    .summary{
      .box-row{
        
        flex-direction:column;
        padding:5px;

        .box{
          width:400px;
          margin-left:100px;
          border-radius:20px;

          .box-header{
            display:flex;
            position:relative;
            left:130px;
            padding:5px;

            h2{
              margin-left:10px;
              font-family:'Diphylleia';
              position:relative;
              top:-10px;
              color:#bf4d03;
            }
          }
          
        }
      }
    }

    .my-stack{
      background-color:#073763;
      margin-top:20px;

      h1{
        color:#bf4d03;
      }

      .icon-row{
        padding:10px;
        position:relative;
        left:0px;
        display:flex;
        margin-top:10px;
        align-items:center;
      }

      .row-2{
        position:relative;
        left:100px;
      }
    }

}



@media(min-width:576px) and (max-width:767px){

  h1{
        position:relative;
        left:-100px;
    }
    .summary{
      .box-row{
        
        flex-direction:column;
        padding:5px;

        .box{
          width:400px;
          margin-left:75px;
          border-radius:20px;

          .box-header{
            display:flex;
            position:relative;
            left:130px;
            padding:5px;

            h2{
              margin-left:10px;
              font-family:'Diphylleia';
              position:relative;
              top:-10px;
              color:#bf4d03;
            }
          }
          
        }
      }
    }

    .my-stack{
      background-color:#073763;
      margin-top:20px;
      width:800px;

      h1{
        position:relative;
        left:-100px;
        color:#bf4d03;
      }

      .icon-row{
        padding:10px;
        position:relative;
        left:-10px;
        display:flex;
        margin-top:10px;
        align-items:center;
      }

      .row-2{
        position:relative;
        left:70px;
      }
    }

}



@media(max-width:575px){

  h1{
        position:relative;
        left:0px;
    }
    .summary{
      .box-row{
        
        flex-direction:column;
        padding:15px;

        .box{
          width:400px;
          margin-left:50px;
          border-radius:20px;

          .box-header{
            display:flex;
            position:relative;
            left:130px;
            padding:5px;

            h2{
              margin-left:10px;
              font-family:'Diphylleia';
              position:relative;
              top:-10px;
              color:#bf4d03;
            }
          }
          
        }
      }
    }

    .my-stack{
      background-color:#073763;
      margin-top:20px;
      width:550px;

      h1{
        position:relative;
        left:30px;
        color:#bf4d03;
      }

      .icon-row{
        padding:10px;
        position:relative;
        left:50px;
        display:flex;
        margin-top:10px;
        align-items:center;

        .icon{
          display:flex;
          margin-right:5px;
          flex-direction:column;
          padding:15px;
          background-color:#f0f0f0;
          border-radius:50px;

          label{
            position:relative;
            left:17px;
            margin-top:10px;
            color:#bf4d03;
          }
        }
      }

      .row-2{
        position:relative;
        left:100px;
      }
    }



}

`;

export default AboutMe