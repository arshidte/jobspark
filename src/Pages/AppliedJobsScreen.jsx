import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React from "react";

const AppliedJobsScreen = () => {
  return (
    <Box>
      {/* Banner */}
      <div className="banner-box">
        <img src="./images/banner-image.jpeg" alt="banner-img" />
        <div class="banner-text banner-text-applied">
          <h1>Application History</h1>
        </div>
      </div>
      <Container>
        <div className="application-history">
          <h3><u>Your Application History</u></h3>
        </div>
      </Container>
      {/* Banner */}
    </Box>
  );
};

export default AppliedJobsScreen;
