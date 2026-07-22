import './App.css';
import ListofPlayers from './ListofPlayers';
import {
    OddPlayers,
    EvenPlayers,
    ListofIndianPlayers,
    IndianPlayers
} from './IndianPlayers';

function App() {

    const flag = false;

    const players = [
        { name: "Jack", score: 50 },
        { name: "Michael", score: 70 },
        { name: "John", score: 40 },
        { name: "Ann", score: 61 },
        { name: "Elisabeth", score: 61 },
        { name: "Sachin", score: 95 },
        { name: "Dhoni", score: 100 },
        { name: "Virat", score: 84 },
        { name: "Jadeja", score: 64 },
        { name: "Rohit", score: 75 },
        { name: "Raina", score: 80 }
    ];

    const IndianTeam = [
        "Sachin",
        "Sehwag",
        "Gambhir",
        "Kohli",
        "Dhoni",
        "Raina"
    ];

    if (flag) {
        return (
            <div>
                <h1>List of Players</h1>
                <ListofPlayers players={players} />
            </div>
        );
    }

    return (
        <div>
            <h1>Odd Players</h1>
            <OddPlayers team={IndianTeam} />

            <hr />

            <h1>Even Players</h1>
            <EvenPlayers team={IndianTeam} />

            <hr />

            <h1>List of Indian Players Merged</h1>
            <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
    );
}

export default App;