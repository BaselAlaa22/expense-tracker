import { useContext } from "react";
import { GlobalContext } from "../context";

function ListingSection() {
  //Context consumer
  const list = useContext(GlobalContext);

  return (
    <>
      {list.map((element) => {
        let style = "";
        if (element.amount < 0) {
          style = "minus";
        } else {
          style = "plus";
        }
        return (
          <li className={style}>
            {element.header} <span>${element.amount}</span>
            <button className="delete-btn">x</button>
          </li>
        );
      })}
    </>
  );
}

export default ListingSection;
