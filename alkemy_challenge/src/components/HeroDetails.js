import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getHeroeInfoById } from "../services/apiCall";

const HeroDetails = () => {
  const [heroDetails, setHeroDetails] = useState(null);
  const { id } = useParams();

  useEffect(async () => {
    setHeroDetails(await getHeroeInfoById(id));
  }, []);

  return (
    heroDetails && (
        <>
      <div className="hero-details">
        <picture className="hero-details__image">
          <img src={heroDetails.data.image.url} alt={heroDetails.data.name} />
        </picture>
        <div className="hero-details__stats">
          <p className="hero-details__stats__name">{heroDetails.data.name}</p>
          <p className="hero-details__stats__info">
            Weight: {heroDetails.data.appearance.weight[1]}
          </p>
          <p className="hero-details__stats__info">
            Height: {heroDetails.data.appearance.height[1]}
          </p>
          <p className="hero-details__stats__info">
            Fullname: {heroDetails.data.biography["full-name"]}
          </p>
          <p className="hero-details__stats__info">
            First appearance: {heroDetails.data.biography["first-appearance"]}
          </p>
          <p className="hero-details__stats__info">
            Eyes color: {heroDetails.data.appearance["eye-color"]}
          </p>
          <p className="hero-details__stats__info">
            Hair color: {heroDetails.data.appearance["hair-color"]}
          </p>
          <p className="hero-details__stats__info">
            Workplace: {heroDetails.data.work.base}
          </p>
        </div>
      </div>
      <Link to={`/`}>Go back</Link>
      </>
    )
  );
};

export default HeroDetails;
