import Profile from "./profile";
import SideBarFooter from "./sidebar-footer";
import SideBarMenuItem from "./sidebar-menu-item";

interface SideBarProps {
  activeMenu:
    | "overview"
    | "transactions"
    | "messages"
    | "card"
    | "rewards"
    | "settings";
}

export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <SideBarMenuItem
            targetLink="/member"
            icon="overview"
            title="Overview"
            active={activeMenu === "overview"}
          />
          <SideBarMenuItem
            targetLink="/member/transactions"
            icon="transaction"
            title="Transactions"
            active={activeMenu === "transactions"}
          />
          <SideBarMenuItem
            targetLink="/messages"
            icon="message"
            title="Messages"
            active={activeMenu === "messages"}
          />
          <SideBarMenuItem
            targetLink="/card"
            icon="card"
            title="Card"
            active={activeMenu === "card"}
          />
          <SideBarMenuItem
            targetLink="/rewards"
            icon="reward"
            title="Rewards"
            active={activeMenu === "rewards"}
          />
          <SideBarMenuItem
            targetLink="/member/edit-profile"
            icon="setting"
            title="Settings"
            active={activeMenu === "settings"}
          />
          <SideBarMenuItem
            targetLink="/sign-in"
            icon="sign-out"
            title="Sign Out"
          />
        </div>
        <SideBarFooter />
      </div>
    </section>
  );
}
