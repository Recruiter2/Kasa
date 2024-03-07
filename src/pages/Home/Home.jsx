import React, { useState, useEffect } from 'react';
import './home.css';

function Home() {
  // Define a variable to hold the vacation spots
  const [spots, setSpots] = useState([]);

  // When the page loads, set the vacation spots
  useEffect(() => {
    // Pretend we have a list of vacation spots already stored
    const fakeData = ['Beach', 'Mountain', 'City'];
    setSpots(fakeData);
  }, []);

  // Log the vacation spots to the console
  console.log(spots);

  return (
    <div>
      <h1>Welcome to the Vacation Spots Page!</h1>
      {/* Display the vacation spots */}
      <ul>
        {spots.map((spot, index) => (
          <li key={index}>{spot}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;