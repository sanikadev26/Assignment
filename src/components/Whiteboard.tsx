import React, { useRef, useState, useEffect } from 'react';
import { fabric } from 'fabric';

const Whiteboard: React.FC = () => {
  const [color, setColor] = useState('#000000');
  const [cursorSize, setCursorSize] = useState(5);
  const undoButtonRef = useRef<HTMLButtonElement>(null);
  const redoButtonRef = useRef<HTMLButtonElement>(null);
  const colorInputRef = useRef<HTMLInputElement>(null);
  const cursorSizeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      isDrawingMode: true,
    });

    // Undo/Redo functionality
    let state: string[] = []; // Explicitly type state as an array of strings
    let mods = 0;

    canvas.on('object:added', () => {
      if (!mods) {
        state.push(JSON.stringify(canvas));
      }
    });

    const undo = () => {
      if (mods < state.length) {
        mods += 1;
        canvas.loadFromJSON(state[state.length - mods], () => {
          canvas.renderAll();
        });
      }
    };

    const redo = () => {
      if (mods > 0) {
        mods -= 1;
        canvas.loadFromJSON(state[state.length - mods], () => {
          canvas.renderAll();
        });
      }
    };

    // Bind undo and redo to buttons
    undoButtonRef.current?.addEventListener('click', undo);
    redoButtonRef.current?.addEventListener('click', redo);

    // Bind color and cursor size changes to input fields
    colorInputRef.current?.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      setColor(target.value);
      canvas.freeDrawingBrush.color = target.value;
    });

    cursorSizeInputRef.current?.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      setCursorSize(parseInt(target.value, 10));
      canvas.freeDrawingBrush.width = parseInt(target.value, 10);
    });

    // Implement undo/redo buttons or key bindings
  }, []);

  return (
    <>
      <div className="toolbar">
        <button ref={undoButtonRef}>Undo</button>
        <button ref={redoButtonRef}>Redo</button>
        <input
          type="color"
          value={color}
          ref={colorInputRef}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setColor(target.value);
          }}
        />
        <input
          type="range"
          min="1"
          max="50"
          value={cursorSize}
          ref={cursorSizeInputRef}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setCursorSize(parseInt(target.value, 10));
          }}
        />
      </div>
      <canvas id="canvas" width={800} height={600} />
    </>
  );
};

export default Whiteboard;