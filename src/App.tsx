import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Layout from "./components/Layout/Layout";
import About from "./components/pages/About/About";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

interface AppProps {
  instance: PublicClientApplication;
}

function App({ instance }: AppProps) {
  return (
    <MsalProvider instance={instance}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </MsalProvider>
  );
}

export default App;
