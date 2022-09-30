/** @jsxImportSource @emotion/react */
import Converter from "./components/Converter";
import Header from "./components/Header";

function App() {
  return (
    <div class="flex flex-col w-full">
      <Header />
      <Converter />
    </div>
  );
}

export default App;
