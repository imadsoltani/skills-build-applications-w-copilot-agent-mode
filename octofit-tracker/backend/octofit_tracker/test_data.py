test_data = {
    "users": [
        {"username": "john_doe", "email": "john_doe@example.com", "password": "password123"},
        {"username": "jane_smith", "email": "jane_smith@example.com", "password": "password123"},
        {"username": "alice_wonder", "email": "alice_wonder@example.com", "password": "password123"},
    ],
    "teams": [
        {"name": "Team Alpha", "members": ["john_doe", "jane_smith"]},
        {"name": "Team Beta", "members": ["alice_wonder"]},
    ],
    "activities": [
        {"user": "john_doe", "activity_type": "Running", "duration": "00:30:00"},
        {"user": "jane_smith", "activity_type": "Cycling", "duration": "01:00:00"},
        {"user": "alice_wonder", "activity_type": "Swimming", "duration": "00:45:00"},
    ],
    "leaderboard": [
        {"user": "john_doe", "score": 100},
        {"user": "jane_smith", "score": 90},
        {"user": "alice_wonder", "score": 95},
    ],
    "workouts": [
        {"name": "Morning Run", "description": "A quick morning run to start the day."},
        {"name": "Evening Cycle", "description": "Cycling session in the evening."},
        {"name": "Swimming Practice", "description": "Swimming practice for endurance."},
    ],
}