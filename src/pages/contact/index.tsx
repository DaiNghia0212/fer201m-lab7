import ContactForm from "../../components/ContactForm";
import { Container, Grid, Paper, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="lg">
      <Typography mt={2} variant="h2" fontWeight={600} textAlign="center">
        Contact us
      </Typography>
      <Container maxWidth="sm">
        <Paper sx={{ padding: "20px" }}>
          <ContactForm />
          <Grid item xs={12} mt={2}>
            <Typography variant="body1">
              For any inquiries or assistance, please feel free to reach out to
              us using the contact information provided below:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Email: example@example.com</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Phone: 123-456-7890</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Address: 123 Main Street, City, State, Country
            </Typography>
          </Grid>
        </Paper>
      </Container>
    </Container>
  );
};

export default Contact;
