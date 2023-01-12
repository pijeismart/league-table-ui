import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import format from "date-fns/format";
import { Appbar } from "../components";

export default function Fixture({ data }) {
  const navigate = useNavigate();
  const { club } = useParams();
  const fixtureList = data
    .filter((game) => Object.keys(game.score).includes(club))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  return (
    <div className="fixture">
      <Appbar title="Fixture" url="watch.png" />
      <div className="container">
        <div className="fixture-club">
          <img src="mancity.svg" alt="mancity" />
          <h2>{club}</h2>
        </div>
        <div className="fixture-items">
          {fixtureList.map((game, index) => (
            <div className="fixture-item" key={`fixture-${index}`}>
              <div className="fixture-item__team">
                <div className="left">
                  <div className="left-row">
                    <img src="mancity.svg" alt="" />
                    <span>{Object.keys(game.score)[0]}</span>
                  </div>
                  <div className="left-row">
                    <img src="mancity.svg" alt="" />
                    <span>{Object.keys(game.score)[1]}</span>
                  </div>
                </div>
                <div className="right">
                  <span>
                    {format(new Date(game.date), ["d", "MMMM", "y"])
                    .split(",")
                    .join(" ")}
                  </span>
                  <span>
                    {format(new Date(game.date), ["HH", "mm"]).split(",").join(":")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn" onClick={() => navigate("/")}>League</button>
      </div>
    </div>
  );
}
