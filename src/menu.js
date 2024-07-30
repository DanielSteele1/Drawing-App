import React, { useEffect, useRef } from 'react';

function Menu() {


    return (

        <div className="menu">

            <div className="menu-item">
                Choose a brush color:
                <br></br>
                <br></br>

                <input type="color" id="stroke" /> </div>

            <div className="menu-items">

                <div className="menu-item">
                    Line Width
                    <br></br>
                    <input type="range" id="lineWidth" min="1" max="50" />

                </div>

                {/* <div className="menu-item">
                    Stroke
                    <br></br>
                    <input type="range" id="stroke" min="1" max="5" />

                </div>

                <div className="menu-item">
                    ???
                    <br></br>
                    <input type="range" id="line-width" min="1" max="5" />

                </div> */}


            </div>

            <div className="menu-options-container">
                <button className="menu-options" id="clear"> Clear </button>
                <button className="menu-options" id="reset">Reset Settings</button>
                <button className="menu-options" id="save">Save</button>
            </div>

        </div>
    );
}

export default Menu;