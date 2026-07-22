import React from "react";

export function OddPlayers(props) {
    const [first, , third, , fifth] = props.team;

    return (
        <div>
            <ul>
                <li>First : {first}</li>
                <li>Third : {third}</li>
                <li>Fifth : {fifth}</li>
            </ul>
        </div>
    );
}

export function EvenPlayers(props) {
    const [, second, , fourth, , sixth] = props.team;

    return (
        <div>
            <ul>
                <li>Second : {second}</li>
                <li>Fourth : {fourth}</li>
                <li>Sixth : {sixth}</li>
            </ul>
        </div>
    );
}

const T20Players = [
    "First Player",
    "Second Player",
    "Third Player"
];

const RanjiTrophyPlayers = [
    "Fourth Player",
    "Fifth Player",
    "Sixth Player"
];

export const IndianPlayers = [
    ...T20Players,
    ...RanjiTrophyPlayers
];

export function ListofIndianPlayers(props) {
    return (
        <div>
            <ul>
                {props.IndianPlayers.map((player, index) => (
                    <li key={index}>Mr. {player}</li>
                ))}
            </ul>
        </div>
    );
}