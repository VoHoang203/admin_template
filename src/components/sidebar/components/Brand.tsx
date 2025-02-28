import React from "react";
import { Flex, useColorModeValue, Image } from "@chakra-ui/react";
import { HSeparator } from "components/separator/Separator";
import Logo from "../../../assets/img/logo.png";

export function SidebarBrand() {
  // Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align="center" direction="column">
      {/* Replace HorizonLogo with an Image */}
      <Image
        src={Logo} // Update with your actual image path
        alt="Logo"
        h="auto"
        w="50%"
        my="32px"
        filter={logoColor === "white" ? "invert(1)" : "none"} // Optionally apply filter for dark mode
      />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
