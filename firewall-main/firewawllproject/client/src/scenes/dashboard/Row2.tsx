import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import {  useGetThreatQuery, useGetreqLocationQuery } from "@/state/dataApi";

import { Box, Typography, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import {
  Tooltip,
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  Legend,
  Bar
 
} from "recharts";

const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];

const Row2 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];
  
  const { data:loca} = useGetreqLocationQuery()
  const {data:threat}=useGetThreatQuery()
  const thrats = useMemo(() => {
    return (
      threat &&
      threat.data.map(({ name, value }) => {
        return {
          name: name,
          value: value
        };
      })
    );
  }, [threat]);
  const locations = useMemo(() => {
    return (
      loca &&
      loca.data.map( ({ name,value}) => {
          return {
            name: name,
            "request location": value,
            
          };
        }
      )
    );
  }, [loca]);

  

  return (
    <>
      <DashboardBox gridArea="d">
        <BoxHeader
          title="Request location "
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={locations}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
        
          
            <Tooltip />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="request location"
              stroke={palette.tertiary[500]}
            />
           
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="e">
        <BoxHeader title="Requests and threats" sideText="+4%" />
        <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
          <PieChart
            width={110}
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }}
          >
            <Pie
              stroke="none"
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>
          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">the valid requests</Typography>
            <Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}>
             69
            </Typography>
            <Typography variant="h6">
              the most requests is safe
            </Typography>
          </Box>
          <Box flexBasis="40%">
            <Typography variant="h5">decrease of sql injection</Typography>
            <Typography variant="h6">Losses are down 25%</Typography>
            <Typography mt="0.4rem" variant="h5">
              unsafe requests
            </Typography>
            <Typography variant="h6">
              safe requests up by 30% from last month.
            </Typography>
          </Box>
        </FlexBetween>
      </DashboardBox>
       <DashboardBox gridArea="f">
        <BoxHeader title="save vs unsafe requests" sideText="+4%" />
        <ResponsiveContainer width="90%" height="90%">
        <ComposedChart
          width={500}
          height={400}
          data={thrats}
          margin={{
            top: 20,
            right: 20,
            bottom: 18,
            left: 20,
          }}
        >
          <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name"  />
          <YAxis />
          <Tooltip />
         
          <Bar dataKey="value" barSize={20} fill="url(#colorRevenue)" />
          <Line type="monotone" dataKey="value" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
      </DashboardBox>  
    </>
  );
};

export default Row2;
