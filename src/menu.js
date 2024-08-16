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
                    <input type="color" id="stroke" /> </div>

                <div className="menu-item">
                    <label> Line Width: </label>  <span id="value"></span>
                    <br></br>
                    <input type="range" id="lineWidth" min="1" max="50" default="1" />
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
                    <label> Eraser </label>
                    <br></br>
                    <input type="checkbox" id="checkbox" />

                    <label> Fill Colour </label>
                    <br></br>
                    <input type="checkbox" id="checkbox" />

                </div>

                <div className="menu-item">

                </div>

                <div className="menu-item">
                    <button class="menu-button" id="clear"> Clear Canvas </button>
                </div>

                <div className="menu-item">
                    <button clas="menu-button" id="save"> Save As Image </button>
                </div>

            </div>

        </div>


    );
}

export default Menu;