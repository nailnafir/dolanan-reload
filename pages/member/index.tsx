import OverviewContent from "../../components/organisms/overview-content";
import SideBar from "../../components/organisms/sidebar";

export default function Member() {
  return (
    <>
      <section className="overview overflow-auto">
        <SideBar />
        <OverviewContent />
      </section>
    </>
  );
}
