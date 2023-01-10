import SideBar from "../../components/organisms/sidebar";
import TransactionContent from "../../components/organisms/transaction-content";

export default function Transactions() {
  return (
    <>
      <section className="transactions overflow-auto">
        <SideBar activeMenu="transactions" />
        <TransactionContent />
      </section>
    </>
  );
}
