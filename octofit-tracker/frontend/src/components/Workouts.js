import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://supreme-rotary-phone-qjrq47957jp2x4r5-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data));
  }, []);

  return (
    <div>
      <h1>Workouts</h1>
      <ul>
        {workouts.map(workout => (
          <li key={workout._id}>{workout.name} - {workout.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;