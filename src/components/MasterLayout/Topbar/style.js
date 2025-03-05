import { Layout, Typography } from "antd";
import { styled } from "styled-components";
const { Header } = Layout;
const { Text } = Typography;

export const DashboardHeader = styled(Header)`
  display: flex !important;
  justify-content: space-between !important;
  padding: 0 24px !important;

  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 64px !important;
  line-height: 64px !important;
  z-index: 999 !important;
  overflow: hidden !important;
  box-sizing: border-box !important;
  font-family: var(--font-dm-sans) !important;
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  width: max-content;
  height: 100%;
  justify-content: center;
`;

export const TopBarMenuContainer = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;
  overflow: hidden;
  align-items: center;
  line-height: normal;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  background: rgb(38, 38, 38);
  justify-content: center;
  align-items: center;
  min-height: 40px;
  min-width: 40px;
  border-radius: 50%;
  color: #cb2b83;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 200% */
  letter-spacing: 0.12px;
`;

export const CompanyNameTitle = styled(Text)`
  font-size: 19.793px;
  font-weight: 1000;
  line-height: normal;
`;
