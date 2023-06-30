import styled from "styled-components";
import React from 'react'
import Avatar from '../assets/images/Cartoonify.png'
import Husky from '../assets/images/husky-removebg-preview.png'
import {Link} from 'react-scroll'
import CV from '../assets/files/resume.pdf'

function Header() {
  return (
    <Top>
        <div className="top-name">
            <h1>Nezam</h1>
            <h1>Seraj</h1>
        </div>
        <div className="top-img">
            <img className="avatar" src={Avatar} />
            <img className="husky" src={Husky} />
        </div>
        <div className="top-menu">
            <nav className="menu-nav">
                <ul>
                    <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About Me</Link></li>
                    <li><Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>Portfolio</Link></li>
                    <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact Me</Link></li>
                </ul>
            </nav>
            <h1 className="title">Developer/<span className="designer">Designer</span></h1>
            <div className="menu-btn">
                {/* <button><Link to={CV} target="_blank">Download CV</Link></button> */}
            </div>
        </div>
    </Top>
  )
}

const Top = styled.div`
    width:100%;
    background-color:#f0f0f0;
    height:720px;
    display:flex;
    color:white;

    .top-name{
        h1{
            font-family:'Diphylleia';
            font-size:90px;
            font-width:200px;
            padding:10px;
            width:150px;
            color:#073763;
        }
    }

    .top-img{

        position:relative;
        left:300px;
        top:50px;
        img.avatar{
            height:275px;
            width:275px;
            position:relative;
            top:5px;

        }
        img.husky{
            height:175px;
            width:175px;
            position:relative;
            top:25px;
            z-index:0;
            
        }
    }

    .top-menu{
        .menu-nav{
            ul{
                list-style-type:none;
                display:flex;
                position:relative;
                left:350px;
                cursor:pointer;

                li{
                    padding:20px;
                    list-style-type:none;
                    text-decoration:none;
                    color:#073763;
                    cursor:pointer;

                }
            }
        }

        h1.title{
            position:relative;
            left:350px;
            top:100px;
            color:#073763;

            .designer{
                color:#bf4d03;
            }

        }


        .menu-btn button{
            padding:10px;
            position:relative;
            left:455px;
            background-color:transparent;
            color:#073763;
            border:1px solid #073763;
            top:150px;
        }
    }

   

    @media(min-width:768px) and (max-width:991px){

        width:100%;
        .top-name{
            h1{
                font-size:80px;
            }

        }

        .top-img{
            position:relative;
            left:10px;

            img.avatar{
                height:170px;
                width:170px;
                left:90px;
                top:100px;
            }

            img.husky{
                height:100px;
                width:100px;
                top:110px;
                left:80px;
            }
        }

        .top-menu{
        .menu-nav{
            ul{              
                left:-200px;
            }
        }

        h1.title{
            left:-350px;
            top:400px;
        }
    } 
    }

   
   
   
   
   
   
   
    @media(min-width:576px) and (max-width:767px){
        width:900px;
        .top-name{
            h1{
                font-size:50px;
            }
        }

        .top-img{
            position:relative;
            left:10px;

            img.avatar{
                height:200px;
                width:200px;
                left:100px;
                top:100px;
            }

            img.husky{
                height:100px;
                width:100px;
                top:110px;
                left:100px;
            }
        }

        .top-menu{
        .menu-nav{
            ul{              
                left:-200px;
            }
        }

        h1.title{
            left:-350px;
            top:400px;
        }
    } 
    }

    
    
    
    
    
    
    
    
    
    @media(max-width:575px){
        height:780px;
        width:800px;
        
        .top-name{
            h1{
                font-size:70px;
                position:relative;
                left:50px;
            }
        }

        .top-img{
            position:relative;
            left:10px;

            img.avatar{
                height:250px;
                width:250px;
                left:-100px;
                top:300px;
            }

            img.husky{
                height:200px;
                width:200px;
                top:120px;
                left:100px;
            }
        }

        .top-menu{
        .menu-nav{
            ul{              
                left:-150px;
                display:block;
            }
        }

        h1.title{
            left:-450px;
            top:500px;
        }
    } 
    }

   
`;

export default Header