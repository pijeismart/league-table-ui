import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { isBefore, parseISO } from "date-fns";
import { data } from "./data";
import { now } from "./constants";
import { initializeTeam, updateTeamData } from "./utils";
import { League, Fixture } from "./pages";
import "./styles/main.scss"

function App() {
  const prevGames = data
    .filter((game) => isBefore(parseISO(game.date), now))
    .reduce((prev, { score }) => {
      Object.keys(score).forEach((teamName) => {
        prev[teamName] = initializeTeam(prev, teamName);
      });

      return updateTeamData(prev, score);
    }, {});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<League prevGames={prevGames} />} />
        <Route path="/:club" element={<Fixture data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
