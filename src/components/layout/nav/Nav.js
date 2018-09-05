import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './sideDraw'




 class Nav extends Component {

  state={
    drawerOpen: false
  }
  toggleDrawer = (value) => {
    this.setState({
      drawerOpen: value
    })
  }
  render() {
    return (
      <AppBar position="fixed"
      style={{
        backgroundColor: '#2f2f2f',
        padding: '10px 0px',
   
       
      }}
      >
      <Toolbar>
      <div className='Nav'>
          <div className='Logo_wrapper'>
          <img className='logo' src={require('../../../assets/headerlogo.png')} alt='logo'/>
          </div>
    
          <div className='Nav_title'>
            Would you rather
          </div>
      </div>
      
      <IconButton
      className='menu_btn'
      aria-label='Menu'
      color='inherit'
      onClick={()=> this.toggleDrawer(true)}

      >
      <MenuIcon />
      </IconButton>
      <SideDrawer 
      open={this.state.drawerOpen}
      onClose={(value) => this.toggleDrawer(value)}
      > </SideDrawer>
      </Toolbar>
      </AppBar>
    )
  }
}

export default Nav