import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../assets/left-arrow.svg";
import Loader from "../components/Loader";

export default function ListDetail() {
  const history = useHistory();
  const pathId = history.location.pathname.split("/")[2];

  const [item, setItem] = useState({});
  const [id, setId] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (pathId) {
      setId(pathId);
      setLoader(false);
    } else {
      setLoader(true);
    }
  }, [pathId]);

  useEffect(() => {
    if (history.location.state.item) {
      setItem(history.location.state.item);
      setLoader(false);
    } else {
      setLoader(true);
    }
  }, [history.location.state.item, id]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {loader ? (
        <Loader />
      ) : (
        <div className={`List-Card`}>
          <div
            style={{
              position: "absolute",
              top: -330,
              left: 0,
              cursor: "pointer",
            }}
            onClick={() => history.goBack()}
          >
            <LeftArrow width={55} fill="#20c997" />
          </div>
          <div style={{ position: "relative" }}>
            <LazyLoadImage
              effect="blur"
              alt={item.name}
              height={280}
              src={item?.image}
              width={250}
            />
            <div className="List-Card-Species">{item?.species}</div>
          </div>
          <div className="List-Card-Content">
            <div className="List-Card-Content-Name">{item?.name}</div>
            <div className="List-Card-Content-Status">{item?.status}</div>
            <div className="List-Card-Content-TwoItems">
              <div className="info-title">Last known location:</div>
              <div className="info-label">{item?.location?.name}</div>
            </div>
            <div className="List-Card-Content-TwoItems">
              <div className="info-title">First seen in:</div>
              <div className="info-label">{item?.location?.name}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
