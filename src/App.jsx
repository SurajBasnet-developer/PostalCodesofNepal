import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import PostalCode from "./components/PostalCode";

function App() {
  return (
    <ChakraProvider>
      <PostalCode />
    </ChakraProvider>
  );
}

export default App;
