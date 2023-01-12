import React from "react";
import { LeagueTable } from "../components";
import { Appbar } from "../components";

export default function League({ prevGames }) {
  return (
    <div className="app">
      <Appbar title="Premier League" url="logo192.svg" />
      <LeagueTable teams={prevGames} />;
    </div>
  );
}
