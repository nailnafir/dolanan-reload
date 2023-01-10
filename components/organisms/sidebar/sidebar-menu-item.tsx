import classNames from "classnames";
import Image from "next/image";

interface SideBarMenuItemProps {
  icon: string;
  title: string;
  active?: boolean;
}

export default function SideBarMenuItem(props: Partial<SideBarMenuItemProps>) {
  const { icon, title, active } = props;
  const classItem = classNames({
    item: true,
    "mb-30": true,
    active: active,
  });

  return (
    <div className={classItem}>
      <Image
        src={`icon/sidebar-menu/${icon}.svg`}
        alt="overview"
        width={25}
        height={25}
        className="me-3"
      />
      <p className="item-title m-0">
        <a href="" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}
