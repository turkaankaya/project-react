import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SingnedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right"src="./Masaüstü"/>
          <Dropdown poinnting="top left" text="Türkan">
            <Dropdown.Menu>
              <Dropdown.Item text="Bilgilerim" icon="info"/>
              <Dropdown.Item onClick={props.signOut} text="Cıkış Yap" icon="sing-out"/>
            
            </Dropdown.Menu>
          </Dropdown>
      
      </Menu.Item>
    </div>
  )
}
