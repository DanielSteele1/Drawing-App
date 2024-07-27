import React, { useEffect, useRef } from 'react';

function Canvas() {

    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        
        const ctx = canvas.getContext("2d");
        const menu = document.querySelector(".menu");

        const canvasOffsetY = canvas.offsetX;
        const canvasOffsetX = canvas.offsetY;

        canvas.width = window.innerWidth - canvas.offsetX;
        canvas.height = window.innerHeight - canvas.offsetY;

        //draw state
        let isPainting = false;

        //linewidth
        let lineWidth = 10;

        //canvas co-ords
        let startY;
        let startX;

        // clear button 

        menu.addEventListener ('click', e => {
            
            if (e.target.id === 'clear') {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        });

        menu.addEventListener ('change', e => {
            
            if (e.target.id == 'clear') {
                ctx.strokeStyle = e.target.value;
            }
        });

        canvas.addEventListener ('lineWidth', e => {
            
            if (e.target.id == 'clear') {
                ctx.lineWidth = e.target.value;
            }
        });

        const draw = (e) => {

            if(!isPainting) {
                return;
            }
        }

        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';

       // lineup mouse and drawn line 
       // ctx.lineTo(e.offsetX - canvasOffsetX, e.offsetY - canvasOffsetY);
        ctx.stroke();

        // when mousedown = draw. when mouseup - stop drawing

        canvas.addEventListener ('mousedown', e => {
            isPainting = true;
            startY = e.offsetY;
            startX = e.offsetX;
        });

        canvas.addEventListener ('mouseup', () => {
            isPainting = false;
            ctx.stroke();
            ctx.beginPath(); // end line
        });

        canvas.addEventListener ('mousemove', draw);

    }, []);

    return (

        <canvas ref={canvasRef} id="canvas">  </canvas>

    );
}

export default Canvas;