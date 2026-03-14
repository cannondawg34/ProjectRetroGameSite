import { HStack, Link, Text } from "@chakra-ui/react";
import React from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Games", path: "/games" },
  { label: "Sell", path: "/sell" },
  { label: "Sign In", path: "/signin" },
];

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.path}>
            {link.label}
          </Link>
        ))}
      </HStack>
    </>
  );
};

export default NavBar;
