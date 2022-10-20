import React, { useState } from "react";

const NavigationContext = React.createContext();
const NavConsumer = NavigationContext.Consumer;

const NavProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1)

  return (
    <NavigationContext.Provider
      value={{ activeIndex, setActiveIndex, data, setData, count, setCount }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavConsumer, NavProvider };
