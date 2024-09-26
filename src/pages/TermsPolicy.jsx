
// import React from 'react'
import { Container, Typography, Divider } from '@mui/material';

const TermsPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Terms and Policies for InteriorCafe
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Last Updated: [Date]</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to InteriorCafe! These Terms and Policies govern your use of our website located at https://interiorcafe.in/ the InteriorCafe. By accessing or using our Site, you agree to be bound by these Terms and Policies. If you do not agree with any part of these Terms, you must not use our Site.
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" gutterBottom>
        1. Acceptance of Terms
      </Typography>
      <Typography variant="body1" paragraph>
        By using our Site, you confirm that you are at least 18 years old or have the consent of a parent or guardian. If you are using the Site on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms.
      </Typography>

      <Typography variant="h5" gutterBottom>
        2. Services Provided
      </Typography>
      <Typography variant="body1" paragraph>
        InteriorCafe offers a variety of services, including but not limited to:
      </Typography>
      <Typography variant="body1" paragraph>
        - Interior design consultations
        <br />
        - Space planning and layout design
        <br />
        - Product recommendations
        <br />
        - Project management and execution
        <br />
        - Educational resources and design ideas
      </Typography>

      <Typography variant="h5" gutterBottom>
        3. User Responsibilities
      </Typography>
      <Typography variant="body1" paragraph>
        You agree to use the Site for lawful purposes only. You agree not to:
      </Typography>
      <Typography variant="body1" paragraph>
        - Violate any applicable laws or regulations.
        <br />
        - Post or transmit any unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable content.
        <br />
        - Engage in any form of data mining, robots, or similar data gathering and extraction methods.
        <br />
        - Attempt to gain unauthorized access to any portion of the Site or any other systems or networks connected to the Site.
      </Typography>

      <Typography variant="h5" gutterBottom>
        4. Intellectual Property
      </Typography>
      <Typography variant="body1" paragraph>
        All content, trademarks, and other intellectual property displayed on the Site are the property of InteriorCafe or its licensors. You may not use, reproduce, modify, or distribute any content without prior written consent from InteriorCafe.
      </Typography>

      <Typography variant="h5" gutterBottom>
        5. Third-Party Links
      </Typography>
      <Typography variant="body1" paragraph>
        Our Site may contain links to third-party websites. We do not endorse or make any representations about these websites. Your use of any linked website is at your own risk.
      </Typography>

      <Typography variant="h5" gutterBottom>
        6. Disclaimer of Warranties
      </Typography>
      <Typography variant="body1" paragraph>
        The Site is provided on an as is and as available basis. InteriorCafe makes no warranties or representations about the accuracy or completeness of the content on the Site. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose.
      </Typography>

      <Typography variant="h5" gutterBottom>
        7. Limitation of Liability
      </Typography>
      <Typography variant="body1" paragraph>
        InteriorCafe shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Site, even if we have been advised of the possibility of such damages.
      </Typography>

      <Typography variant="h5" gutterBottom>
        8. Indemnification
      </Typography>
      <Typography variant="body1" paragraph>
        You agree to indemnify, defend, and hold harmless InteriorCafe and its affiliates, officers, agents, and employees from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorney fees) arising out of your use of the Site or violation of these Terms.
      </Typography>

      <Typography variant="h5" gutterBottom>
        9. Modifications to Terms
      </Typography>
      <Typography variant="body1" paragraph>
        InteriorCafe reserves the right to modify these Terms and Policies at any time. We will notify you of any significant changes by posting the new Terms on our Site. Your continued use of the Site after any modifications constitutes your acceptance of the revised Terms.
      </Typography>

      <Typography variant="h5" gutterBottom>
        10. Governing Law
      </Typography>
      <Typography variant="body1" paragraph>
        These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law principles. Any legal action arising out of these Terms shall be brought in the courts located in [Your City, Your State/Country].
      </Typography>

      <Typography variant="h5" gutterBottom>
        11. Contact Information
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions or concerns regarding these Terms and Policies, please contact us at:
      </Typography>
      <Typography variant="body1" paragraph>
        - Email: [your email address]
        <br />
        - Phone: [your phone number]
      </Typography>
    </Container>
  );
};

export default TermsPolicy;

