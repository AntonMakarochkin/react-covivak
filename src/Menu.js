import { slide as Menu } from 'react-burger-menu'
import React  from 'react'


class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
   
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Вакцинироваться</a>
        <a id="about" className="menu-item" href="/about">Новости</a>
        <a id="contact" className="menu-item" href="/contact">Ковид Статистика</a>
      </Menu>
    );
  }
}

export default BurgerMenu