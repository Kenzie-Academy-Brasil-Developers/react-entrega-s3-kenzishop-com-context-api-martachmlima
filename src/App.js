import Routes from "./routes";
import { Toaster } from "react-hot-toast";
import PageHeader from "./components/Header";
import { MainContainer } from "./styles/style";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Toaster />
      <PageHeader />
      <MainContainer>
        <GlobalStyle />
        <Routes />
      </MainContainer>
    </>
  );
}

export default App;
