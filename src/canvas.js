import React, { useEffect, useRef } from 'react';

function Canvas() {

    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const menu = document.querySelector(".menu");
        const ctx = canvas.getContext("2d");

        const canvasOffsetX = canvas.offsetLeft;
        const canvasOffsetY = canvas.offsetTop;

        canvas.width = window.innerWidth - canvasOffsetX;
        canvas.height = window.innerHeight - canvasOffsetY;

        //draw state
        let isPainting = false;
        //linewidth
        let lineWidth = 5;
        //canvas co-ords
        let startY;
        let startX;

        // clear button 

        menu.addEventListener('click', e => {

            if (e.target.id === 'clear') {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        });

        menu.addEventListener('change', e => {

            if (e.target.id === 'stroke') {
                ctx.strokeStyle = e.target.value;
            }

            if (e.target.id === 'lineWidth') {
                lineWidth = e.target.value;
                console.log(`line Width set to ${lineWidth}`);

            }
        });

        const draw = (e) => {

            if (!isPainting) {
                return;
            }

            const rect = canvas.getBoundingClientRect();
            ctx.lineWidth = lineWidth;
            ctx.lineCap = "round";


            ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);

        }

        // when mousedown = draw. when mouseup - stop drawing

        canvas.addEventListener('mousedown', (e) => {
            isPainting = true;

            const rect = canvas.getBoundingClientRect();
            ctx.beginPath();
            ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
        });

        canvas.addEventListener('mouseup', e => {
            isPainting = false;
            ctx.stroke();
            ctx.beginPath(); // end line
        });

        canvas.addEventListener('mousemove', draw);

    }, []);

    return (

        <canvas ref={canvasRef} id="canvas">  </canvas>

    );
}

export default Canvas;