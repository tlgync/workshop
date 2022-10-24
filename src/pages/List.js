/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fetch } from "../components/Fetch";
import "./List.css";
import { ReactComponent as LeftArrow } from "../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../assets/right-arrow.svg";
import Loader from "../components/Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const List = () => {
  const page = localStorage.getItem("page");

  const [list, setList] = useState([]);
  const [info, setInfo] = useState({});
  const [initialPage, setInitialPage] = useState(page ? parseInt(page) : 1);
  const [isLoader, setIsLoader] = useState(true);

  const handleClick = (type) => {
    if (type) {
      localStorage.setItem("page", initialPage + 1);
      setInitialPage(initialPage + 1);
    } else {
      localStorage.setItem("page", initialPage - 1);
      setInitialPage(initialPage - 1);
    }
  };

  useEffect(() => {
    if (initialPage > 0) {
      Fetch(
        `https://rickandmortyapi.com/api/character/?page=${initialPage}`
      ).then((res) => {
        setInfo(res.info);
        setList(res.results);
      });
    }
  }, [initialPage]);

  useEffect(() => {
    if (list.length > 0) {
      setIsLoader(false);
    } else {
      setIsLoader(true);
    }
  }, [list]);

  return (
    <>
      {isLoader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <Loader />
        </div>
      ) : (
        <>
          <div className="Pagination">
            <div
              style={{
                pointerEvents: initialPage === 1 ? "none" : "all",
                cursor: "pointer",
              }}
              onClick={() => handleClick(false)}
            >
              <LeftArrow width={55} fill="#20c997" />
            </div>
            <div className="Pagesize">
              {initialPage}/{info.pages}
            </div>
            <div
              onClick={() => handleClick(true)}
              style={{ cursor: "pointer" }}
            >
              <RightArrow width={55} fill="#20c997" />
            </div>
          </div>
          <div className="List">
            {list.map((item, index) => (
              <Link
                to={{ pathname: `/detail/${item.id}`, state: { item } }}
                key={item.id}
                className={`List-Card`}
                style={{ cursor: "pointer" }}
              >
                <div style={{ position: "relative" }}>
                  <LazyLoadImage
                    effect="blur"
                    alt={name}
                    height={280}
                    src={item.image}
                    width={250}
                  />
                  <div className="List-Card-Species">{item.species}</div>
                </div>
                <div className="List-Card-Content">
                  <div className="List-Card-Content-Name">{item.name}</div>
                  <div className="List-Card-Content-Status">{item.status}</div>
                  <div className="List-Card-Content-TwoItems">
                    <div className="info-title">Last known location:</div>
                    <div className="info-label">{item.location.name}</div>
                  </div>
                  <div className="List-Card-Content-TwoItems">
                    <div className="info-title">First seen in:</div>
                    <div className="info-label">{item.location.name}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};
