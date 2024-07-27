import React, { useEffect, useRef } from 'react';

function Menu() {


    return (

        <div className="menu">

            <div className="menu-item">
                Choose a brush color:
                <br></br>
                <br></br>

                <input type="color" id="color-picker" /> </div>

            <div className="menu-items">

                <div className="menu-item">
                    Line Width
                    <br></br>
                    <input type="range" id="line-width" min="1" max="50" />

                </div>

                <div className="menu-item">
                    Line Shape
                    <br></br>
                    <input type="range" id="line-width" min="1" max="50" />

                </div>

                <div className="menu-item">
                    ???
                    <br></br>
                    <input type="range" id="line-width" min="1" max="50" />

                </div>


            </div>

            <div className="menu-options-container">
                <div className="menu-options"> Clear </div>
                <div className="menu-options">Reset Settings</div>
                <div className="menu-options">Save</div>
            </div>

        </div>
    );
}

export default Menu;