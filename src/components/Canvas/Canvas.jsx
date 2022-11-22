import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../../context/CanvasContext";

const Canvas = ({ image, degree, degreeCustom }) => {
  const canvasRef = useRef(null);
  const { canvas, setCanvas } = useGlobalContext();
  

  let determineSize = function (width, height, maxW, maxH, degree) {
    let w, h;
    degree = Math.abs(degree);
    if (degree === 90 || degree === 270) {
      // values for width and height are swapped for these rotation positions
      w = height;
      h = width;
    } else {
      w = width;
      h = height;
    }
    if (w > h) {
      if (w > maxW) {
        h = (h * maxW) / w;
        w = maxW;
      }
    } else {
      if (h > maxH) {
        w = (w * maxH) / h;
        h = maxH;
      }
    }
    return { width: w, height: h };
  };

  const drawRotated = (image, degree) => {
    const context = canvas.getContext("2d");
    let maxSize = {
      width: image.n,
      height: 600,
    };
    let newSize = determineSize(
      image.width,
      image.height,
      maxSize.width,
      maxSize.height,
      degree
    );
    canvas.width = newSize.width;
    canvas.height = newSize.height;
    context.save();
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    if (degree === 0) {
      context.drawImage(image, 0, 0, newSize.width, newSize.height);
    } else {
      context.translate(canvas.width / 2, canvas.height / 2);
      context.rotate((degree * Math.PI) / 180);

      if (Math.abs(degree) === 180) {
        context.drawImage(
          image,
          -newSize.width / 2,
          -newSize.height / 2,
          newSize.width,
          newSize.height
        );
      } else {
        // 90 or 270 degrees (values for width and height are swapped for these rotation positions)
        context.drawImage(
          image,
          -newSize.height / 2,
          -newSize.width / 2,
          newSize.height,
          newSize.width
        );
      }
    }
    context.restore();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(
      image,
      0,0
    );
    setCanvas(canvas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (canvas) {
      drawRotated(image, degree);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [degree]);

  useEffect(() => {
    if (canvas) {
      drawRotated(image, degreeCustom);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [degreeCustom]);
  return <canvas ref={canvasRef} />;
};

export default Canvas;
