import ListingSection from "./ListingSection";

function TransactionList() {
  return (
    <>
      <h3>History</h3>
      <ul className="list" id="list">
        <ListingSection />
      </ul>
    </>
  );
}

export default TransactionList;
