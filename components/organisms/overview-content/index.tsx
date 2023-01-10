import Category from "./category";
import TableRow from "./table-row";

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="d-flex justify-content-between">
              <Category nominal={18500000} icon="category-desktop">
                Game
                <br />
                Desktop
              </Category>
              <Category nominal={5300000} icon="category-mobile">
                Game
                <br />
                Mobile
              </Category>
              <Category nominal={1500000} icon="category-console">
                Game
                <br />
                Console
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  gameImage="overview-1"
                  gameName="Mobile Legends: The New Battle 2023"
                  category="Mobile"
                  gameItem={800}
                  priceItem={350000}
                  statusItem="Success"
                />
                <TableRow
                  gameImage="overview-2"
                  gameName="Call of Duty: Modern Warfare"
                  category="Desktop"
                  gameItem={350}
                  priceItem={580000}
                  statusItem="Success"
                />
                <TableRow
                  gameImage="overview-3"
                  gameName="Clash of Clans"
                  category="Mobile"
                  gameItem={100}
                  priceItem={150000}
                  statusItem="Failed"
                />
                <TableRow
                  gameImage="overview-4"
                  gameName="Valorant"
                  category="Desktop"
                  gameItem={225}
                  priceItem={850000}
                  statusItem="Pending"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
