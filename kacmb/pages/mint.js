import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import { useConnect, metamaskWallet } from "@thirdweb-dev/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { useConnectionStatus } from "@thirdweb-dev/react";

import axios from 'axios';
import Papa from 'papaparse';




  









export default function Home() {
  


  const metamaskConfig = metamaskWallet();
  const connectionStatus = useConnectionStatus();
  const address = useAddress();
  const buttonStyle = {
    backgroundColor: '#ad0000',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };
  const buttonStyleMint = {
    backgroundColor: 'gray',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };
  const [hoveredIndex, setHoveredIndex] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(false);
  };
  const buttons = [
    { name: 'About', href: '/about' },
    { name: 'Mint', href: '/mint' },
    { name: 'Game', href: '/game' },
  ];
  
  
  
 
  
  
    const fetchData1 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRIZwxG3EDF4qRgX7t6P7RbFmb-K3hnYCwE7kjyctq_5LtO6CAUMhKUK9D8aNRrYHVTj77mbz_SEeJl/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
      
 
      // Iterate over the parsed data and check if your variable exists
      let variableExists = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        
        if (row.address === address) {
          variableExists = true;
          console.log(variableExists)
          break;
        }
      }
      
      
      console.log(address);
      console.log(variableExists);

      setVariableExists(variableExists);
    };

   
  
    const fetchData2 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSKwYCu30pHDCqvJGlvfdMSGVHRtMsaiCisrnoxSoK4iVQcE1DiJUCmJrgrnHQppnoYFlc1rspt6ec3/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
      
   
      let variableExiststwo = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        if (row.address === address) {
          variableExiststwo = true;
          break;
        }
      }

      setVariableExiststwo(variableExiststwo);
    };

  
  
    const fetchData3 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQSGsFh-NXN1Q2YT9nF-1G1KvusZPudnj4GQ-lHAKp_ADtRAt_4o78N2Lqb8_gwIQ9CpLBs-E9gIeJs/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
      

      // Iterate over the parsed data and check if your variable exists
      let variableExiststhree = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        if (row.address === address) {
          variableExiststhree = true;
          break;
        }
      }


      setVariableExiststhree(variableExiststhree);
    };

    
  
    const fetchData4 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRlFDbhgc-dTa2q0EOCylI0xLa4eH98fEJsaRsz1V00vlxal6-2nOOsKsGW02H2UlQg_2oO02iVU7Vn/pubhtml', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
      
   
      // Iterate over the parsed data and check if your variable exists
      let variableExistsfour = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        if (row.address === address) {
          variableExistsfour = true;
          break;
        }
      }
      


      setVariableExistsfour(variableExistsfour);
    };

    
  
    const fetchData5 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRS4tCGmqZsquFm3_GkGbqf4ggrooRd5YOIg8C1rWfO2D7sf2cSlNEqlRPSdtZUfO3F4_y4nCQDqI9U/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
      

      // Iterate over the parsed data and check if your variable exists
      let variableExistsfive = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        
        if (row.address === address) {
          variableExistsfive = true;
          console.log(variableExists)
          break;
        }
      }
      
      


      setVariableExistsfive(variableExistsfive);
    };

    
  
    const fetchData6 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSTPWjbDiYjC-yBRQtwL7eUy2yByYk3bc8coV5nDjF2pI846Cp5dV6bDFpx0SpzC_J8E-8mrv9KqaBP/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
      

      // Iterate over the parsed data and check if your variable exists
      let variableExistssix = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        
        if (row.address === address) {
          variableExistssix = true;
          console.log(variableExists)
          break;
        }
      }
      
      

      setVariableExistssix(variableExistssix);
    };

    
  
    const fetchData7 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRfgWVci4b5OWkPc2w8IIDK7uXt54cYiNV56Fa-AYnimSLlcGZhkLTon74MnqzwXQUOSW6kULBgQ2HL/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
      console.log(results);
      

      // Iterate over the parsed data and check if your variable exists
      let variableExistsseven = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        
        if (row.address === address) {
          variableExistsseven = true;
          console.log(variableExists)
          break;
        }
      }
      
      
      console.log(variableExistsseven);
      setVariableExistsseven(variableExistsseven);
    };

    
  
    const fetchData8 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vT53ozCy6mK4sTpcTctTa4DlIfj-ur3VhVSxJJU47IIxc1tStT3Dco67Rs1ADs82b-6ZtqVjDcAYZdk/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
      console.log(results);
      

      // Iterate over the parsed data and check if your variable exists
      let variableExistseight = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        
        if (row.address === address) {
          variableExistseight = true;
          console.log(variableExists)
          break;
        }
      }
      
      
      console.log(variableExistseight);
      setVariableExistseight(variableExistseight);
    };

    
  
    const fetchData9 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTnEtR2TRWe4_jKacHmWTLxCJ2MGdynLf_L_rCCQmiisyGSwqOiPDvaeBlctlW7Bv_Q7lNryJgpwAIj/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
      
      

      // Iterate over the parsed data and check if your variable exists
      let variableExistsnine = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        
        if (row.address === address) {
          variableExistsnine = true;
          console.log(variableExists)
          break;
        }
      }
      
      
      console.log(variableExistsnine);
      setVariableExistsnine(variableExistsnine);
    };

    
  
    const fetchData10 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vR0yDZhbwCrROsSX2utMfVv9RKnVHsod4NL3g8hzDRcYMF2tkWZ42jx6LgPjipifCAPuzXjBo1lNxKh/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
      console.log(results);
      

      // Iterate over the parsed data and check if your variable exists
      let variableExists10 = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        
        if (row.address === address) {
          variableExists10 = true;
          console.log(variableExists)
          break;
        }
      }
      
      
      console.log(variableExists10);
      setVariableExists10(variableExists10);
    };

    
  
    const fetchData11 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQB9BPFcPIosvaJRzltPL9hhP8u5X6Ao6wFO4APUByBNgdYIB1m-ueJaGl9pUz6XVcS0kpLIN0t-jbA/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
     
      

      // Iterate over the parsed data and check if your variable exists
      let variableExists11 = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        
        if (row.address === address) {
          variableExists11 = true;
          console.log(variableExists)
          break;
        }
      }
      
      
      console.log(variableExistsseven);
      setVariableExists11(variableExists11);
    };

    
    const fetchData12 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSz4mssRCav6aPTarXBt23uzqGz5mMBgEVnt3w_-qGPrHfD3WPs5RuXCoPXu24vTdc7jt0O3TDQ2eXP/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
      
      

      // Iterate over the parsed data and check if your variable exists
      let variableExists12 = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        
        if (row.address === address) {
          variableExists12 = true;
          console.log(variableExists)
          break;
        }
      }
      
      
      console.log(variableExistsseven);
      setVariableExists12(variableExists12);
    };

    
  
    const fetchData13 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSUiVhxX2fmgsECojE4L5tueN_WqdZ3fMAfvc1XFwCrOluKXgvyTSn1GfEPsFihn02ewDaBk5ELMbEd/pub?html', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
     
      

      // Iterate over the parsed data and check if your variable exists
      let variableExists13 = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        
        if (row.address === address) {
          variableExists13 = true;
          console.log(variableExists)
          break;
        }
      }
      
      
      console.log(variableExistsseven);
      setVariableExists13(variableExists13);
    };

   
  
    const fetchData14 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vR-EDL05k0vFujwOD7583g97T-k0xW_OtYtnB3_nLaE5-JkHQK4EvxoDoPeo86RGH9ZsEqZqjLACShF/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
     
      

      // Iterate over the parsed data and check if your variable exists
      let variableExists14 = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        
        if (row.address === address) {
          variableExists14 = true;
          console.log(variableExists)
          break;
        }
      }
      
      
      console.log(variableExistsseven);
      setVariableExists14(variableExists14);
    };

    
  
    const fetchData15 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9aPexi27-Q_c6_o-5QN-vRgKmhqUP20yghSnVbXuJc2jqBBGEeG7pWTB9K_byoL6NNyQi0js4p3f8/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
      
      

      // Iterate over the parsed data and check if your variable exists
      let variableExists15 = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        
        if (row.address === address) {
          variableExists15 = true;
          console.log(variableExists)
          break;
        }
      }
      
      
      console.log(variableExistsseven);
      setVariableExists15(variableExists15);
    };

   
    const fetchData16 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQVYjQCU_VGJDAdzaQkV0z5n-fGcQnhjIhfRLx4wvOKUzZOAdUVZLxWatkqXtXx1TSAiV7dwFqheogl/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
      
      

      // Iterate over the parsed data and check if your variable exists
      let variableExists16 = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        
        if (row.address === address) {
          variableExists16 = true;
          console.log(variableExists)
          break;
        }
      }
      
      
      console.log(variableExistsseven);
      setVariableExists16(variableExists16);
    };

  
  
    const fetchData17 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQgsv2s3s_CPyw0eLDN4njiqE0xPOfwvGnUQ165NpFIdDmDuFvcWjy2FoevtvciJDa_gLyd76l7DGvd/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
      
      

      // Iterate over the parsed data and check if your variable exists
      let variableExists17 = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        
        if (row.address === address) {
          variableExists17 = true;
          console.log(variableExists)
          break;
        }
      }
      
      
      console.log(variableExistsseven);
      setVariableExists17(variableExists17);
    };

   
  
    const fetchData18 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSCivYtskqeS-rJHpXw97uYCxbA8T-l5dJlrCPHHEm336m5MLSTudFiJ2nG4zizbcqlHQh2OebRRQay/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
      
      

      // Iterate over the parsed data and check if your variable exists
      let variableExists18 = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        
        if (row.address === address) {
          variableExists18 = true;
          console.log(variableExists)
          break;
        }
      }
      
      
      console.log(variableExistsseven);
      setVariableExists18(variableExists18);
    };

    
  
    const fetchData19 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTDtQH7rzbtaT8UNn9kH1LG6qmscB3da9AK_KDZbI1WCdwk3Qs9ad18Y0IZP-BYFW1FW-B9VwnxkcvD/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
      
      

      // Iterate over the parsed data and check if your variable exists
      let variableExists19 = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        
        if (row.address === address) {
          variableExists19 = true;
          console.log(variableExists)
          break;
        }
      }
      
      
      console.log(variableExistsseven);
      setVariableExists19(variableExists19);
    };

   
  
    const fetchData20 = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSk2sjG0px58HBLDuD7T_JwD8SGZDIYHJBQLOitJPXXS8aeO7QrHOhymCNbz-7MjSu_dE6mPkGDFcm4/pub?output=csv', { timeout: 30000 });
      const data = await response.text();

      const results = Papa.parse(data, { header: true }).data;
      
      

      // Iterate over the parsed data and check if your variable exists
      let variableExists20 = false;
      for (let i = 0; i < results.length; i++) {
        const row = results[i];
        
        if (row.address === address) {
          variableExists20 = true;
          console.log(variableExists)
          break;
        }
      }
      
      
      
      setVariableExists20(variableExists20);
      console.log(address);
      
    };
    const fetchData21 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTdioMyfjY2LQDKpsRszD_7zqPyT0Cmh1kTQ9P8sY7NYAVFGJi7lcllD2IzpKn1_cqEfHhRPSmuOCTz/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists21 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists21 = true;
            console.log(variableExists21)
            break;
          }
        }
        
        
        
        
        setVariableExists21(variableExists21);
       
        
      };
      const fetchData22 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQhnPSkaoD405IkBqmhPCBBL4ptDHlMC_7l8BW8Fter9O6RYNf330EPWVmuWWDdy9hSR0bs-2GqqJCy/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists22 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists22 = true;
            console.log(variableExists22)
            break;
          }
        }
        
        
        
        
        setVariableExists22(variableExists22);
      
        
      };
      const fetchData23 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQrChuG1xPlGa-02QaEY0eJUBsUGXWH2tdORO_HtlCD1Jw6WkYXz77skx4bzcvXNhQNdo8dXEamORMr/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists23 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists23 = true;
            console.log(variableExists23)
            break;
          }
        }
        
        
        
        
        setVariableExists23(variableExists23);
     
        
      };
      const fetchData24 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vT3UMYPrvjr0fo3m9Iopy4gvro-25fcLqSEXIrDTMkJw_xZtFogzRmcbQooe7VRH7YqsnmhkNbqaZJV/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists24 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists24 = true;
            console.log(variableExists24)
            break;
          }
        }
        
        
        
        
        setVariableExists24(variableExists24);
       
        
      };
      const fetchData25 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQC-pQjDfOOpj4RlecDb0-8tRToj3p5-jC49qGJfq2LLk10kIgBaIO3hxkB_W6Tq04AoDkkzzk5qsr0/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists25 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists25 = true;
            console.log(variableExists25)
            break;
          }
        }
        
        
        
        
        setVariableExists25(variableExists25);
      
        
      };
      const fetchData26 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQA-KUTChP1u3x-DLo2c5NvZjKvlpLLsVkDFf3qXuWSigaG0mWNmVkHGvHahBtJ5HCUlGfhWEfX_PwK/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists26 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists26 = true;
            console.log(variableExists26)
            break;
          }
        }
        
        
        
        
        setVariableExists26(variableExists26);
        
        
      };
      const fetchData27 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQljmL_znm64zQVqlDkCWwT9Pi63QZvisE2yZdOhzJyiG88KkVV9ouqvuCK7ScENqD_edzvN3me_dEo/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists27 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists27 = true;
            console.log(variableExists27)
            break;
          }
        }
        
        
        
        
        setVariableExists27(variableExists27);
  
        
      };
      const fetchData28 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQqYgUAdj91wbOdamjgzaAmjwyJ80u45KXq-Tbtf08DrMBSnlp-2Sy671Brcx7aF24usU_mU8xXfm3x/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists28 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists28 = true;
            console.log(variableExists28)
            break;
          }
        }
        
        
        
        
        setVariableExists28(variableExists28);
    
        
      };
      const fetchData29 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vR3OxwiTVYNT1Edrna7GCPs_0hI8Ji5JefdkikwONGLGL1Ra8h8duH2jzJJPc6zCNzDibZes6isXH9W/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists29 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists29 = true;
            console.log(variableExists29)
            break;
          }
        }
        
        
        
        
        setVariableExists29(variableExists29);
    
        
      };
      const fetchData30 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSl_c3x9mo7_PsRseT9XzhhnVXoQxVEGOJouwg7SGG_suPVjIbfiZbYtX4y_saA_-IpUh8L70uQGrEI/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists30 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists30 = true;
            console.log(variableExists30)
            break;
          }
        }
        
        
        
        
        setVariableExists30(variableExists30);
      
        
      };
      const fetchData31 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRSElP87thlYlpLTq6Cknm93soubm7cYRLutW0R7RPts0PPWRDgSwrOgyZ-br_Sv6GWflIJrMtFwNNE/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists31 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists31 = true;
            console.log(variableExists31)
            break;
          }
        }
        
        
        
        
        setVariableExists31(variableExists31);
       
        
      };
      const fetchData32 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vT5XwssPcFrHhenoKGXihBU6liQKJQ5CY8dummpXkr-9rTQfZJpchXhli63J0OCwG958DaFbBAXJFdg/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists32 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists32 = true;
            console.log(variableExists32)
            break;
          }
        }
        
        
        
        
        setVariableExists32(variableExists32);
       
        
      };
      const fetchData33 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTOJ7hPfT2S_Ui26Ad4fFu77SX0SXICvxZGwXWZAesFP2kN_R_pIz9MD_GBKQD6LFkE1_VJ59IGkt8u/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists33 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists33 = true;
            console.log(variableExists33)
            break;
          }
        }
        
        
        
        
        setVariableExists33(variableExists33);
       
        
      };
      const fetchData34 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRM_iQPyILLmfJ3QnN5CwKsQ1YgIiNK1DKsIVsNdVa1gdPxhpx0OPEFzeoj5TlaXVmOih5n66CR5ona/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists34 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists34 = true;
            console.log(variableExists34)
            break;
          }
        }
        
        
        
        
        setVariableExists34(variableExists34);
       
        
      };
      const fetchData35 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRH4Cv0hU5xGyOQd0veeHGknFiuBxe4btN8kV68q0N9MWxHqulaiIyPpVWfeqh4LlFBOmzxTCTK4gYs/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists35 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists35 = true;
            console.log(variableExists35)
            break;
          }
        }
        
        
        
        
        setVariableExists35(variableExists35);
      
        
      };
      const fetchData36 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQXxoLM8OQyP5hRcQHxuuLDGIljfJKVxA7uGu5JMpBndufGQEY4UiuYSX7VD6WoUePaXhk8dyLkDNez/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists36 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists36 = true;
            console.log(variableExists36)
            break;
          }
        }
        
        
        
        
        setVariableExists36(variableExists36);
      
        
      };
      const fetchData37 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQrexY11JFABtWNy8C3b-Ltpd1XWr0IRIDW3P7zu1eZRwB3dSONRoiaZ-v735s3MjgKVCdlGPR21cZo/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists37 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists37 = true;
            console.log(variableExists37)
            break;
          }
        }
        
        
        
        
        setVariableExists37(variableExists37);
    
        
      };
      const fetchData38 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRwhfIRprYYxussrN8cks5sZE3lvCR27D85x4F2OhoFwISI3ZehalzCX7YWS-uZm45XOanAejtFXKp9/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists38 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists38 = true;
            console.log(variableExists38)
            break;
          }
        }
        
        
        
        
        setVariableExists38(variableExists38);
      
        
      };
      const fetchData39 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTsQz887NHzLklONmZNqQkdfzNJj6npcD2VXQ4hS-whNAwXyfG2yva9yF1i9to8PLuGuqObClqujn85/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists39 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists39 = true;
            console.log(variableExists39)
            break;
          }
        }
        
        
        
        
        setVariableExists39(variableExists39);
       
        
      };
      const fetchData40 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQY4iO_-iDjvpouOVmaA7qTILee6L71Lb5NMDPbuVkrFGx3bGhnAHK3QAZAmbZ71EZjoupO2xe2dPBH/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists40 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists40 = true;
            console.log(variableExists40)
            break;
          }
        }
        
        
        
        
        setVariableExists40(variableExists40);
      
        
      };
      const fetchData41 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1O59SxUVDYlEJfc3nknCcGMp5ooymSild2Yvf2DLwfHza4Mp7ex8rfd2uVh8Gebe_mzBzgBoUGhma/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists41 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists41 = true;
            console.log(variableExists41)
            break;
          }
        }
        
        
        
        
        setVariableExists41(variableExists41);
       
        
      };
      const fetchData42 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRPGsDYMyJIj4NlQC8hNM8-cFhPeAMS_Okx7vFQCLgfQ-C5HyFi2lyEngT6tJvmJpVHjOHQM3qYCEoB/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists42 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists42 = true;
            console.log(variableExists42)
            break;
          }
        }
        
        
        
        
        setVariableExists42(variableExists42);
     
        
      };
      const fetchData43 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTsQz887NHzLklONmZNqQkdfzNJj6npcD2VXQ4hS-whNAwXyfG2yva9yF1i9to8PLuGuqObClqujn85/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists43 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists43 = true;
            console.log(variableExists43)
            break;
          }
        }
        
        
        
        
        setVariableExists43(variableExists43);
       
        
      };
      const fetchData44 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTBjTnGguLfB8pn1MNoNz5BthdM9h1IPfNbV5v9QMTldGGlao8sDfKzjyuTMgcz3wc-GcsqmbqhWopi/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists44 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists44 = true;
            console.log(variableExists44)
            break;
          }
        }
        
        
        
        
        setVariableExists44(variableExists44);
        
        
      };
      const fetchData45 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTK6jSeLY38KseTJ684t70bpyVnLEVBIx4uOPzfcudxyy4lKb7---9p-c3sB7xdywnrwqZODjXLV5BJ/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists45 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists45 = true;
            console.log(variableExists45)
            break;
          }
        }
        
        
        
        
        setVariableExists45(variableExists45);
      
        
      };
      const fetchData46 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSC3uzuN0OhwyKr7fZG2THKC8ySdW6VAB9G1U57R8hP47YX-XBYqWuEw9dadtjzk7RL_IQZ6HjPMz0k/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists46 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists46 = true;
            console.log(variableExists46)
            break;
          }
        }
        
        
        
        
        setVariableExists46(variableExists46);
        
        
      };
      const fetchData47 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRtNpbtzINwMBaGh3QzJaUfocq7ukytaXrtnnHRzih2bJddBBVEbvSDXFsqMvfNTxJjK4rGIVMRRiZ6/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists47 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists47 = true;
            console.log(variableExists47)
            break;
          }
        }
        
        
        
        
        setVariableExists47(variableExists47);
     
        
      };
      const fetchData48 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQSVPSdWhHeOo4T576SHmJ6NwDEFCfvIOIGQW4qGmT6nRatCaHIw1PcXAyteBmFkKNZwJj66rtXMP8t/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists48 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists48 = true;
            console.log(variableExists48)
            break;
          }
        }
        
        setVariableExists48(variableExists48);
        
        
      };
      const fetchData49 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRvVAlHuwg9PctfCIkvBAdDoQ9U8bmVOuQCaVr5r3xcXCHb-PXVM7pIzFFmDOeDiaMmKosHkjjKE8tk/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        
        
  
        // Iterate over the parsed data and check if your variable exists
        let variableExists49 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists49 = true;
            console.log(variableExists49)
            break;
          }
        }

        setVariableExists49(variableExists49);
        
        
      };
      const fetchData50 = async () => {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRrOYrx1iMjwwm3uiXgqK18Jc9RuzBsYow7bSsLx_2emSSf2dV56P3gca0HJSynq7VEEaYjjnskvpND/pub?output=csv', { timeout: 30000 });
        const data = await response.text();
  
        const results = Papa.parse(data, { header: true }).data;
        

        // Iterate over the parsed data and check if your variable exists
        let variableExists50 = false;
        for (let i = 0; i < results.length; i++) {
          const row = results[i];
          console.log(row);
          
          if (row.address === address) {
            variableExists50 = true;
            console.log(variableExists50)
            break;
          }
        }
        

        setVariableExists50(variableExists50);
       
        
      };

    const handleButtonClick = () => {
      fetchData22();
      fetchData23();
      fetchData24();
      fetchData25();
      fetchData26();
      fetchData27();
      fetchData28();
      fetchData29();
      fetchData30();
      fetchData31();
      fetchData32();
      fetchData33();
      fetchData34();
      fetchData35();
      fetchData36();
      fetchData37();
      fetchData38();
      fetchData39();
      fetchData40();
      fetchData41();
      fetchData42();
      fetchData43();
      fetchData44();
      fetchData45();
      fetchData46();
      fetchData47();
      fetchData48();
      fetchData49();
      fetchData50(); 
        fetchData20();
        fetchData21();
        fetchData19();
        fetchData18();
        fetchData17();
        fetchData16();
        fetchData15();
        fetchData14();
        fetchData13();
        fetchData12();
        fetchData11();
        fetchData10();
        fetchData9();
        fetchData8();
        fetchData7();
        fetchData6();
        fetchData5();
        fetchData4();
        fetchData3();
        fetchData2();
        fetchData1();
      };

    
  

  
  


  const [variableExiststwo, setVariableExiststwo] = useState(false);
  const [variableExiststhree, setVariableExiststhree] = useState(false);
  const [variableExists, setVariableExists] = useState(false);
  const [variableExistsfour, setVariableExistsfour] = useState(false);
  const [variableExistsfive, setVariableExistsfive] = useState(false);
  const [variableExistssix, setVariableExistssix] = useState(false);
  const [variableExistsseven, setVariableExistsseven] = useState(false);
  const [variableExistseight, setVariableExistseight] = useState(false);
  const [variableExistsnine, setVariableExistsnine] = useState(false);
  const [variableExists10, setVariableExists10] = useState(false);
  const [variableExists11, setVariableExists11] = useState(false);
  const [variableExists12, setVariableExists12] = useState(false);
  const [variableExists13, setVariableExists13] = useState(false);
  const [variableExists14, setVariableExists14] = useState(false);
  const [variableExists15, setVariableExists15] = useState(false);
  const [variableExists16, setVariableExists16] = useState(false);
  const [variableExists17, setVariableExists17] = useState(false);
  const [variableExists18, setVariableExists18] = useState(false);
  const [variableExists19, setVariableExists19] = useState(false);
  const [variableExists20, setVariableExists20] = useState(false);
  const [variableExists21, setVariableExists21] = useState(false);
  const [variableExists22, setVariableExists22] = useState(false);
  const [variableExists23, setVariableExists23] = useState(false);
  const [variableExists24, setVariableExists24] = useState(false);
  const [variableExists25, setVariableExists25] = useState(false);
  const [variableExists26, setVariableExists26] = useState(false);
  const [variableExists27, setVariableExists27] = useState(false);
  const [variableExists28, setVariableExists28] = useState(false);
  const [variableExists29, setVariableExists29] = useState(false);
  const [variableExists30, setVariableExists30] = useState(false);
  const [variableExists31, setVariableExists31] = useState(false);
  const [variableExists32, setVariableExists32] = useState(false);
  const [variableExists33, setVariableExists33] = useState(false);
  const [variableExists34, setVariableExists34] = useState(false);
  const [variableExists35, setVariableExists35] = useState(false);
  const [variableExists36, setVariableExists36] = useState(false);
  const [variableExists37, setVariableExists37] = useState(false);
  const [variableExists38, setVariableExists38] = useState(false);
  const [variableExists39, setVariableExists39] = useState(false);
  const [variableExists40, setVariableExists40] = useState(false);
  const [variableExists41, setVariableExists41] = useState(false);
  const [variableExists42, setVariableExists42] = useState(false);
  const [variableExists43, setVariableExists43] = useState(false);
  const [variableExists44, setVariableExists44] = useState(false);
  const [variableExists45, setVariableExists45] = useState(false);
  const [variableExists46, setVariableExists46] = useState(false);
  const [variableExists47, setVariableExists47] = useState(false);
  const [variableExists48, setVariableExists48] = useState(false);
  const [variableExists49, setVariableExists49] = useState(false);
  const [variableExists50, setVariableExists50] = useState(false);



  return (
    
    <ThirdwebProvider activeChain="arbitrum-goerli" supportedWallets={[metamaskWallet()]}>
  
  
<div className="about-background" > 
<Flex className="BagelFatOne" justify="space-between" align="center" padding="30px">

       
            {/*Left Side - Social Media Icons*/}
             
                
                <Link href="/">
                    <Image src="/images/LOGO.png" width="175px" margin="0 100px"/>
                </Link>
                
            
            
           

            
            {/*Right Side - Sections and Connect*/}
            <Flex justify="space-between" align="center" padding="30px">
      {buttons.map((button, index) => (
        <a
          key={index}
          href={button.href}
          style={{
            margin: '0 8px',
            padding: '10px 30px',
            backgroundColor: hoveredIndex === index ? '#b1b8f2' : '#929bed',
            color: hoveredIndex === index ? 'black' : 'white',
            cursor: 'pointer',
            textDecoration: 'none',
            borderRadius: '10%',
            fontSize: '20px',
            lineHeight: '0.75',
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {button.name}
        </a>
      ))}
      <ConnectWallet />
      
    </Flex>
  
</Flex>


<div className="BagelFatOne" style={{ textAlign: 'center', padding: '10 40px' }} >Wallet address is {address} </div>

<div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
<iframe
    src="https://ipfs-2.thirdwebcdn.com/ipfs/QmPvTEZKMiHfQ4AHnd8uvUy3yPxKL2MesWGi3KGGT5Ro2n?contract=0x5DCBB6ECdcE91E4aeFbAAC5642CF023f6Bb7B949&chain=%7B%22name%22%3A%22Arbitrum+Goerli%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Farbitrum-goerli.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Arbitrum+Goerli+Ether%22%2C%22symbol%22%3A%22AGOR%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22arb-goerli%22%2C%22chainId%22%3A421613%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22arbitrum-goerli%22%7D&primaryColor=purple"
    width="900px"
    height="600px"
    frameborder="0"
    style={{ padding: '0 10px' }}
    ></iframe>
    




      {(variableExists || variableExiststwo || variableExiststhree||variableExistsfour||variableExistsfive||variableExistssix || variableExistsseven||variableExistseight||variableExistsnine||variableExists10||variableExists11||variableExists12||variableExists13||variableExists14||variableExists15||variableExists16||variableExists17||variableExists18||variableExists19||variableExists20||variableExists21)&&(connectionStatus == "connected") ? (
        <iframe
        src="https://ipfs-2.thirdwebcdn.com/ipfs/QmPvTEZKMiHfQ4AHnd8uvUy3yPxKL2MesWGi3KGGT5Ro2n?contract=0x0bb243b126fe501Cc6760c504429E7382B59E53b&chain=%7B%22name%22%3A%22Arbitrum+Goerli%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Farbitrum-goerli.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Arbitrum+Goerli+Ether%22%2C%22symbol%22%3A%22AGOR%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22arb-goerli%22%2C%22chainId%22%3A421613%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22arbitrum-goerli%22%7D&primaryColor=purple"
        width="900px"
        height="600px"
        frameborder="0"
        style={{ padding: '0 10px' }}
        >
          
        </iframe>
        
        
      ) : (
        
        <div className="BagelFatOne" style={{ padding: '0px', margin: '0 auto' }}>
          
        <button className="BagelFatOne" onClick={handleButtonClick} style={{ fontSize: '40px', padding: '0px 75px' }}>CHECK FOR FREE CLAIM</button>
      </div>


        
      )}
    </div>
    
    

    

    <div className="footer">
  © 2023 CHICKY RUNNERS. All rights reserved.
</div>

</div>
</ThirdwebProvider>
);
      }