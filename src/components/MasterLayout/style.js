import { Layout, Typography } from "antd";
import { styled } from "styled-components";

const { Sider } = Layout;
const { Text } = Typography;

export const MenuText = styled(Text)`
  font-size: 14px !important;
  font-style: normal !important;
  line-height: normal !important;
`;

export const CategoryText = styled(Text)`
  font-size: 12px !important;
  font-style: normal !important;
  font-weight: 500 !important;
  line-height: normal !important;
  text-transform: uppercase !important;

  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 1 !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  max-width: 100%;
`;

export const Container = styled.div`
  .ant-menu {
    padding: 0 4px !important;
    background: #1f1f1f !important;
  }

  .ant-menu-item {
    display: flex !important;
    margin: 8px auto !important;
    height: 40px !important;
    border-radius: 4px !important;

    & ${MenuText} {
      font-weight: 500;
    }
  }

  .ant-menu-item:first-child {
    display: flex !important;
    margin: 16px auto 8px !important;
    height: 40px !important;
  }

  .ant-menu-item-selected {
    border: 0.5px solid #1f1f1f !important;
    & ${MenuText} {
      font-weight: 600;
    }
  }
  .ant-menu .ant-menu-item .anticon {
    min-width: 16px !important;
  }
  .ant-menu-vertical .ant-menu-item,
  .ant-menu-light.ant-menu-inline .ant-menu-item {
    padding-inline: 16px !important;
    padding-left: 16px !important;
  }
  .ant-menu-vertical .ant-menu-item:not(.ant-menu-item-selected):hover,
  .ant-menu-light.ant-menu-inline
    .ant-menu-item:not(.ant-menu-item-selected):hover {
    background-color: red !important;
  }
  .ant-menu-item-group {
    display: flex !important;
    flex-direction: column !important;
    .ant-menu-item:first-child {
      margin: 8px auto !important;
    }
  }
  .ant-layout-sider-collapsed {
    .ant-menu-item-group {
      .ant-menu-item:first-child {
        margin: 0px auto 8px !important;
      }
      .ant-menu-item-group-title {
        height: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
      }
    }
  }
  .ant-menu-item-group-title {
    padding: 8px 4px 0 !important;
  }
`;

export const SiderX = styled(Sider)`
  overflow-x: visible;
  height: calc(100vh - 64px);
  position: fixed !important;
  left: 0;
  top: 64px;
  scrollbar-width: thin;
  z-index: 999;
  transition: all 0.5s;
`;

export const CollapseToggleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden !important;
  cursor: pointer;
  border-top: 1.5px solid #c7c7c7;

  .ant-typography {
    overflow: hidden;
    word-break: normal;
    text-align: center;
    margin: 0 !important;
  }
`;
