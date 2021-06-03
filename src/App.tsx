import * as React from "react";
import {
  AspectRatio,
  ChakraProvider,
  Box,
  Button,
  Grid
} from "@chakra-ui/react";
import { motion, AnimateSharedLayout } from "framer-motion";

const AspectRatioGrid = motion(AspectRatio);

const areaOne = `
  "a b"
`;

const areaTwo = `
  "a"
  "b"
`;

export default function App() {
  const [area, setArea] = React.useState(areaOne);
  const [isHalfPage, setIsHalfPage] = React.useState(false);

  return (
    <ChakraProvider>
      <Box bg="tomato" w="full" h="100vh">
        <Button
          onClick={() => {
            setIsHalfPage(!isHalfPage);
            setArea(!isHalfPage ? areaTwo : areaOne);
          }}
        >
          Open
        </Button>
        <AnimateSharedLayout>
          <Grid
            w={isHalfPage ? "50%" : "100%"}
            h="100vh"
            p={isHalfPage ? "64px" : "128px"}
            alignItems="center"
            gridGap="8"
            gridTemplateAreas={area}
          >
            <AspectRatioGrid
              layout
              animate={{ height: "500px" }}
              gridArea="a"
              id="container-host"
              ratio={{ base: 1 / 1.3, lg: isHalfPage ? 18 / 9 : 16 / 9 }}
              w={{ base: "24", md: "40", lg: "auto" }}
              borderRadius="md"
              mt={{ base: "4", md: "8", lg: "0" }}
              mr={{ base: "4", md: "8", lg: "0" }}
              zIndex={{ base: "overlay", lg: "unset" }}
              position={{ base: "fixed", lg: "relative" }}
              top="0"
              right="0"
            >
              <iframe
                title="naruto"
                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                allowFullScreen
                style={{ borderRadius: "1rem" }}
              />
            </AspectRatioGrid>

            <AspectRatioGrid
              layout
              animate={{ height: "500px" }}
              gridArea="b"
              id="container-host"
              ratio={{ base: 1 / 1.3, lg: isHalfPage ? 18 / 9 : 16 / 9 }}
              w={{ base: "24", md: "40", lg: "auto" }}
              borderRadius="md"
              mt={{ base: "4", md: "8", lg: "0" }}
              mr={{ base: "4", md: "8", lg: "0" }}
              zIndex={{ base: "overlay", lg: "unset" }}
              position={{ base: "fixed", lg: "relative" }}
              top="0"
              right="0"
            >
              <iframe
                title="naruto"
                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                allowFullScreen
                style={{ borderRadius: "1rem" }}
              />
            </AspectRatioGrid>
          </Grid>
        </AnimateSharedLayout>
      </Box>
    </ChakraProvider>
  );
}
