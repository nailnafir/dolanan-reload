import ButtonTab from "./buttonTab";
import TableRow from "./table-row";

export default function TransactionContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          My Transactions
        </h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You Have spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            Rp 4.518.000.500
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab title="All" active={true} />
              <ButtonTab title="Success" active={false} />
              <ButtonTab title="Pending" active={false} />
              <ButtonTab title="Failed" active={false} />
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
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
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
