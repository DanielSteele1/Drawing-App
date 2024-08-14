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
                        <button class="shape-options" id="square"> Square </button>
                    </div>

                    <div className="menu-item">
                        <button class="shape-options" id="circle"> Circle </button>
                    </div>

                    <div className="menu-item">
                        <button class="shape-options" id="triangle"> Triangle </button>
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
                    <button id="clear"> Clear Canvas </button>
                </div>

                <div className="menu-item">
                    <button id="save"> Save As Image </button>
                </div>

                <div className="menu-item">
                    <button id="save"> Save As Image </button>
                </div>

            </div>

        </div>


    );
}

export default Menu;