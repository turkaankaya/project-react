import React, {useState} from 'react';

import {
  MenuMenu,
  MenuItem,
  Menu,
  Container,
} from 'semantic-ui-react';
import SingnedIn from './SingnedIn';
import SignedOut from './SignedOut';
import CartSummary from './CartSummary';
import {  useNavigate} from 'react-router-dom';

export default function Navi() {
  const [isAuthenticated,setIsAuthenticated] = useState(true)// desructter giriş yapıldığı gösterir.
  const navigate = useNavigate();
  function handleSignOut() {
    setIsAuthenticated(false)
    navigate("/");
  
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  
  }
  return (
    <div>
      <Menu inverted fixed ="top">  
        <Container>
          <MenuItem
            name='home'
          />
          <MenuItem
            name='messages'
          />
          <MenuMenu position='right'>
            <CartSummary/>
            {isAuthenticated ?<SingnedIn signOut={handleSignOut} bisey="1"/>: <SignedOut signIn={handleSignIn} bisey="1"/>}
           
            
            </MenuMenu>
        </Container>

      </Menu>
    </div>
  )
}
