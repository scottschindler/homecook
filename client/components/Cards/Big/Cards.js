import React, { useState, useEffect, useContext } from "react";
import { BigRecipeContext } from "../../../context/BigRecipeContext";
import { SmallRecipeContext } from "../../../context/SmallRecipeContext";
import Link from "next/link";
import BigCard from "../Big/Card";
import SmallCard from "../Small/Card.js";

const Cards = () => {
  const [bigRecipes, setBigRecipes] = useContext(BigRecipeContext);
  const [smallRecipes, setSmallRecipes] = useContext(SmallRecipeContext);

  return (
    <>
      <div className="all-cards">
        <div className="big-cards">
          {bigRecipes.map((attr, ind) => {
            return <BigCard attr={attr} key={ind} />;
          })}
        </div>
        <Link href="/recipe/[id]">
          <div className="small-cards">
            {smallRecipes.map((smallAttr, ind) => {
              return <SmallCard smallAttr={smallAttr} key={ind} />;
            })}
          </div>
        </Link>
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
