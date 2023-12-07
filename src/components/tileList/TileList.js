import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = ({ tileData }) => {
  return (
    <div>
      {tileData.map((tile, index) => {
        const { name, ...description } = tile;
        return <Tile key={index} name={name} description={description} />;
      })}
    </div>
  );
};
