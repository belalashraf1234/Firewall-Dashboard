import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import { useGetLogQuery, useGetResponsesQuery, useGetThreatQuery } from "@/state/dataApi";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import React, { useMemo } from "react";
import { Cell, Pie, PieChart } from "recharts";

const Row3 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[500]];

  const { data} = useGetThreatQuery();
  const   {data:log}=useGetLogQuery();
  const {data:loca}=useGetResponsesQuery()
  const logs=useMemo(() => {
    return (
      log &&
      log.data.map((item) => {
        return {
          id: item._id,
          host: item.host,
          method:item.method
        };
      })
    );
  }, [log]);
  const locations=useMemo(() => {
    return (
      loca &&
      loca.map((item) => {
        return {
          id: item._id,
          Request: item.Request,
          Body:item.Body,
          Cookie:item.Cookie,

        };
      })
    );
  }, [loca]);
  

  


const tables = useMemo(() => {
  return (
    data &&
    data.threats.map((item) => {
      return {
        id: item._id,
        "threat_type": item.threat_type,
        location:item.location
      };
    })
  );
}, [data]);
console.log("mystats", tables);


console.log("ggggdgdfsgsdfgsdfgsdfgsdf");


  const logColumns = [
    {
      field: "id",
      headerName: "Id",
      flex: 0.25,
    },
    {
      field: "host",
      headerName: "Host",
      flex: 1,
     
    },
    {
      field: "method",
      headerName: "Method",
      flex: 1,
      
    },
  ];

  const threatsColumns = [
    {
      field: "id",
      headerName: "Id",
      flex: 1,
    },
    {
      field: "threat_type",
      headerName: "Threat_type",
      flex: 1,
    },
    {
      field: "location",
      headerName: "Location",
      flex:1,
     
    },
   
  ];
  const locationColumns = [
    {
      field: "id",
      headerName: "Id",
      flex: 0.20,
    },
    {
      field: "Request",
      headerName: "Request",
      flex: 1,
    },
    {
      field: "Body",
      headerName: "Body",
      flex:1,
     
    },
    {
      field: "Cookie",
      headerName: "Cookie",
      flex:1,
     
    },
   
  ];

  return (
    <>
      <DashboardBox gridArea="g">
        <BoxHeader
          title="List of Requests and Threats"
          sideText={`${tables?.length} requests`}
        />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={tables || []}
            columns={threatsColumns}
          />
        </Box>
      </DashboardBox>
       <DashboardBox gridArea="h">
        <BoxHeader
          title="Recent Logs"
          sideText={`${logs?.length} latest logs`}
        />
        <Box
          mt="1rem"
          p="0 0.5rem"
          height="80%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={logs || []}
            columns={logColumns}
          />
        </Box>
      </DashboardBox>
     
     <DashboardBox gridArea="i">
     <BoxHeader
          title="Details of Responses"
          sideText={`${locations?.length} requests`}
        />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={locations || []}
            columns={locationColumns}
          />
        </Box>
      </DashboardBox>
     
    
    </>
  );
};

export default Row3;
