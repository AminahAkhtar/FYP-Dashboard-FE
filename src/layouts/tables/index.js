// /**
// =========================================================
// * Material Dashboard 2 React - v2.2.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-dashboard-react
// * Copyright 2023 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// // @mui material components
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// // Material Dashboard 2 React example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

// // Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

// function Tables() {
//   const { columns, rows } = authorsTableData();
//   const { columns: pColumns, rows: pRows } = projectsTableData();

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox pt={6} pb={3}>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <Card>
//               <MDBox
//                 mx={2}
//                 mt={-3}
//                 py={3}
//                 px={2}
//                 variant="gradient"
//                 bgColor="info"
//                 borderRadius="lg"
//                 coloredShadow="info"
//               >
//                 <MDTypography variant="h6" color="white">
//                   EVE1 Data
//                 </MDTypography>
//               </MDBox>
//               <MDBox pt={3}>
//                 <DataTable
//                   table={{ columns, rows }}
//                   isSorted={false}
//                   entriesPerPage={false}
//                   showTotalEntries={false}
//                   noEndBorder
//                 />
//               </MDBox>
//             </Card>
//           </Grid>
//           <Grid item xs={12}>
//             <Card>
//               <MDBox
//                 mx={2}
//                 mt={-3}
//                 py={3}
//                 px={2}
//                 variant="gradient"
//                 bgColor="info"
//                 borderRadius="lg"
//                 coloredShadow="info"
//               >
//                 <MDTypography variant="h6" color="white">
//                   EVE2 Data
//                 </MDTypography>
//               </MDBox>
//               <MDBox pt={3}>
//                 <DataTable
//                   table={{ columns: pColumns, rows: pRows }}
//                   isSorted={false}
//                   entriesPerPage={false}
//                   showTotalEntries={false}
//                   noEndBorder
//                 />
//               </MDBox>
//             </Card>
//           </Grid>
//         </Grid>
//       </MDBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }

// export default Tables;

import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

function Tables() {
  const [eve1Data, setEve1Data] = useState({ columns: [], rows: [] });
  const [eve2Data, setEve2Data] = useState({ columns: [], rows: [] });
  const [batteryHealthData, setBatteryHealthData] = useState({ columns: [], rows: [] });
  useEffect(() => {
    fetch("https://btcbe.auf-quant.nedncl.com/eve1_data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API response data:", data); // Debug: Log the API response
        const columns = [
          { Header: "Seconds", accessor: "Seconds", align: "center" },
          { Header: "Voltage", accessor: "Voltage", align: "center" },
          { Header: "Current", accessor: "Current", align: "center" },
          { Header: "SOC", accessor: "SOC", align: "center" },
          { Header: "Charge MOS", accessor: "Charge_MOS", align: "center" },
          { Header: "Discharge MOS", accessor: "Discharge_MOS", align: "center" },
          { Header: "Max Temp", accessor: "Max_Temp", align: "center" },
          { Header: "Cell Diff", accessor: "Cell_Diff", align: "center" },
          { Header: "Date", accessor: "Date", align: "center" },
        ];

        const rows = data.map((item) => ({
          Seconds: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item.Seconds}
            </MDTypography>
          ),
          Voltage: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item.Voltage}
            </MDTypography>
          ),
          Current: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item.Current}
            </MDTypography>
          ),
          SOC: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item.SOC}
            </MDTypography>
          ),
          Charge_MOS: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item["Charge MOS"]}
            </MDTypography>
          ),
          Discharge_MOS: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item["Discharge MOS"]}
            </MDTypography>
          ),
          Max_Temp: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item["Max Temp"]}
            </MDTypography>
          ),
          Cell_Diff: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item["Cell Diff"]}
            </MDTypography>
          ),
          Date: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item.Date}
            </MDTypography>
          ),
        }));

        setEve1Data({ columns, rows });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("https://btcbe.auf-quant.nedncl.com/eve2_data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API response data:", data); // Debug: Log the API response
        const columns = [
          { Header: "Seconds", accessor: "Seconds", align: "center" },
          { Header: "Voltage", accessor: "Voltage", align: "center" },
          { Header: "Current", accessor: "Current", align: "center" },
          { Header: "SOC", accessor: "SOC", align: "center" },
          { Header: "Charge MOS", accessor: "Charge_MOS", align: "center" },
          { Header: "Discharge MOS", accessor: "Discharge_MOS", align: "center" },
          { Header: "Max Temp", accessor: "Max_Temp", align: "center" },
          { Header: "Cell Diff", accessor: "Cell_Diff", align: "center" },
          { Header: "Date", accessor: "Date", align: "center" },
        ];

        const rows = data.map((item) => ({
          Seconds: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item.Seconds}
            </MDTypography>
          ),
          Voltage: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item.Voltage}
            </MDTypography>
          ),
          Current: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item.Current}
            </MDTypography>
          ),
          SOC: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item.SOC}
            </MDTypography>
          ),
          Charge_MOS: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item["Charge MOS"]}
            </MDTypography>
          ),
          Discharge_MOS: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item["Discharge MOS"]}
            </MDTypography>
          ),
          Max_Temp: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item["Max Temp"]}
            </MDTypography>
          ),
          Cell_Diff: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item["Cell Diff"]}
            </MDTypography>
          ),
          Date: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item.Date}
            </MDTypography>
          ),
        }));

        setEve2Data({ columns, rows });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("https://btcbe.auf-quant.nedncl.com/data_compare")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API response data (data_compare):", data); // Debug: Log the API response
        // prettier-ignore
        const columns = [
          { Header: "Cycle Number", accessor: "Cycle Number", align: "center" },
          { Header: "EVE1 Last Cell Diff", accessor: "EVE1 Last Cell Diff", align: "center" },
          { Header: "EVE2 Last Cell Diff", accessor: "EVE2 Last Cell Diff", align: "center" },
          { Header: "Battery Health", accessor: "Battery Health", align: "center" },
          { Header: "Total Spikes in EVE2", accessor: "Total Spikes in EVE2", align: "center" },
          // { Header: "Cell Diff at Spikes in EVE2", accessor: "Cell Diff at Spikes in EVE2", align: "center" },
        ];

        const rows = data.map((item) => ({
          "Cycle Number": (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item["Cycle Number"]}
            </MDTypography>
          ),
          "EVE1 Last Cell Diff": (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item["EVE1 Last Cell Diff"]}
            </MDTypography>
          ),
          "EVE2 Last Cell Diff": (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item["EVE2 Last Cell Diff"]}
            </MDTypography>
          ),
          "Battery Health": (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item["Battery Health"]}
            </MDTypography>
          ),
          "Total Spikes in EVE2": (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item["Total Spikes in EVE2"]}
            </MDTypography>
          ),
          "Cell Diff at Spikes in EVE2": (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {item["Cell Diff at Spikes in EVE2"]}
            </MDTypography>
          ),
        }));

        setBatteryHealthData({ columns, rows });
      })
      .catch((error) => console.error("Error fetching data_compare:", error));
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  EVE1 Data
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={eve1Data}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  EVE2 Data
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={eve2Data}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Health Comparison
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={batteryHealthData}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
