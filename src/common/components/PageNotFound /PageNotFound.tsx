import { Button, Container } from "@mui/material";
import styles from "./PageNotFound.module.css";
import { Path } from "../Routing/Routing";
import { Link } from "react-router";

export const PageNotFound = () => (
  <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img />
    <h1 className={styles.title}>404</h1>
    <h2 className={styles.subtitle}>Page not found. We can’t find what you’re looking for</h2>
    <Button to={Path.Main} component={Link} variant="contained" sx={{ width: "330px", mt: "20px" }}>
      to main page
    </Button>
  </Container>
);

