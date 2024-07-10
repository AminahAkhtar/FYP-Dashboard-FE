/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import React, { useEffect, useState } from "react";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import MDTypography from "components/MDTypography";
// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import BatteryCharging30OutlinedIcon from "@mui/icons-material/BatteryCharging30Outlined";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";

function DashboardEVE2() {
  const { sales, tasks } = reportsLineChartData;
  const [eve1Data, setEve1Data] = useState({ totalCycles: 0 });
  const [eve2Data, setEve2Data] = useState({ totalCycles: 0, totalSpikes: 0 });
  const [imageSrc1, setImageSrc1] = useState("");
  const [imageSrc2, setImageSrc2] = useState("");
  useEffect(() => {
    fetch("https://btcbe.auf-quant.nedncl.com/eve1")
      .then((response) => response.json())
      .then((data) => {
        setEve1Data({ totalCycles: data.eve1_total_cycles });
      })
      .catch((error) => console.error("Error fetching eve1 data:", error));

    fetch("https://btcbe.auf-quant.nedncl.com/eve2")
      .then((response) => response.json())
      .then((data) => {
        setEve2Data({ totalCycles: data.eve2_total_cycles, totalSpikes: data.eve2_total_spikes });
      })
      .catch((error) => console.error("Error fetching eve2 data:", error));
    fetch("https://btcbe.auf-quant.nedncl.com/compare")
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setImageSrc1(url);
      })
      .catch((error) => console.error("Error fetching graph:", error));
    fetch("https://btcbe.auf-quant.nedncl.com/eve2_cell_diff")
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setImageSrc2(url);
      })
      .catch((error) => console.error("Error fetching graph:", error));
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon={<BatteryCharging30OutlinedIcon />}
                title="Total Batteries Analysed"
                count={2}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<TwoWheelerOutlinedIcon />}
                title="EVE1 - Total Cycles"
                count={/* prettier-ignore */ eve1Data.totalCycles}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon={<TwoWheelerOutlinedIcon />}
                title="EVE2 - Total Cycles"
                count={/* prettier-ignore */ eve2Data.totalCycles}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon={<MonitorHeartOutlinedIcon />}
                title="EVE2 - Total Spikes"
                count={/* prettier-ignore */ eve2Data.totalSpikes}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5} ml={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <MDTypography variant="h4" fontWeight="medium" textTransform="capitalize">
                  EVE2 Cycles And Cell Difference Analysis
                </MDTypography>
                <img
                  src={imageSrc2}
                  alt="Cell Difference Graph"
                  style={{
                    borderRadius: "8px",
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>

        <MDBox mt={4.5} ml={20}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <MDTypography variant="h4" fontWeight="medium" textTransform="capitalize">
                  EVE1 And EVE2 Comparison
                </MDTypography>
                <img
                  src={imageSrc1}
                  alt="Cell Difference Graph"
                  style={{
                    borderRadius: "8px",
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}
export default DashboardEVE2;
