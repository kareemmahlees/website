"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { FC } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

const theme = extendTheme({
  styles: {
    global: null,
  },
});

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider resetCSS={false} theme={theme}>
        {children}{" "}
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
