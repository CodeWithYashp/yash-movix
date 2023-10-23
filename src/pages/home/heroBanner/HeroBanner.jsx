import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./heroBanner.scss";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url?.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const onClickSearchHandler = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="hero-banner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="hero-banner-content">
          <span className="title">Welcome.</span>
          <span className="subtitle">
            Millions of Movies, TV shows and people to discover. Explore now.
          </span>
          <div className="search-input">
            <input
              type="text"
              value={query}
              placeholder="Search for a movie or a tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={(e) => searchQueryHandler(e)}
            />
            <button onClick={onClickSearchHandler}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
