import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Image, Row, Tag } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useComparision from "../../../contexts/CompareProd/useComparision";
import useNotify from "../../../contexts/NotificationProvider/useNotify";
import { useFetchData } from "../../hooks/useFetchData";
import { ProductsTable } from "./style";

const initialFilters = {
  limit: 100,
};

const Products = () => {
  const { notification } = useNotify();
  const navigate = useNavigate();
  const { compareProducts, addToCompareProducts } = useComparision();

  const [{ state: state, data: productsData, error: error }, fetchData] =
    useFetchData("https://dummyjson.com/product", initialFilters, false);

  const handleAddCompare = (row) => {
    if (!row) return;
    else if (compareProducts?.length >= 4) {
      notification.error({
        message: "Failed to add",
        description:
          "You have already added four products. Please remove one before adding another.",
      });
    } else {
      addToCompareProducts(row);
      navigate("/compare-products");
    }
  };

  useEffect(() => {
    if (state === "FAILED") {
      notification.error({
        message: "Error while fetching product listing",
        description: error?.message,
      });
    }
  });

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "Image",
      dataIndex: "thumbnail",
      width: 120,
      fixed: "left",
      render: (thumbnail, row) => {
        return (
          <Image
            style={{ height: "80px", width: "80px" }}
            src={thumbnail ?? row?.images?.[0]}
          />
        );
      },
    },
    {
      title: "Product Name",
      dataIndex: "title",
      width: 180,
      fixed: "left",
      render: (title, row) => {
        const isadded =
          compareProducts?.filter((item) => item?.id === row?.id)?.length > 0;
        return (
          <span style={{ color: isadded ? "#cb2b83" : "inherit" }}>
            {title ?? "--"}
          </span>
        );
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      width: 350,
      render: (description, row) => {
        const isadded =
          compareProducts?.filter((item) => item?.id === row?.id)?.length > 0;
        return (
          <span style={{ color: isadded ? "#cb2b83" : "inherit" }}>
            {description ?? "--"}
          </span>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      width: 150,
      sorter: (a, b) => a?.price - b?.price,

      render: (price, row) => {
        const isadded =
          compareProducts?.filter((item) => item?.id === row?.id)?.length > 0;
        return (
          <span style={{ color: isadded ? "#cb2b83" : "inherit" }}>
            {price ?? "--"}
          </span>
        );
      },
    },
    {
      title: "Discount %",
      dataIndex: "discountPercentage",
      width: 150,
      sorter: (a, b) => a?.discountPercentage - b?.discountPercentage,

      render: (discountPercentage, row) => {
        const isadded =
          compareProducts?.filter((item) => item?.id === row?.id)?.length > 0;
        return (
          <span style={{ color: isadded ? "#cb2b83" : "inherit" }}>
            {discountPercentage ?? "--"}
          </span>
        );
      },
    },
    {
      title: "Brand",
      dataIndex: "brand",
      width: 150,

      render: (brand, row) => {
        const isadded =
          compareProducts?.filter((item) => item?.id === row?.id)?.length > 0;
        return (
          <span style={{ color: isadded ? "#cb2b83" : "inherit" }}>
            {brand ?? "--"}
          </span>
        );
      },
    },
    {
      title: "Tags",
      dataIndex: "tags",
      width: 120,
      render: (tags, row) => {
        const isadded =
          compareProducts?.filter((item) => item?.id === row?.id)?.length > 0;
        return tags?.map((tag, index) => (
          <Tag
            style={{ marginBottom: 5 }}
            color={isadded ? "#cb2b83" : index == 0 ? "green" : "yellow"}
          >
            {tag}
          </Tag>
        ));
      },
    },
    {
      title: "Category",
      dataIndex: "category",
      width: 150,
      render: (category, row) => {
        const isadded =
          compareProducts?.filter((item) => item?.id === row?.id)?.length > 0;
        return (
          <span style={{ color: isadded ? "#cb2b83" : "inherit" }}>
            {category ?? "--"}
          </span>
        );
      },
    },
    {
      title: "Actions",
      dataIndex: "action",
      width: 200,
      fixed: "right",
      align: "center",

      render: (action, row) => {
        const isadded =
          compareProducts?.filter((item) => item?.id === row?.id)?.length > 0;
        return (
          <Button
            type="primary"
            disabled={isadded}
            size="small"
            onClick={() => {
              handleAddCompare(row);
            }}
            icon={<PlusOutlined />}
          >
            Add to Compare
          </Button>
        );
      },
    },
  ];

  return (
    <Row>
      <Col span={24}>
        <Card title="Products Listing" style={{ margin: 16 }}>
          <ProductsTable
            dataSource={productsData?.products}
            loading={state === "PENDING" || state === "IDLE"}
            columns={columns}
            rowKey={(data) => data?.id}
            scroll={{ y: "calc(100vh - 320px)" }}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Products;
