import Image from "next/image";
import Link from "next/link";
import DataLink from "./data-link";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="" className="mb-30">
                <Image src="/icon/logo.svg" alt="logo" width={60} height={60} />
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Dolanan Reload membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2023. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    <DataLink titleLink="About Us" targetLink="" />
                    <DataLink titleLink="Press Release" targetLink="" />
                    <DataLink titleLink="Terms of Use" targetLink="" />
                    <DataLink titleLink="Privacy & Policy" targetLink="" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    <DataLink titleLink="Rate Us" targetLink="" />
                    <DataLink titleLink="Refund Policy" targetLink="" />
                    <DataLink titleLink="Unlock Rewards" targetLink="" />
                    <DataLink titleLink="Live Chatting" targetLink="" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    <DataLink
                      titleLink="hi@dolanan-reload.gg"
                      targetLink="mailto: hi@dolanan-reload.gg"
                    />
                    <DataLink
                      titleLink="team@dolanan-reload.gg"
                      targetLink="mailto: team@dolanan-reload.gg"
                    />
                    <DataLink
                      titleLink="Ciledug, Tangerang"
                      targetLink="http://maps.google.com/?q=Ciledug,
                                        Tangerang"
                    />
                    <DataLink
                      titleLink="0812 - 0088 - 8800"
                      targetLink="tel: 081200888800"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
