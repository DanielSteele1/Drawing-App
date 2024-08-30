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

        const strokes = [];
        const redoStack = [];
        let currentStroke = [];


        const draw = (e) => {

            if (!isPainting) {
                return;
            }

            const rect = canvas.getBoundingClientRect();
            ctx.lineWidth = lineWidth;
            ctx.lineCap = "round";

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            currentStroke.push({ x, y, lineWidth, strokeStyle: ctx.strokeStyle });

            ctx.lineTo(x, y);

            ctx.stroke();
            ctx.beginPath();

            ctx.moveTo(x, y);

        };

        // const undo = () => {
        //     strokes.pop(); // Remove the last stroke
        //     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas
        //     strokes.forEach(strokes => {
        //         ctx.beginPath();
        //         strokes.forEach(point => {
        //             ctx.lineWidth = point.lineWidth;
        //             ctx.strokeStyle = point.strokeStyle;
        //             ctx.lineTo(point.x, point.y);
        //             ctx.stroke();
        //             ctx.beginPath();
        //             ctx.moveTo(point.x, point.y);
        //         });
        //     });
        //     ctx.beginPath(); // Reset the path
        // };

        const redrawCanvas = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas
            strokes.forEach(stroke => {
                if (Array.isArray(stroke)) { // Ensure stroke is an array
                    ctx.beginPath();
                    stroke.forEach(point => {
                        ctx.lineWidth = point.lineWidth;
                        ctx.strokeStyle = point.strokeStyle;
                        ctx.lineTo(point.x, point.y);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.moveTo(point.x, point.y);
                    });
                }
            });
            ctx.beginPath(); // Reset the path
        };

        const undo = () => {

            if (strokes.length === 0 ) return;
            const lastStroke = strokes.pop(); //remove last stroke
            redoStack.push(lastStroke); // add it to the redo stack to be used later
            redrawCanvas();
        };

        const redo = () => {

            if(redoStack.length === 0) return;
            const lastUndoneStroke = redoStack.pop();  //get the last undone stroke
            strokes.push(lastUndoneStroke);  // add it back into the strokes
            redrawCanvas();
        };

        // undo/redo buttons
        const undoButton = document.getElementById("undo");
        if (undoButton) {
            undoButton.addEventListener("click", undo);
        }

        const redoButton = document.getElementById("redo");
        if(redoButton) {

            redoButton.addEventListener("click", redo);
        }

        // clear button 

        menu.addEventListener('click', e => {

            if (e.target.id === 'clear') {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                strokes.length == 0;
                redoStack.legnth == 0; // clear arrays
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
            currentStroke = [];  // reset for the next current stroke
            const rect = canvas.getBoundingClientRect();
            ctx.beginPath();
            ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
        });

        canvas.addEventListener('mouseup', e => {
            isPainting = false;
            ctx.stroke();
            strokes.push(currentStroke); // save the current stroke - push to array
            ctx.beginPath(); // end line

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

                ctx.fillRect(0, 0, canvas.width, canvas.height);
            });
        }

    }, []);




    return (

        <canvas ref={canvasRef} id="canvas"></canvas>

    );
}

export default Canvas;