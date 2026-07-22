import React from "react";

function ListofPlayers(props) {

    const players70 = [];

    props.players.map((item) => {
        if (item.score <= 70) {
            players70.push(item);
        }
        return null;
    });

    return (
        <div>

            <ul>
                {
                    props.players.map((item) => (
                        <li key={item.name}>
                            Mr. {item.name} {item.score}
                        </li>
                    ))
                }
            </ul>

            <hr />

            <h1>List of Players having Scores Less than 70</h1>

            <ul>
                {
                    players70.map((item) => (
                        <li key={item.name}>
                            Mr. {item.name} {item.score}
                        </li>
                    ))
                }
            </ul>

        </div>
    );
}

export default ListofPlayers;