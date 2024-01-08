import { useContext } from "react";
import { useGlobalContext } from "../context";

function ListingSection() {
  //Context consumer
  const { value, updateValue } = useGlobalContext();

  function handleDeletebtn(id) {
    let updatedList = value.filter((element) => {
      return element.id != id;
    });
    updateValue(updatedList);
  }

  return (
    <>
      {value.map((element) => {
        let style = "";
        if (element.amount < 0) {
          style = "minus";
        } else {
          style = "plus";
        }
        return (
          <li className={style} key={element.id}>
            {element.header} <span>${element.amount}</span>
            <button
              className="delete-btn"
              onClick={() => {
                handleDeletebtn(element.id);
              }}
            >
              x
            </button>
          </li>
        );
      })}
    </>
  );
}

export default ListingSection;
