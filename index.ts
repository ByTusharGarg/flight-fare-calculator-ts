import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
app.use(express.static("flight-app/build"));
// Simulated flight data
const pricings = [
  {
    carrier: "indigo",
    price: 1614,
  },
  { carrier: "airAsia", price: 1869 },
  { carrier: "vistara", price: 2133 },
];
const flights = [
  { id: 1, origin: "City A", destination: "City B", pricings },
  { id: 2, origin: "City A", destination: "City C", pricings },
  { id: 3, origin: "City A", destination: "City D", pricings },

  { id: 4, origin: "City B", destination: "City A", pricings },
  { id: 5, origin: "City B", destination: "City C", pricings },
  { id: 6, origin: "City B", destination: "City D", pricings },

  { id: 7, origin: "City C", destination: "City A", pricings },
  { id: 8, origin: "City C", destination: "City B", pricings },
  { id: 9, origin: "City C", destination: "City D", pricings },

  { id: 10, origin: "City D", destination: "City A", pricings },
  { id: 11, origin: "City D", destination: "City B", pricings },
  { id: 12, origin: "City D", destination: "City C", pricings },
];
app.use(cors());

app.get("/api/flights", (req: Request, res: Response) => {
  const { origin, destination } = req.query;

  // Filter flights based on origin and destination
  const filteredFlights = flights.filter((flight) => {
    if (
      typeof flight.origin === "string" &&
      typeof flight.destination === "string" &&
      typeof origin === "string" &&
      typeof destination === "string"
    ) {
      return (
        flight.origin.toLowerCase() === origin.toLowerCase() &&
        flight.destination.toLowerCase() === destination.toLowerCase()
      );
    } else {
      return false;
    }
  });

  return res.json(filteredFlights);
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
