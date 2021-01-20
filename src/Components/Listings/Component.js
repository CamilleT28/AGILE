import React from 'react';


class Component extends React.Component{
    render() {
        return (
        <div className="component d-flex" id={this.props.id}>
          <div className="p-2 my-1 shadow-sm">
            <img className="component__image" alt={"lineImage"+this.props.title} src={this.props.imgUrl}/>
          </div>
          <div className="component__text p-2 pl-3 ml-2 my-1 shadow-sm w-100">
            <p className="h6 p-0 m-0" id={"componentTitle"+this.props.id}>{this.props.title}</p>
            <small className="text-secondary p-0 m-0">{this.props.direction}</small>
            <p className="description mt-1 mb-0">{this.props.description}</p>
          </div>
        </div>
      );
      }
    }

    export default Component;
    