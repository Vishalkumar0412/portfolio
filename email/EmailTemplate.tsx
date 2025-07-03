// emails/ContactEmail.tsx
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

interface ContactEmailProps {
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  msg: string;
}

const ContactEmail = ({ firstname, lastname, email, mobile, msg }: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New contact form message from {firstname} {lastname}</Preview>
      <Body style={{ backgroundColor: "#f4f4f4", fontFamily: "Arial, sans-serif" }}>
        <Container
          style={{
            backgroundColor: "#fff",
            padding: "24px",
            borderRadius: "8px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Heading style={{ fontSize: "24px", marginBottom: "20px", textAlign: "center" }}>
            📬 New Contact Form Submission
          </Heading>

          <Section style={{ marginBottom: "16px" }}>
            <Text><strong>First Name:</strong> {firstname}</Text>
            <Text><strong>Last Name:</strong> {lastname}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            <Text><strong>Mobile:</strong> {mobile}</Text>
            <Text><strong>Message:</strong><br />{msg}</Text>
          </Section>

          <Text style={{ fontSize: "12px", color: "#888", marginTop: "40px", textAlign: "center" }}>
            Sent from your portfolio contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;
