import React from "react";
import styled from "styled-components";
import favicon from "../../public/favicon.ico";
import Image from "next/image";
import Link from "next/link";

const StyledNavbar = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 2em;
`;

const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
      <Link href="/">
        <a>
          <Image src={favicon} alt="logo" width="40" height="40" />
        </a>
      </Link>
    </StyledNavbar>
  );
};

export default Navbar;
