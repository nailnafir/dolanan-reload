import Profile from "./profile";
import SideBarFooter from "./sidebar-footer";
import SideBarMenuItem from "./sidebar-menu-item";

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <SideBarMenuItem icon="overview" title="Overview" active />
          <SideBarMenuItem icon="transaction" title="Transactions" />
          <SideBarMenuItem icon="message" title="Messages" />
          <SideBarMenuItem icon="card" title="Card" />
          <SideBarMenuItem icon="reward" title="Rewards" />
          <SideBarMenuItem icon="setting" title="Settings" />
          <SideBarMenuItem icon="sign-out" title="Sign Out" />
        </div>
        <SideBarFooter />
      </div>
    </section>
  );
}
