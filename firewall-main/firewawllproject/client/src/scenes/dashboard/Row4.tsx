import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useTheme } from "@mui/material";




const Row4 = () => {
  const { palette } = useTheme();
  const geoUrl ="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
  
  return (
    <DashboardBox gridArea="m">
        <BoxHeader
          title="map of the world"
          sideText="+4%"
        />   

    <ComposableMap  >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC" stroke="#D6D6DA" />
          ))
        }
      </Geographies>
    </ComposableMap>




    </DashboardBox>
    
  );
};

export default Row4;