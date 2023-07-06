import React from "react";

interface Props {
  origin: string;
  destination: string;
  onOriginChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
}

const Route: React.FC<Props> = ({
  origin,
  destination,
  onOriginChange,
  onDestinationChange,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "baseline",
        width: "100%",
        marginBottom: 50,
        gap:20
      }}
    >
      <select
        value={origin}
        onChange={(e) => onOriginChange(e.target.value)}
        style={{ width: "50%", padding: 10, borderRadius: 15 }}
      >
        <option value="" disabled>
          Select origin
        </option>
        <option value="City A">City A</option>
        <option value="City B">City B</option>
        <option value="City C">City C</option>
        <option value="City D">City D</option>
      </select>
      <select
        value={destination}
        onChange={(e) => onDestinationChange(e.target.value)}
        style={{ width: "50%", padding: 10, borderRadius: 15 }}
      >
        <option value="" disabled>
          Select destination
        </option>
        <option value="City A">City A</option>
        <option value="City B">City B</option>
        <option value="City C">City C</option>
        <option value="City D">City D</option>
      </select>
    </div>
  );
};

export default Route;
