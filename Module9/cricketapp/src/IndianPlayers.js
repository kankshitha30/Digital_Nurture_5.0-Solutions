function IndianPlayers() {

    const players = [
        "Virat",
        "Rohit",
        "Gill",
        "Rahul",
        "Hardik",
        "Jadeja"
    ];

    const oddPlayers = players.filter((player, index) => index % 2 === 0);

    const evenPlayers = players.filter((player, index) => index % 2 !== 0);

    const T20Players = [
        "Surya",
        "Rinku",
        "Tilak"
    ];

    const RanjiPlayers = [
        "Pujara",
        "Rahane",
        "Sarfaraz"
    ];

    const mergedPlayers = [...T20Players, ...RanjiPlayers];

    return (

        <div>

            <h1>Odd Team Players</h1>

            <ul>
                {oddPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h1>Even Team Players</h1>

            <ul>
                {evenPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h1>Merged Players</h1>

            <ul>
                {mergedPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

        </div>

    );
}

export default IndianPlayers;