
import {  React } from 'react';
import {  useState } from 'react';
import {Unity, useUnityContext}  from "react-unity-webgl";


import { Flex, Image, Link } from '@chakra-ui/react';

import {  metamaskWallet,Fragment  } from "@thirdweb-dev/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import { useConnectionStatus } from "@thirdweb-dev/react";






export default function Home() {
 
  let connectionStatus = useConnectionStatus();
  const address = useAddress();
  
  
  
  
  const {unityProvider, sendMessage, isLoaded } = new useUnityContext({
    loaderUrl: "./Megaman/Build/olursa.loader.js",
    dataUrl: "./Megaman/Build/olursa.data.unityweb",
    frameworkUrl: "./Megaman/Build/olursa.framework.js.unityweb",
    codeUrl: "./Megaman/Build/olursa.wasm.unityweb",
    
  });
  function handleClickSpawnEnemies() {
    
    console.log(address);
    sendMessage("LeaderBoard", "SettingWalletAddress", address);
  }
  function handleClick() {
    
    window.location.reload();
  }
  
const handleButtonClick = () => {
  handleClick();
    
  };
  const [addressExists, setaddressExists] = useState(false);

  
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
    <div className="about-background"> 
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
<div className="BagelFatOne">
      {address ? (
        <div>
        <Unity unityProvider={unityProvider} style={{ justifySelf: "center",alignSelf:"center",width: "75%", height: "%100",alignSelf:"center"}}
         disabledCanvasEvents={["dragstart", "scroll"]}
        />
        {isLoaded ? (
      <div>
        {handleClickSpawnEnemies()}
      </div>
    ) : (
      <div style={{ textAlign: 'center', padding: '0 20px' }} >Press Play!</div>
    )}

        
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '0 20px' }} >Please Connect your wallet.
        <div style={{ textAlign: 'center', padding: '0 20px' }} >AND</div>
        <div style={{ textAlign: 'center', padding: '0 20px' }} >Press Play!</div>
        
        <div style={{ textAlign: 'center', padding: '0 20px',boxSizing:'100px' }}>
      
      <button className="BagelFatOne" style={{ fontSize: '50px', padding: '10px 25px' ,
      borderRadius: '20%'}} onClick={handleButtonClick}>Play</button>
      

    </div>

        </div>
        
      )}
    </div>
    
    











    <div className="footer">
  © 2023 CHICKY RUNNERS. All rights reserved.
</div>



</div>
    
</ThirdwebProvider>
    
  )
}