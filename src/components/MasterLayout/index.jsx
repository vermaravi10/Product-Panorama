import React, { useEffect, useState } from "react";

import { Layout, Menu, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import useLocker from "../../contexts/SiderLock/useLocker";
import ExpandSiderIcon from "../icons/ExpandIcon";
import CollapseSiderIcon from "../icons/collapseIcon";
import Topbar from "./Topbar";
import { CollapseToggleContainer, Container, SiderX } from "./style";
import { getItemByKey, items } from "./util";

const { Content } = Layout;
const { Text } = Typography;

const MasterLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { lock, setLocker } = useLocker();
  const [currentItemKey, setCurrentItemKey] = useState(["products"]);
  const [openItemKey, setOpenItemKey] = useState([]);

  useEffect(() => {
    const { pathname: currentUrl } = location;

    const navItem = getItemByKey(currentUrl, "url", items);

    if (navItem?.keyPath?.length) {
      setOpenItemKey(navItem?.keyPath);
      setCurrentItemKey(navItem?.keyPath);
    }
  }, [location?.pathname]);

  useEffect(() => {
    if (!lock) {
      setCollapsed(true);
    } else setCollapsed(false);
  }, [lock]);

  const handleNavigation = (item) => {
    const { key: currentKey } = item;

    const navItem = getItemByKey(currentKey, "key", items);
    if (navItem?.url) navigate(navItem?.url);

    if (!breakpoints[siderConfig?.breakpoint]) {
      toggleSider();
    }
  };

  return (
    <Container>
      <Topbar />
      <Layout
        style={{
          marginLeft: collapsed ? "55px" : lock ? "205px" : "55px",
          transition: "all 0.2s",
        }}
        hasSider
      >
        <SiderX
          trigger={null}
          collapsed={collapsed}
          id="layout-sider"
          onMouseEnter={() => {
            if (!lock) {
              setCollapsed(false);
            }
          }}
          onMouseLeave={() => {
            if (!lock) {
              setCollapsed(true);
            }
          }}
          width={220}
          collapsedWidth={65}
          collapsible
        >
          <Menu
            // theme="light"
            theme="dark"
            mode="inline"
            selectedKeys={currentItemKey}
            openKeys={openItemKey}
            style={{
              overflow: "auto",
              height: "calc(100% - 46px)",
            }}
            items={items}
            onClick={handleNavigation}
          />
          <CollapseToggleContainer
            onClick={() => {
              setLocker();
            }}
          >
            {lock ? (
              <CollapseSiderIcon style={{ margin: "10px 20px" }} />
            ) : (
              <ExpandSiderIcon style={{ margin: "10px 20px" }} />
            )}
            {!collapsed && (
              <Text ellipsis>{lock ? "Unlock sider" : "Lock sider"}</Text>
            )}
          </CollapseToggleContainer>
        </SiderX>
        <Content
          style={{
            minHeight: "calc(100vh - 64px)",
            marginTop: "64px",
            paddingLeft: "15px",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Container>
  );
};

export default MasterLayout;
