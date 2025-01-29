import Image from "next/image";
import Logomark from "../app/logos/Logomark.png";

export default function  Navbar() {
  return(
      <div className="navbar bg-slate-950" data-theme="dark">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              <li><a>Our Impact</a></li>
              <li><a>Thematic Areas</a></li>
              <li><a>Partners</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
            <a className="btn btn-ghost text-xl"><Image src={Logomark} width={75} height={75} alt="SEFOCHA"/></a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>Our Impact</a></li>
                <li><a>Thematic Areas</a></li>
                <li><a>Partners</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
          <div className="navbar-end">
              <a className="btn">Donate</a>
          </div>
      </div>
  );
}