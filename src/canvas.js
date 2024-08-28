import path from 'path';
import React, { useEffect, useRef } from 'react';

function Canvas() {

    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const menu = document.querySelector(".menu");
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        //draw state
        let isPainting = false;
        //linewidth
        let lineWidth = 10;
        let canvasStack =  [];
        let points = [];

        const draw = (e) => {

            if (!isPainting) {
                return;
            }

            const rect = canvas.getBoundingClientRect();
            ctx.lineWidth = lineWidth;
            ctx.lineCap = "round";

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            ctx.lineTo(x, y);

            ctx.stroke();
            ctx.beginPath();

            ctx.moveTo(x, y);

        }

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

            }
        });

        // when mousedown = draw. when mouseup - stop drawing

        canvas.addEventListener('mousedown', (e) => {
            isPainting = true;

            const rect = canvas.getBoundingClientRect();
            ctx.beginPath();
            ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
            canvasStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));   // store each stroke in an array. array can be then be used for undo/redo.
            console.log(canvasStack);
        });

        canvas.addEventListener('mouseup', e => {
            isPainting = false;
            ctx.stroke();
            ctx.beginPath(); // end line
            
             canvasStack.push(points);
        });

        canvas.addEventListener('mousemove', draw);

     
        const saveButton = document.getElementById("save");
        if (saveButton) {
        saveButton.addEventListener("click", () => {

            const dataURL = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            console.log(dataURL);

            link.href = dataURL;
            link.download = 'saved-image.png';
            link.click();

        });
    }

        const fillToggle = document.getElementById("Fill-toggle");
       if (fillToggle) {
        fillToggle.addEventListener("change", () => {
            
            const fillColor = document.getElementById('fill').value;
            ctx.fillStyle = fillColor;

            ctx.fillRect(0, 0 , canvas.width, canvas.height);
        });
    }


    }, []);


     canvas.addEventListener('undo', e => {


        function DrawStack() {

            // blank slate - delete everything
            ctx.clearRect(0, 0, canvas.width, canvas.height);


            // redraw previous strokes in array

            canvasStack.forEach(path => {
         
                ctx.moveTo(path[0].x, path[0].y);

                path.forEach(point => {
                    ctx.beginPath();

                    ctx.moveTo(path[0].x, path[0].y);
                    for(let i = 1; i < path.length; i++) {
                        ctx.lineTo(path[i].x, path[i].y);
                    }
                    ctx.stroke();
                });


            });
        }






     });

     canvas.addEventListener('redo', e => {
        
     });


    return (

        <canvas ref={canvasRef} id="canvas"></canvas>

    );
}

export default Canvas;