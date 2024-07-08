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
// function Dashboard() {
//   const { sales, tasks } = reportsLineChartData;
//   const [eve1Data, setEve1Data] = useState({ totalCycles: 0 });
//   const [eve2Data, setEve2Data] = useState({ totalCycles: 0, totalSpikes: 0 });
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [{
//       label: "Cell Difference",
//       data: [],
//     }]
//   });
//   useEffect(() => {
//     fetch("http://localhost:5000/eve1")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setEve1Data({ totalCycles: data.eve1_total_cycles });
//       })
//       .catch((error) => console.error("Error fetching eve1 data:", error));
//     fetch("http://localhost:5000/eve2")
//       .then((response) => response.json())
//       .then((data) => {
//         setEve2Data({ totalCycles: data.eve2_total_cycles, totalSpikes: data.eve2_total_spikes });
//       })
//       .catch((error) => console.error("Error fetching eve2 data:", error));
//     fetch("http://localhost:5000/eve2_cell_diff")
//       .then((response) => response.json())
//       .then((data) => {
//         const cycleNumbers = data.map((entry) => entry["Cycle Number"]);
//         const cellDifferences = data.map((entry) => entry["Cell Difference"]);
//         setChartData({
//           labels: cycleNumbers,
//           datasets: [{
//             label: "Cell Difference",
//             data: cellDifferences,
//             fill: false,
//             borderColor: "rgb(75, 192, 192)",
//             tension: 0.1
//           }]
//         });
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);
//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox py={3}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={6} lg={3}>
//             <MDBox mb={1.5}>
//               <ComplexStatisticsCard
//                 color="dark"
//                 icon={<BatteryCharging30OutlinedIcon />}
//                 title="Total Batteries Analysed"
//                 count={2}
//               />
//             </MDBox>
//           </Grid>
//           <Grid item xs={12} md={6} lg={3}>
//             <MDBox mb={1.5}>
//               <ComplexStatisticsCard
//                 icon={<TwoWheelerOutlinedIcon />}
//                 title="EVE1 - Total Cycles"
//                 count={/* prettier-ignore */ eve1Data.totalCycles}
//               />
//             </MDBox>
//           </Grid>
//           <Grid item xs={12} md={6} lg={3}>
//             <MDBox mb={1.5}>
//               <ComplexStatisticsCard
//                 color="success"
//                 icon={<TwoWheelerOutlinedIcon />}
//                 title="EVE2 - Total Cycles"
//                 count={/* prettier-ignore */ eve2Data.totalCycles}
//               />
//             </MDBox>
//           </Grid>
//           <Grid item xs={12} md={6} lg={3}>
//             <MDBox mb={1.5}>
//               <ComplexStatisticsCard
//                 color="primary"
//                 icon={<MonitorHeartOutlinedIcon />}
//                 title="EVE2 - Total Spikes"
//                 count={/* prettier-ignore */ eve2Data.totalSpikes}
//               />
//             </MDBox>
//           </Grid>
//         </Grid>
//         <MDBox mt={4.5}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} md={6} lg={4}>
//               <MDBox mb={3}>
//                 <ReportsBarChart
//                   color="info"
//                   title="website views"
//                   description="Last Campaign Performance"
//                   date="campaign sent 2 days ago"
//                   chart={reportsBarChartData}
//                 />
//               </MDBox>
//             </Grid>
//             <Grid item xs={12} md={6} lg={4}>
//               <MDBox mb={3}>
//                 <ReportsLineChart
//                   color="success"
//                   title="daily sales"
//                   description={
//                     <>
//                       (<strong>+15%</strong>) increase in today sales.
//                     </>
//                   }
//                   date="updated 4 min ago"
//                   chart={chartData}
//                 />
//               </MDBox>
//             </Grid>
//             <Grid item xs={12} md={6} lg={4}>
//               <MDBox mb={3}>
//                 <ReportsLineChart
//                   color="dark"
//                   title="completed tasks"
//                   description="Last Campaign Performance"
//                   date="just updated"
//                   chart={tasks}
//                 />
//               </MDBox>
//             </Grid>
//           </Grid>
//         </MDBox>
//       </MDBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }

// export default Dashboard;

function DashboardEVE2() {
  const { sales, tasks } = reportsLineChartData;
  const [eve1Data, setEve1Data] = useState({ totalCycles: 0 });
  const [eve2Data, setEve2Data] = useState({ totalCycles: 0, totalSpikes: 0 });
  const [imageSrc1, setImageSrc1] = useState("");
  const [imageSrc2, setImageSrc2] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/eve1")
      .then((response) => response.json())
      .then((data) => {
        setEve1Data({ totalCycles: data.eve1_total_cycles });
      })
      .catch((error) => console.error("Error fetching eve1 data:", error));

    fetch("http://localhost:5000/eve2")
      .then((response) => response.json())
      .then((data) => {
        setEve2Data({ totalCycles: data.eve2_total_cycles, totalSpikes: data.eve2_total_spikes });
      })
      .catch((error) => console.error("Error fetching eve2 data:", error));
    fetch("http://localhost:5000/compare")
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setImageSrc1(url);
      })
      .catch((error) => console.error("Error fetching graph:", error));
    fetch("http://localhost:5000/eve2_cell_diff")
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
