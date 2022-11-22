import React, { useRef, useState } from "react";
// Context
import { useGlobalContext } from "../../context/CanvasContext";
// Components
import { Button } from "../Button";
import { Close, ImgPrw, RotateLeft, RotateRight } from "../Icons/Icons";
import { Canvas } from "../Canvas";

// Utils
import { ImageCreate } from "../../utils/utils";
// Styles
import {
  CanvasWrapper,
  Container,
  DropZone,
  DropZoneBackImg,
  DropZoneInput,
  RotateItem,
  Setting,
  Settings,
  Wrapper,
} from "./ImageRotate.styles";

const initialState = {
  fileName: "",
  url: "",
  imageFile: "",
};
const ImageRotate = () => {
  const [imageInfo, setImageInfo] = useState(initialState);
  const [rotateDeg, setRotateDeg] = useState(0);
  const { canvas } = useGlobalContext();
  const inpurRef = useRef(null);

  const handleDegree = (degrre) => {
    if (Math.abs(rotateDeg + degrre) === 360) {
      setRotateDeg(0);
    } else {
    setRotateDeg(rotateDeg + degrre);
    }
  };

  const handleUpload = () => {
    inpurRef.current.click();
  };
  const removeImage = () => {
    inpurRef.current.value = "";
    setImageInfo(initialState);
  }
  
  async function uploadImg(e) {
    const file = e.target.files[0];
    // Create Url
    const url = URL.createObjectURL(file);
    // Create Image
    const imageFile = await ImageCreate(url);

    setImageInfo({
      fileName: file.name,
      url,
      imageFile,
    });
  }
  // Downlaed Img
  const downloadCanvas = () => {
    let link = document.createElement("a");
    link.download =  imageInfo.fileName + 'rotate';
    console.log('imageInfo :', imageInfo);
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
  return (
    <Wrapper>
      <Container>
        <RotateItem>
          <DropZone>
            <DropZoneInput
              style={imageInfo.fileName ? { display: "none" } : null}
            >
              <label>
                <input
                  type="file"
                  className="dropzone-input"
                  accept=".JPEG,.JPG,.PNG"
                  style={{ display: "none" }}
                  autoComplete="off"
                  tabIndex="-1"
                  onChange={uploadImg}
                  ref={inpurRef}
                  disabled={imageInfo.image ? true : false}
                />
              </label>
              <ImgPrw />
              <Button
                primary
                text="Upload Image"
                handleClick={handleUpload}
              />
            </DropZoneInput>
            <DropZoneBackImg image={imageInfo.url} />
            {imageInfo.imageFile && (
              <CanvasWrapper>
                <Canvas image={imageInfo.imageFile} degree={rotateDeg} />
              </CanvasWrapper>
            )}
          </DropZone>
        </RotateItem>
        <RotateItem >
          <Settings>
            <p>Rotate image</p>
            {imageInfo.imageFile && (
              <Close width="35" height="35" className='close-icon' onClick={removeImage}/>
            )}
           
            <Setting>
              <Button
                icon
                logo={<RotateLeft />}
                text="Rotate Left"
                handleClick={() => handleDegree(-90)}
              />
              <Button
                icon
                logo={<RotateRight />}
                text="Rotate Right"
                handleClick={() => handleDegree(90)}
              />
            </Setting>
            <Button
              primary
              text="Download"
              handleClick={downloadCanvas}
            />
          </Settings>
        </RotateItem>
      </Container>
    </Wrapper>
  );
};

export default ImageRotate;
