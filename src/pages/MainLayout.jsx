import { Col, Row, Container } from "react-bootstrap";
import BacHoQuote from "../components/BacHoQuote";
import UserReflection from "../components/UserReflection";
import { Box } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={8} lg={9}>
          <Box>{children}</Box>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <UserReflection />

          <Box
            sx={{
              position: { xs: "static", md: "sticky" },
              top: "80px",

              py: 3,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <BacHoQuote />
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
