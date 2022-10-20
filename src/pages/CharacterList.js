import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CharacterCard } from "../components/CharacterCard";
import { NavigationContext } from "../context/NavContext";

import "./CharacterList.css";

export const CharacterList = ({ list, setList }) => {
  const [infinitiFlag, setInfinitiFlag] = useState(true);
  const [isLoaderShow, setIsLoaderShow] = useState(true);
  const loader = useRef(null);
  const { count, setCount } = useContext(NavigationContext);
  console.log(count, "COUNT");

  const getCharacterList = useCallback(async () => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${count}`
    );
    const result = await res.json();
    if (result) {
      setCount(count + 1);
      if (list.length > 0) {
        setList(list.concat(result.results));
      }
    }
  }, [count]);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        getCharacterList(list);
      }
    },
    [getCharacterList, list]
  );

  // scroll option
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver, isLoaderShow]);

  useEffect(() => {
    setIsLoaderShow(infinitiFlag);
  }, [infinitiFlag]);

  return (
    <div className="CharacterList">
      {list.map((m) => (
        <Link key={m.id} to={`/detail/${m.id}`}>
          <CharacterCard
            src={m.image}
            name={m.name}
            gender={m.gender}
            status={m.status}
          />
        </Link>
      ))}
      {isLoaderShow && <div ref={loader} />}
      {/* <Link to={"/detail/123"}>Detail</Link> */}
    </div>
  );
};
