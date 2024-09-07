import React, { useEffect, useRef } from 'react';

function Menu() {
    useEffect(() => {
        const value = document.querySelector("#value");
        const lineWidth = document.querySelector("#lineWidth");

        value.textContent = lineWidth.value;

        lineWidth.addEventListener("input", (event) => {
            value.textContent = event.target.value;
        });

        return () => {
            lineWidth.removeEventListener("input", (event) => {
                value.textContent = event.target.value;

            });
        };



    }, []);


    return (

        <div className="menu">

            <div className="progress-buttons">
                <button class="undo-button" id="undo"> <img class="undoredo "src="undo.png"></img> </button>
                <button class="redo-button" id="redo"> <img class="undoredo" src="redo.png"></img> </button>
            </div>

            <div className="menu-items">

                <h2> Brush Options </h2>

                <div className="menu-item">
                    <label> Brush Colour </label>
                    <br></br>
                    <input type="color" class="color" id="stroke" />
                    <br></br>
                    <label> Fill Colour </label>
                    <br></br>
                    <input type="color" class="color" id="fill" />
                    <br></br>

                    <label> Line Width: </label>  <span id="value"></span>
                    <br></br>
                    <input type="range" id="lineWidth" min="1" max="50" defaultValue="15" />
                    <br></br>
                    <input type="checkbox" class="checkbox" id="eraser" />
                    <label> Eraser </label>
                    <br></br>
                    <input type="checkbox" class="checkbox" id="Fill-toggle" />
                    <label> Fill </label>
                    <br></br>
                </div>


                <div className="menu-item">
                <h2> Fill Colour </h2>

                    <div className="shapes">
                        <div className="shape-item">
                            <button class="shape-options" id="square"> <img src="square_green (Custom).png" /> </button>
                        </div>

                        <div className="shape-item">
                            <button class="shape-options" id="circle"> <img src="circle_green (Custom).png" /> </button>
                        </div>

                        <div className="shape-item">
                            <button class="shape-options" id="triangle"> <img src="triangle_green (Custom).png" /> </button>
                        </div>

                        <div className="shape-item">
                            <button class="shape-options" id="line"> <img src="line-green (Custom).png" /> </button>
                        </div>
                    </div>

                </div>

                <div className="menu-item">
                    <button class="menu-button" id="clear"> Clear Canvas </button>
                    <br></br>
                    <button class="menu-button" id="save"> Save As Image </button>

                </div>

            </div>

        </div>


    );
}

export default Menu;