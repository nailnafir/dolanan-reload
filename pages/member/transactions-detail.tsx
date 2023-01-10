import Link from "next/link";
import RowItem from "../../components/molecules/row-item";
import SideBar from "../../components/organisms/sidebar";

export default function TransactionsDetail() {
  return (
    <>
      <section className="transactions-detail overflow-auto">
        <SideBar activeMenu="transactions" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">
              Details #GG001
            </h2>
            <div className="details">
              <div className="main-content main-content-card overflow-auto">
                <section className="checkout mx-auto">
                  <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                    <div className="game-checkout d-flex flex-row align-items-center">
                      <div className="pe-4">
                        <div className="cropped">
                          <img
                            src="/img/Thumbnail-3.png"
                            width="200"
                            height="130"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <p className="fw-bold text-xl color-palette-1 mb-10">
                          Mobile Legends:
                          <br /> The New Battle 2023
                        </p>
                        <p className="color-palette-2 m-0">Category: Mobile</p>
                      </div>
                    </div>
                    <div>
                      <p className="fw-medium text-center label pending m-0 rounded-pill">
                        Pending
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="purchase pt-30">
                    <h2 className="fw-bold text-xl color-palette-1 mb-20">
                      Purchase Details
                    </h2>
                    <RowItem label="Your Game ID" value="DiamondRA" />
                    <RowItem label="Order ID" value="#GGWP001" />
                    <RowItem label="Item" value="250 Diamonds" />
                    <RowItem label="Price" value={3500000} />
                    <RowItem label="Tax 10%" value={350000} />
                    <RowItem
                      label="Total"
                      value={3500000 + 350000}
                      className="color-palette-4"
                    />
                  </div>
                  <div className="payment pt-10 pb-10">
                    <h2 className="fw-bold text-xl color-palette-1 mb-20">
                      Payment Informations
                    </h2>
                    <RowItem label="Your Account Name" value="CallMe-Diamond" />
                    <RowItem label="Payment Type" value="Worldwide Transfer" />
                    <RowItem
                      label="Bank Name"
                      value="Mandiri"
                      className="color-palette-4"
                    />
                    <RowItem
                      label="Bank Account Name"
                      value="PT Dolanan Reload Indonesia"
                      className="color-palette-4"
                    />
                    <RowItem
                      label="Bank Number"
                      value="1800 - 8080 - 2023"
                      className="color-palette-4"
                    />
                  </div>
                  <div className="d-md-block d-flex flex-column w-100">
                    <Link
                      className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                      href="/complete-checkout"
                      role="button"
                    >
                      Confirm Pay
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
