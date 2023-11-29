import { useRef, useState } from "react";
import logo from "../../public/vite.svg";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linksStyle = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        {/* nav header  */}
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {/* nav links  */}
        <div className="links-container" style={linksStyle}>
          <ul className="links" ref={linksRef}>
            {links?.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* social icons  */}
        <div className="social-icons">
          {social?.map((socialIcon) => {
            return (
              <a key={socialIcon.id} href={socialIcon.url}>
                {socialIcon.icon}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
