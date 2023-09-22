import { Route, Routes } from "react-router";
import "./App.css";
import Todo from "./Components/Todo";
// import  Customdiv  from "./Components/Customdiv";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <div>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Routes>
          <Route path={"/"} element={<Todo />} />
          
        </Routes>
      </MantineProvider>
    </div>
  );
}

export default App;
