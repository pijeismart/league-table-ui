import React from "react";
import { useNavigate } from "react-router-dom";

export default function LeagueItem({ data }) {
  const navigate = useNavigate();
  return (
    <tr
      className="table-row"
      onClick={() => {
        navigate(`/${data.team}`);
      }}
    >
      {Object.keys(data).map((key, index) => (
        <td key={`td-${key}-${index}}`}>{data[key]}</td>
      ))}
    </tr>
  );
}
