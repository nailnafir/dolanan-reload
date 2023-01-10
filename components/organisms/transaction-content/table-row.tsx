import classNames from "classnames";
import Link from "next/link";

interface TableRowProps {
  gameImage: string;
  gameName: string;
  category: "Desktop" | "Mobile" | "Console";
  gameItem: number;
  priceItem: number;
  statusItem: "Success" | "Pending" | "Failed";
}

export default function TableRow(props: TableRowProps) {
  const { gameImage, gameName, category, gameItem, priceItem, statusItem } =
    props;
  const statusClass = classNames({
    "float-start icon-status": true,
    pending: statusItem === "Pending",
    success: statusItem === "Success",
    failed: statusItem === "Failed",
  });
  return (
    <tr data-category="pending" className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${gameImage}.png`}
          width={80}
          height={60}
          alt="game"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {gameName}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{gameItem} Gold</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">{priceItem}</p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {statusItem}
          </p>
        </div>
      </td>
      <td>
        <Link
          href="/member/transactions-detail"
          className="btn btn-status rounded-pill text-sm"
        >
          Details
        </Link>
      </td>
    </tr>
  );
}
