import { useContext, useEffect, useState } from "react";
import { NavigationContext } from "../context/NavContext";
import "./Detail.css";

export const Detail = () => {
  const [sum, setSum] = useState(0);
  const { data, setData } = useContext(NavigationContext);

  useEffect(() => {
    const newSum = data.map((m) => m.price);
    if (newSum.length > 0) {
      setSum(newSum.reduce((a, b) => a + b));
    }
  }, [data]);

  const removeItem = (item) => {
    const newData = data;
    const index = newData.indexOf(item);
    if (index > -1) {
      newData.splice(index, 1);
    }
    if (newData) {
      setData([...newData]);
    }
  };

  return data.length > 0 ? (
    <div className="shopping-card">
      {data.map((item, index) => (
        <div key={index} className="cardItem">
          <div className="item">
            <div
              onClick={() => removeItem(item)}
              style={{ fontSize: 21, cursor: "pointer" }}
            >
              -
            </div>
            <div>{item.name}</div>
          </div>
          <div>{item.price} $</div>
        </div>
      ))}
      <hr />
      <div className="cardItem">
        <div style={{ marginLeft: 35 }}>Toplam :</div>
        <div>{sum} $</div>
      </div>
    </div>
  ) : null;
};

export default Detail;

// Her gelen coklu itemi tek goster sayisini yaninda goster
