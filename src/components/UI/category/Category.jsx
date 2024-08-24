import React from "react";

import { Container, Row, Col } from "reactstrap";
import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";
import "../../../styles/category.css";
const categoyData = [
  { display: "Fasstfood", imgUrl: categoryImg01 },
  { display: "Pizza", imgUrl: categoryImg02 },
  { display: "Asian Food", imgUrl: categoryImg03 },
  { display: "Row Meat", imgUrl: categoryImg04 },
];
const Catgory = () => {
  return (
    <Container>
      <Row>
        {categoyData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" key={index} className="mb-4">
            <div className="category__item d-flex align-item-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Catgory;
