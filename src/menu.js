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

            <div className="menu-items">

                <label> Brush Options </label>

                <div className="menu-item">
                    <label> Color: </label>
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
                    <label> Shapes </label>
                    <br></br>
                    <div className="menu-item">
                        <button class="shape-options" id="square"> <img src="square.png" /> </button>
                    </div>

                    <div className="menu-item">
                        <button class="shape-options" id="circle"> <img src="circle.png" /> </button>
                    </div>

                    <div className="menu-item">
                        <button class="shape-options" id="triangle"> <img src="triangle.png" /> </button>
                    </div>

                    <div className="menu-item">
                        <button class="shape-options" id="line"> <img src="line.png" /> </button>
                    </div>

                </div>

                <div className="menu-item">
                    <button class="menu-button" id="clear"> Clear Canvas </button>
                    <br></br>
                    <button class="menu-button" id="clear"> Save As Image </button>
                </div>

            </div>

        </div>


    );
}

export default Menu;