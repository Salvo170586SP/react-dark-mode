import Card from "../../Components/Card";
import "./style.css";
import React, { useState, useEffect } from "react";
import data from "../../data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [theme, setTheme] = useState(false);

  function changeTheme() {
    if (theme === false) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }

  return (
    <>
      <main className={theme ? "bg-dark" : "bg-light"}>
        <Container>
          <Row>
            <Col lg={12} className="text-center p-5">
              <Button
                className="btn-sm"
                variant={theme ? "secondary" : "primary"}
                onClick={changeTheme}
              >
                {theme ? "Dark Mode" : "Light Mode"}
              </Button>
            </Col>
            <Row>
              {data.map((el) => (
              <Col /* xs={12} lg={4}  */ className="d-flex justify-content-center flex-wrap">
                  <Card
                    key={el.id}
                    state={theme ? "bg-secondary text-light " : "bg-light"}
                    title={el.title}
                    body={el.body}
                  />
              </Col>
              ))}
            </Row>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default HomePage;
