import "./CharacterCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const CharacterCard = ({ src, name, status, gender }) => {
  return (
    <div className="CharacterCard">
      <LazyLoadImage
        effect="blur"
        delayMethod="debounce"
        alt={name}
        height={300}
        src={src}
        width={300}
        delayTime={20000}
      />
      <div className="CharacterCard-detail">
        <div className="CharacterCard-name">{name}</div>
        <div>{status}</div>
        <div
          style={{
            backgroundColor: gender === "Male" ? "#1476c1" : "#dc2699",
            color: "white",
            padding: "3px 7px",
            borderRadius: 7,
            marginLeft: 7,
          }}
        >
          {gender}
        </div>
      </div>
    </div>
  );
};
