import React from "react";
import { insightType } from "./common";

type CardProps = {
  e: insightType;
};
export default function CardComponent({ e }: CardProps) {
  return (
    <div className="card">
      <img src={e.mediaUrls[0]} alt={e.title} />
      <div className="card-content">
        <h3>{e.title}</h3>
        <p>{e.url}</p>
      </div>
    </div>
  );
}
