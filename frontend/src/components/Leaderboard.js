import React, { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/leaderboard").then((res) => {
            setLeaders(res.data);
        });
    }, []);

    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <ul>
                {leaders.map((entry, idx) => (
                    <li key={idx}>
                        {entry.name} - ₹{entry.donations}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
