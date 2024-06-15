// system
import { React, useContext } from "react"
import './LoginAccount.css';
import { ThemeProvider } from "styled-components";
import {CustomLink, Input, Button, PrimaryTheme, PrimaryThemeOutline} from '../Styled/Styled'
// system

// design assets 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
// design assets

function LoginAccount({ displayProp, setDisplay}){

  return (
    <div id='loginWrapper' style={{display:displayProp}}>
      
      <FontAwesomeIcon icon={faRightFromBracket} id='exitLogin' onClick={()=>setDisplay(false)}/>

      <div id="tbLoginContainer">
        <Input type="text" placeholder="Enter gmail" id="gmailLoginTB" className="loginTB"/>
        <Input type="password" placeholder="Enter password" id="passwordLoginTB" className="loginTB"/>
        <Button theme={PrimaryTheme} id="LoginAccountButton">Login</Button>
        <p id="forgotAccountButton">Forgot Password</p>
        <p id="remeberAccountButton">Remember me</p>

        <CustomLink to={'Account'} id="SignInButton" onClick={()=>setDisplay(false)}>Create Account</CustomLink>
      </div>

    </div>
  )
}
export default LoginAccount;