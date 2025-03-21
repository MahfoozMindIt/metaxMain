import { useEffect, useState } from "react";
import axios from "axios";

const RestaurantFinder = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        console.log("📍 Location:", lat, lng); // Debugging

        const query = `
          [out:json];
          node
            [amenity=restaurant]
            (around:6000,${lat},${lng});
          out 50;
        `;

        try {
          const response = await axios.get("https://overpass-api.de/api/interpreter", {
            params: { data: query }
          });

          console.log("📡 API Response:", response.data); // Debugging

          if (response.data.elements && response.data.elements.length > 0) {
            setRestaurants(response.data.elements);
          } else {
            setError("No restaurants found.");
          }
        } catch (err) {
          console.error("❌ Error fetching restaurants:", err);
          setError("Failed to fetch restaurants.");
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        console.error("❌ Geolocation error:", err);
        setError("Failed to get location. Please enable location access.");
        setLoading(false);
      }
    );
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Nearby Restaurants</h2>
      {restaurants.length > 0 ? (
        <ul>
          {restaurants.slice(0, 10).map((restaurant) => (
            <li key={restaurant.id}>
              <strong>{restaurant.tags?.name || "Unnamed Restaurant"}</strong> — 
              ({restaurant.lat}, {restaurant.lon})
            </li>
          ))}
        </ul>
      ) : (
        <p>No restaurants found.</p>
      )}
    </div>
  );
};

export default RestaurantFinder;
