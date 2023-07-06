import React from "react";

interface Props {
  passengers: number;
  onPassengersChange: (value: number) => void;
}

const Passengers: React.FC<Props> = ({ passengers, onPassengersChange }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "flex-start",
        textAlign: "center",
      }}
    >
      <span style={{ width: "50%", paddingInline: 20, color: "white",fontSize:20 }}>
        Number of passengers:
      </span>
      <input
        type="number"
        placeholder="Number of passengers"
        value={passengers}
        onChange={(e) => onPassengersChange(Number(e.target.value))}
        style={{ width: "50%", padding: 10, borderRadius: 15 }}
      />
    </div>
  );
};

export default Passengers;
