import React, { useState } from "react";
import Passengers from "./components/Passengers";
import Route from "./components/Route";
import axios from "axios";

function App(): JSX.Element {
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [flights, setFlights] = useState<any[]>([]);
  const [passengers, setPassengers] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      if (
        origin === "" ||
        destination === "" ||
        origin === destination ||
        passengers < 1
      ) {
        alert("Please Provide valid input");
        return;
      }
      const response = await axios.get(
        `http://localhost:5000/api/flights?origin=${origin}&destination=${destination}`
      );
      setFlights(response.data);
    } catch (error) {
      alert("An error occurred while fetching flight prices.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        flex: 1,
        // width: "100%",

        // flexDirection: "column",
        alignItems: "center",
        padding: 50,
      }}
    >
      <h1 style={{ color: "white" }}>Flight Price Search</h1>

      <Route
        origin={origin}
        destination={destination}
        onOriginChange={(value: string) => setOrigin(value)}
        onDestinationChange={(value: string) => setDestination(value)}
      />
      <Passengers
        passengers={passengers}
        onPassengersChange={(value: number) => setPassengers(value)}
      />

      <button
        style={{
          width: "100%",
          backgroundColor: "#0d6efd",
          border: "none",
          color: "white",
          padding: 10,
          borderRadius: 15,
          marginTop: 25,
          fontWeight: "bold",
          fontSize: 15,
        }}
        disabled={loading}
        onClick={handleSearch}
      >
        {loading ? "Searching..." : "Search"}
      </button>
      {flights.length > 0 ? (
        <ul>
          {flights[0].pricings.map((flight: any, index: number) => (
            <li
              key={index}
              style={{
                color: "black",
                backgroundColor: "white",
                borderRadius: 25,
                padding: 25,
                marginBottom: 10,
              }}
            >
              <p>Carrier: {flight.carrier}</p>
              <p>Price per person: {flight.price}</p>
              <p>Total: {flight.price * passengers}</p>
              {/* <p style={{ color: "white" }}>Origin: {flight.origin}</p>
              <p style={{ color: "white" }}>
                Destination: {flight.destination}
              </p> */}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "white" }}>No flights found.</p>
      )}
    </div>
  );
}

export default App;
