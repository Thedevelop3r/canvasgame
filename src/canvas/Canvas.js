import { useRef, useEffect } from 'react';

import { main } from "../shape/canvalogic";



const Canvas = props => {
    const canvasRef = useRef(null);

    useEffect(() => {
        main(canvasRef);
    }, []);

    return (
        <canvas ref={canvasRef} {...props} />
    );
}

export default Canvas;