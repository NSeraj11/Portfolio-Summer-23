import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5,faCss3,faJsSquare,faReact,faVuejs,faFigma} from '@fortawesome/free-brands-svg-icons'

function Portfolio() {
  return (
    <Main id="portfolio">
        <div className='proj-row'>
            <div className='proj-container container-1'>
            <div className='proj-header'>
                    <h2>The Continental</h2>
                </div>
                <div className='proj-body'>
                    <p>The Continental is a ficticous hotel website that is inspired by "The Continental Hotel" in the hit movie series "John Wick". Users can navigate the site to see the different and create a fake booking. Mobile Friendly</p>
                    <button><a 
                      href="https://nseraj11.github.io/TheContinental2/#/" 
                      target="_blank" 
                      rel="noreferrel">View Project</a></button>
                </div>
            </div>
            <div className='proj-container container-2'>
                <div className='proj-header'>
                    <h2>MealZ</h2>
                </div>
                <div className='proj-body'>
                    <p>MealZ is an application where the user can search for whatever food they like. By clicking on the item they want, they will be taken to a page with the recipe and instructions on how to cook the dish. The application is supported by the Spoonacular API</p>
                    <button><a 
                      href="https://nseraj11.github.io/MealZ/" 
                      target="_blank" 
                      rel="noreferrel">View Project</a></button>
                </div>
            </div>
        </div>
        <div className='proj-row'>
            <div className='proj-container'>               
            <div className='proj-header'>
                    <h2>NoteZ</h2>
                </div>
                <div className='proj-body'>
                    <p>NoteZ is a note taking application where the user can create whatever note they need and then select a category that relates to the note. User will be able to see the note on the page with a color bubble that indicates what category they chose so that they can categorize their notes</p>
                    <button><a 
                      href="https://nseraj11.github.io/NoteZ-Complete/" 
                      target="_blank" 
                      rel="noreferrel"
                      className='btn-1'>View Project</a></button>
                </div>
            </div>
            <div className='proj-container'>
                <div className='proj-header'>
                    <h2>Budget App</h2>
                </div>
                <div className='proj-body'>
                    <p>A simple budget app where the user can create a budget and add/edit any expenses they have. The user will also be shown a progress bar that changes color based how much of the budget has been spent</p>
                    <button><a 
                      href="https://nseraj11.github.io/BudgetApp/" 
                      target="_blank" 
                      rel="noreferrel">View Project</a></button>
                </div>
            </div>
        </div>
    </Main>
  )
}

const Main = styled.div`
background-color:white;
    .proj-row{
        display:flex;
        padding:15px;
        justify-content:center;

        .proj-container{
            height:250px;
            width:400px;
            margin:15px;
            border:1px solid #073763;
            background-color:#f0f0f0;
            border-radius:20px;
            box-shadow: 14px 14px 0 -4px #bf4d03, 14px 14px 0 0 black;
            .proj-header{
                text-align:center;
                font-size:1em;
                color:#bf4d03;
                font-family:'Diphylleia';

            }

            .proj-body{
                text-align:center;
                font-size:1em;
                position:relative;
                color:#073763;
                top:20px;
                font-family:'Diphylleia';


                button{
                    padding:10px;
                    position:relative;
                    top:10px;
                    border-radius:5px;
                    background-color:transparent;
                    border:none;
                    color:white;

                    a{
                        text-decoration:none;
                        color:#bf4d03;
                        font-family:'Diphylleia';                     
                    }
                }
            }
        }

    }


    @media(min-width:768px) and (max-width:991px){

        
    .proj-row{
        flex-direction:column;
        position:relative;
        left:100px;
        }

    }




@media(min-width:576px) and (max-width:767px){

    .proj-row{
        flex-direction:column;
        position:relative;
        left:75px;
        }

}



@media(max-width:575px){

    .proj-row{
        flex-direction:column;
        position:relative;
        left:50px;
        }

}
`;

export default Portfolio