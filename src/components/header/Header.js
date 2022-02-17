import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Home
      </Link>
      <Link href="/videos" className="item">
        Videos
      </Link>
      <Link href="/wikisearch" className="item">
        Wiki Search
      </Link>
    </div>
  );
};

export default Header;
