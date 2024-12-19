"use client";
import { HiArrowCircleUp } from "react-icons/hi";

const HiArrowCircleUpButton = ({ onClick }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      onClick={onClick} // Lógica manejada por el padre
    >
      <HiArrowCircleUp size={30} style={{ marginRight: "1px" }} />
      <span></span>
    </div>
  );
};

export default HiArrowCircleUpButton;
