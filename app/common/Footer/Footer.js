"use client";

import { Footer } from "flowbite-react";
import {
  BsDribble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function FooterWith() {
  return (
    <Footer>
      <div className="w-full bg-slate-800 text-white p-3">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 items-center">
          <div>
            <h1 className=" text-4xl text-white font-mono font-semibold">
              Ak Jilani Cars Company
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title className="text-white" title="About " />
              <Footer.LinkGroup col>
                <Footer.Link className="footer-items hover:text-white" href="#">
                  BMW
                </Footer.Link>
                <Footer.Link className="footer-items hover:text-white" href="#">
                  Lamborghini
                </Footer.Link>
                <Footer.Link className="footer-items hover:text-white" href="#">
                  Audi
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-white" title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link className="footer-items hover:text-white" href="#">
                  Contact
                </Footer.Link>
                <Footer.Link className="footer-items hover:text-white" href="#">
                  0175555223
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-white" title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link className="footer-items hover:text-white" href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link className="footer-items hover:text-white" href="#">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            className=" text-white"
            by="Ak Jilani™"
            href="#"
            year={2022}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              className="footer-items hover:text-white"
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              className="footer-items hover:text-white"
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              className="footer-items hover:text-white"
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              className="footer-items hover:text-white"
              href="#"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
