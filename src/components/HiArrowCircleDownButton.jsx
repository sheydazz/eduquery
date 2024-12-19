"use client";
import { HiArrowCircleDown } from "react-icons/hi";

const HiArrowCircleDownButton = ({ onClick }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      onClick={onClick} // Lógica manejada por el padre
    >
      <HiArrowCircleDown size={30} style={{ marginRight: "10px" }} />
      <span></span>
    </div>
  );
};

export default HiArrowCircleDownButton;
