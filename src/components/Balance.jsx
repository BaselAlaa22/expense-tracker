import { useGlobalContext } from "../context";

function Balance() {
  const { value } = useGlobalContext();
  var balance = 0;
  value.forEach((element) => {
    balance += element.amount;
  });
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${balance}</h1>
    </>
  );
}

export default Balance;
