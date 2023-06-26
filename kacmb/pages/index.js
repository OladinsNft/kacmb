import React from 'react';
import { useState } from 'react';
import {  Flex, Image, Link} from '@chakra-ui/react';
import { metamaskWallet } from "@thirdweb-dev/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import { useConnectionStatus } from "@thirdweb-dev/react";




export default function Home() {
  


  const metamaskConfig = metamaskWallet();
  const connectionStatus = useConnectionStatus();
  const address = useAddress();
  const [isLoading, setIsLoading] = useState(true);
  
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
  
  
  
 
  
  


  
  
  

  return (
    
    <ThirdwebProvider activeChain="arbitrum-goerli" supportedWallets={[metamaskWallet()]}>
  
  
<div className="moving-background"> 
<Flex  className="BagelFatOne" justify="space-between" align="center" padding="30px">

        
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
      
      
    </Flex>
  
</Flex>


</div>
</ThirdwebProvider>
);
    






}








