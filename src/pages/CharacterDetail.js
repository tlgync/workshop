import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BackArrow from "../assets/BackArrow";
import "./CharacterDetail.css";

export const CharacterDetail = ({ list }) => {
  const [detail, setDetail] = useState({});
  const history = useHistory();
  const id = history.location.pathname.split("/")[2];

  useEffect(() => {
    if (Array.isArray(list) && list.length > 0) {
      setDetail(list.find((f) => f.id === parseInt(id)));
    }
  }, [id, list]);

  return (
    <div className="CharacterDetail">
      <div>
        <div className="CharacterDetail-card">
          <div>
            <img src={detail.image} alt={detail.name} />
          </div>
          <div className="CharacterDetail-title">
            <div>{detail.name}</div>
            <div>{detail.gender}</div>
            <div>{detail.status}</div>
          </div>
          <div className="svgArrow" onClick={() => history.goBack()}>
            <BackArrow width={25} height={25} />
          </div>
        </div>
      </div>
    </div>
  );
};
