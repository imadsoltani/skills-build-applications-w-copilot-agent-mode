import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://supreme-rotary-phone-qjrq47957jp2x4r5-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data));
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {leaderboard.map(entry => (
          <li key={entry._id}>{entry.user.username} - {entry.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;