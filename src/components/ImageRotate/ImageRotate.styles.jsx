import styled from "styled-components";


export const Wrapper = styled.div`
  max-width: 980px;
  margin: 0px auto;
  margin-top: -45px;
  padding: 0 15px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  background: #f2f2f2;
  border: 1px solid #d7d7d7;
  border-radius: 16px;
  flex-wrap: wrap;
  @media only screen and (max-width: 900px) {
   justify-content:center;
  }
`;

export const RotateItem = styled.div`
  width: 45%;
  margin: 16px;
  background-color: #fff;
  border: 1px dashed #a1a1a1;
  border-radius: 16px;
  min-height: 285px;
`;
export const DropZone = styled.div`
  position: relative;
  text-align: center;
`;
export const DropZoneInput = styled.div`
  margin-top: 93px;
`;

export const DropZoneBackImg = styled.div`
  background-image: url(${({ image }) => image});
  background-size: 100%, cover;
  background-position: 50%;
  background-size: 150%;
  border-radius: 8px;
  filter: blur(3px);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  animation: animateOpacityImage 1s;

  @keyframes animateOpacityImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const CanvasWrapper = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  canvas {
    max-width: 100%;
    max-height: 100%;
    margin: auto 0;
    z-index: 9;
  }
`;


export const Settings = styled.div`
    position: relative;
   
    text-align: center;
    p {
      padding-top: 50px;
      padding-bottom: 20px;
    }
    .close-icon {
      position: absolute;
      top: 5%;
      right: 5%;
      cursor: pointer;
    }
`
export const Setting = styled.div`
  display: flex;
  justify-content: center;
  gap:30px;
  flex-wrap: wrap;
`;


