import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavigationContext } from "../context/NavContext";
import "./Header.css";

import { ReactComponent as Shopping } from "../assets/shopping.svg";

const ROUTE = [
  {
    id: 0,
    to: "/",
    title: "Home",
  },
  {
    id: 1,
    to: "/detail",
    title: "Detail",
  },
];

export const Header = () => {
  const { activeIndex, setActiveIndex, data } = useContext(NavigationContext);

  return (
    <div>
      <div className="Header">
        <div>
          {ROUTE.map((item, index) => (
            <Link
              onClick={() => setActiveIndex(item.id)}
              className={`Link-${activeIndex === index}`}
              // style={{ color: activeIndex === index ? "white" : "coral" }}
              key={index}
              to={item.to}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <Link
          onClick={() => setActiveIndex(1)}
          to={"/detail"}
          className="badge"
        >
          <Shopping width={25} height={25} color="#ED9370" />
          {/* <Animated animationIn="bounceInDown" isVisible={true}> */}
          <span className="badgeItem">{data.length}</span>
          {/* </Animated> */}
        </Link>
      </div>
      {/* {GLOBAL_ROUTE.map((m) => (
        <Route to={m.to} element={m.component} />
      ))} */}
    </div>
  );
};
