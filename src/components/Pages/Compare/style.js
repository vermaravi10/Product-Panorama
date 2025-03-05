import { Modal, Table } from "antd";
import styled from "styled-components";

export const CompareProductsTable = styled(Table)`
  .ant-table-pagination {
    align-items: center;
    font-weight: 500;
    margin-top: 0;
  }
`;

export const CompareProductsModal = styled(Modal)`
  .ant-modal-title {
    font-size: 18px;
    font-weight: 600;
    /* color: #333; */
  }
`;
