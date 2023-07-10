import { useNavigate } from "react-router-dom";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";

const About = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <Typography mt={2} variant="h2" fontWeight={600} textAlign="center">
        About Us
      </Typography>
      <Container maxWidth="md">
        <Paper sx={{ padding: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">
                Welcome to our group! We are a team of passionate individuals
                dedicated to providing high-quality products and services to our
                customers.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Our mission is to deliver innovative solutions that meet the
                needs of our clients and exceed their expectations. We strive
                for excellence in everything we do and are committed to building
                long-lasting relationships with our customers.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                At our company, we value teamwork, integrity, and continuous
                improvement. We believe that by working together and embracing
                new ideas, we can achieve greatness.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                size="large"
                variant="contained"
                onClick={() => navigate("/contact")}
              >
                Want to contact?
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Container>
  );
};

export default About;
