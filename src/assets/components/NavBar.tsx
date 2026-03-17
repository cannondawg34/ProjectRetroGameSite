import { Box, HStack, Link } from "@chakra-ui/react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Games", path: "/games" },
  { label: "Sell", path: "/sell" },
  { label: "Sign In", path: "/signin" },
];

const NavBar = () => {
  return (
    <Box w="100%" py={3}>
      <HStack
        maxW="900px"
        mx="auto"
        justify="center"
        gap={40}
      >
        {navLinks.map((link) => (
          <Link key={link.label} href={link.path}>
            {link.label}
          </Link>
        ))}
      </HStack>
    </Box>
  );
};

export default NavBar;