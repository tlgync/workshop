import { useContext } from "react";
import { NavigationContext } from "../context/NavContext";
import "./Home.css";
const ITEM = [
  {
    id: 0,
    name: "MSI",
    price: 1000,
    img: "https://productimages.hepsiburada.net/s/40/375/10660707827762.jpg",
  },
  {
    id: 1,
    name: "Macbook Pro",
    price: 1200,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-select-202110_GEO_TR?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633657730000",
  },
  {
    id: 2,
    name: "Monster",
    price: 1500,
    img: "https://cdn.akakce.com/z/monster/monster-abra-a5-v17-2-i511400h-8-gb-500-gb-ssd-rtx3050ti-15-6-full-hd-notebook.jpg",
  },
];

export const Home = () => {
  const { data, setData } = useContext(NavigationContext);

  const handleAdd = (m) => {
    const selectedItem = data.filter((f) => f.name === m.name);
    if (selectedItem.length < 3) {
      setData([...data, m]);
    }
  };
  return (
    <div className="content">
      {ITEM.map((m, index) => (
        <div key={index} className="item">
          <img src={m.img} alt={m.name} />
          <div className="detail">
            <div>{m.name}</div>
            <div>{m.price}</div>
          </div>
          <div onClick={() => handleAdd(m)} className="addBtn">
            Add
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
