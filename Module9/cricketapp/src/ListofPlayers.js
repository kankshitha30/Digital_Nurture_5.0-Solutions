function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 135 },
        { name: "Rohit Sharma", score: 102 },
        { name: "Shubman Gill", score: 68 },
        { name: "KL Rahul", score: 74 },
        { name: "Hardik Pandya", score: 65 },
        { name: "Ravindra Jadeja", score: 59 },
        { name: "R Ashwin", score: 45 },
        { name: "Mohammed Shami", score: 23 },
        { name: "Jasprit Bumrah", score: 25 },
        { name: "Mohammed Siraj", score: 17 },
        { name: "Kuldeep Yadav", score: 8 }
    ];

    const below70 = players.filter(player => player.score < 70);

    return (
        <div>

            <h1>List of Players</h1>

            <ul>
                {
                    players.map((player, index) => (
                        <li key={index}>
                            {player.name} - {player.score}
                        </li>
                    ))
                }
            </ul>

            <h2>Players with score below 70</h2>

            <ul>
                {
                    below70.map((player, index) => (
                        <li key={index}>
                            {player.name} - {player.score}
                        </li>
                    ))
                }
            </ul>

        </div>
    );
}

export default ListofPlayers;