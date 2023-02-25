import React from "react";
import styled from "styled-components";

interface PopupProps {
  texte: string;
  color: string;
}

const PopupContainer = styled.div`
  position: absolute;
  color: white;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  border: 1px solid #000000;
  border-radius: 4px;
  box-shadow: 2px 2px 0px 0px rgb(0 0 0);
  text-align: center;
  max-width: 548px;
  width: 100%;
  height: 40px;
`;

const Popup = ({ texte, color }: PopupProps) => {
  return (
    <PopupContainer style={{ backgroundColor: color }}>{texte}</PopupContainer>
  );
};

export default Popup;
