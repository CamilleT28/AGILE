import Component from './Component';
import HomeData from '../../Data/HomeData';
import React from 'react';


class ComponentsList extends React.Component{
    componentDidMount(){
      for(let i = 1; i<HomeData.length+1; i++){
      let rollOut = document.getElementById(i);
      rollOut.setAttribute("onclick", "popupFunction(this.id)");
      }
    }
    render()
    {
      const component= HomeData.map((data) =>(
        <Component
        key={data.id}
        id={data.id}
        imgUrl={data.imgUrl}
        title={data.title}
        direction={data.direction}
        description={data.description}
         />
      ));
      return(
        <div>
        {component}
        </div>
      );
    }
  }

  export default ComponentsList;