import { ConfigProvider, theme as antdTheme } from "antd";
import { BrowserRouter } from "react-router-dom";
import MasterLayout from "./components/MasterLayout";
import Pages from "./components/Pages";
import { CompareContextProvider } from "./contexts/CompareProd";
import { NotificationProvider } from "./contexts/NotificationProvider";
import SiderLocker from "./contexts/SiderLock";
import theme from "./theme/theme.antd";

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider theme={{ ...theme, algorithm: antdTheme.darkAlgorithm }}>
        <NotificationProvider>
          <SiderLocker>
            <MasterLayout>
              <CompareContextProvider>
                <Pages />
              </CompareContextProvider>
            </MasterLayout>
          </SiderLocker>
        </NotificationProvider>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
