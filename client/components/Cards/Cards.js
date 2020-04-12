import React, { useState, useEffect, useContext } from "react";
import { BigRecipeContext } from "../../context/BigRecipeContext";

import BigCard from "./BigCard";

const Cards = () => {
  const [bigRecipes, setBigRecipes] = useContext(BigRecipeContext);

  return (
    <>
      <div className="all-cards">
        <div className="big-cards">
          {bigRecipes.slice(0, 2).map((attr, ind) => {
            return <BigCard attr={attr} key={ind} />;
          })}
        </div>
        <div className="small-cards">
          {bigRecipes.slice(2).map((attr, ind) => {
            return <BigCard attr={attr} key={ind} />;
          })}
        </div>
      </div>
      <style jsx>{`
        .all-cards {
          display: flex;
          flex-direction: column;
        }
        .big-cards {
          display: flex;
          margin: 2rem;
        }
        .small-cards {
          display: flex;
          padding-bottom: 5rem;
          margin: 2rem;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
};

export default Cards;
