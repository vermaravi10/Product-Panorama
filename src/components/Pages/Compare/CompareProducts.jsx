import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Image, Modal, Rate, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import useComparision from "../../../contexts/CompareProd/useComparision";
import useNotify from "../../../contexts/NotificationProvider/useNotify";
import { useFetchData } from "../../hooks/useFetchData";
import { CompareProductsTable } from "./style";

const { Text } = Typography;

const CompareProducts = () => {
  const { notification } = useNotify();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProducts, setModalProducts] = useState([]);
  const { compareProducts, addToCompareProducts, removeToCompareProducts } =
    useComparision();

  const initialFilters = {
    limit: 100,
  };

  const [{ state: state, data: productsData }, fetchData] = useFetchData(
    " https://dummyjson.com/product",
    initialFilters,
    false
  );

  const togglemodal = () => {
    setModalOpen(!modalOpen);
  };

  const handleAddCompare = (row) => {
    if (!row) return;
    else if (compareProducts?.length >= 4) {
      notification.error({
        message: "Failed to add",
        description: "You can add only upto 4 Products",
      });
    } else addToCompareProducts(row);
  };

  useEffect(() => {
    fetchData();
  }, [modalOpen]);

  useEffect(() => {
    if (!productsData?.products?.length > 0) return;
    setModalProducts(
      productsData?.products?.filter(
        (product) => !compareProducts?.some((item) => item?.id === product?.id)
      )
    );
  }, [productsData]);

  const specs = [
    { key: "rating", label: "Rating" },
    { key: "title", label: "Product Name" },
    { key: "brand", label: "Brand" },
    { key: "category", label: "Category" },
    { key: "price", label: "Price(Rs)" },
    { key: "discountPercentage", label: "Discount %" },
    { key: "weight", label: "Weight(x100gms) " },
    { key: "dimensions", label: "Dimensions(HxWxD)" },
    { key: "warrantyInformation", label: "Warranty" },
    { key: "returnPolicy", label: "Return Policy" },
    { key: "description", label: "Description" },
  ];

  const columns = [
    {
      title: "Image",
      dataIndex: "thumbnail",
      width: 100,
      fixed: "left",
      render: (thumbnail, row) => {
        return (
          <Image
            style={{ height: "70px", width: "70px" }}
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

      render: (title) => title ?? "--",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      width: 120,
      render: (brand) => brand ?? "--",
    },

    {
      title: "Category",
      dataIndex: "category",
      width: 120,
      render: (category) => category ?? "--",
    },

    {
      title: "Price",
      dataIndex: "price",
      width: 120,
      sorter: (a, b) => a.price - b.price,

      render: (price) => price ?? "--",
    },
    {
      title: "Discount %",
      dataIndex: "discountPercentage",
      width: 120,
      sorter: (a, b) => a.discountPercentage - b.discountPercentage,

      render: (discountPercentage) => discountPercentage ?? "--",
    },

    {
      title: "Actions",
      dataIndex: "action",
      width: 150,
      fixed: "right",
      align: "center",

      render: (action, row) => {
        const isadded =
          compareProducts?.filter((item) => item?.id === row?.id)?.length > 0;
        return (
          <Button
            disabled={isadded}
            size="small"
            type="primary"
            onClick={() => {
              handleAddCompare(row);
            }}
            icon={<PlusOutlined />}
          >
            Add
          </Button>
        );
      },
    },
  ];

  return (
    <Row style={{ padding: "20px" }}>
      <Col span={24}>
        <Card
          title={"Compare Products"}
          extra={
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={togglemodal}
            >
              {compareProducts?.length === 0 ? "Add Products" : "Add More "}
            </Button>
          }
        >
          <Row>
            <Col span={24}>
              {compareProducts?.length === 0 ? (
                <Row style={{ display: "flex", justifyContent: "center" }}>
                  <p>No products added for comparison.</p>
                </Row>
              ) : (
                <Row
                  style={{
                    overflowX: "auto",
                    borderRadius: "12px",
                    border: "1px solid rgb(238, 238, 238)",
                    overflow: "hidden",
                  }}
                >
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      tableLayout: "fixed",
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          style={{
                            width: "250px",
                            padding: "5px",
                            borderBottom: "2px solid #ccc",
                            textAlign: "center",
                          }}
                        >
                          Specifications
                        </th>
                        {compareProducts?.map((product) => (
                          <th
                            key={product?.id}
                            style={{
                              padding: "5px",
                              borderBottom: "2px solid #ccc",
                              textAlign: "center",
                            }}
                          >
                            <Card
                              cover={
                                <Image
                                  src={product?.thumbnail || product?.image}
                                  style={{
                                    height: "80px",
                                    width: "80px",
                                    objectFit: "cover",
                                  }}
                                  preview={false}
                                />
                              }
                              actions={[
                                <Button
                                  type="link"
                                  danger
                                  // style={{ color: "red" }}
                                  onClick={() =>
                                    removeToCompareProducts(product)
                                  }
                                >
                                  Remove
                                </Button>,
                              ]}
                              style={{}}
                            >
                              <Card.Meta title={product?.title} />
                            </Card>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {specs?.map((spec) => (
                        <tr key={spec?.key}>
                          <td
                            style={{
                              padding: "10px",
                              borderBottom: "1px solid #eee",
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                          >
                            {spec?.label}
                          </td>
                          {compareProducts?.map((product) => (
                            <td
                              key={product.id}
                              style={{
                                padding: "10px",
                                borderBottom: "1px solid #eee",
                                textAlign: "center",
                              }}
                            >
                              {spec?.key === "rating" ? (
                                product?.reviews ? (
                                  <>
                                    <Rate
                                      disabled
                                      defaultValue={product?.rating}
                                      allowHalf
                                      tooltips="dsd"
                                    />
                                    <div style={{ fontWeight: "lighter" }}>
                                      {`based on ${product?.reviews?.length} user ratings`}
                                    </div>
                                  </>
                                ) : (
                                  "--"
                                )
                              ) : spec?.key === "dimensions" ? (
                                product?.dimensions ? (
                                  `${product?.dimensions?.height} x ${product?.dimensions?.width} x ${product?.dimensions?.depth}`
                                ) : (
                                  "--"
                                )
                              ) : (
                                product[spec?.key] || "--"
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Row>
              )}
            </Col>
          </Row>
        </Card>
      </Col>
      {modalOpen && (
        <Modal
          width={"75vw"}
          open={modalOpen}
          centered
          onCancel={togglemodal}
          title={
            <Text style={{ fontSize: "18px", fontWeight: 600 }}>
              Add Products
            </Text>
          }
          onOk={togglemodal}
          className="add-product-modal"
          styles={{
            content: { borderRadius: "20px" },
            body: { padding: 0 },
            footer: {
              display: "flex",
              justifyContent: "flex-end",
              borderTop: "none",
              padding: "0",
              margin: "0",
            },
          }}
        >
          <CompareProductsTable
            dataSource={modalProducts}
            loading={state === "PENDING" || state === "IDLE"}
            columns={columns}
            rowKey={(data) => data?.id}
            scroll={{ y: "400px" }}
          />
        </Modal>
      )}
    </Row>
  );
};

export default CompareProducts;
