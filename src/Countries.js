import { useEffect, useState } from "react";

export const Countries = () => {
  const [data, setData] = useState([]);

  const countries = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    countries();
  }, []);

  return (
    <>
      <div className="container">
        <div>Country</div>
        <div>Native Name</div>
      </div>
      <hr />
      {Array.isArray(data) &&
        data.length > 0 &&
        data.map((item, index) => (
          <div key={index} className="container">
            <div style={{ textAlign: "left", width: 100, margin: "20px 0" }}>
              {item.name}
            </div>
            <div style={{ textAlign: "left", width: 100, margin: "20px 0" }}>
              {item.nativeName}
            </div>
          </div>
        ))}
    </>
  );
};
