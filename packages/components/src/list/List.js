import React from "react";
import Divider from "../divider";
import Avatar from "../avatar";
import Button from "../button";
import Card from "../card";
import Dropdown from "../dropdown";

const List = React.forwardRef((props, ref) => {

  return <div className="common-list">
    <div className="list-header">Header</div>
    <Divider/>
    <div className="list-lines">
      <div className="list-item">
        A city is a large human settlement0
      </div>
      <Divider/>
      <div className="list-item">
        A city is a large human settlement0
      </div>
      <Divider/>

      <div className="list-panel vertical">
        <div className="list-content vertical">
          <div className="list-panel-info ">
            <div className="list-avatar">
              <Avatar hasBox={false} extraClassName="bg-color-green">B</Avatar>
            </div>
            <div className="list-text">
              <div className="list-title">Photo</div>
              <div className="list-desc">Jan 20, 2021</div>
            </div>
          </div>
          <div className="list-actions vertical">
          <span className="list-action">
            <Button inverted hasBox={false} size="small">Edit</Button>
          </span>
            <span className="list-action">
            <Button inverted hasBox={false} size="small">Add</Button>
          </span>
            <span className="list-action">
           <Button inverted hasBox={false} size="small">More</Button>
          </span>
          </div>
        </div>
        <Card hasBox={false}>
          <Card.Body>
            <h3> Name </h3>
            <h5 className="text comment"> This article is about ... </h5>
            <p>
              The tomato is the edible, often red, berry of the plant Solanum
              lycopersicum, commonly known as a tomato plant.
            </p>
          </Card.Body>
        </Card>
      </div>
      <Divider/>

      <div className="list-panel">
        <div className="list-content">
          <div className="list-panel-info">
            <div className="list-avatar">
              <Avatar size="small" hasBox={false} extraClassName="bg-color-green">B</Avatar>
            </div>
            <div className="list-text">
              <div className="list-title">Photo</div>
              <div className="list-desc">A city is distinguished from other human settlements by its relatively great
                size, but also by its functions and its special symbolic status, which may be conferred by a central
                authority.
              </div>
            </div>
          </div>
          <div className="list-actions">
          <span className="list-action">
            <Button inverted hasBox={false} size="small">Edit</Button>
          </span>
            <span className="list-action">
            <Button inverted hasBox={false} size="small">Add</Button>
          </span>
            <span className="list-action">
           <Button inverted hasBox={false} size="small">More</Button>
          </span>
          </div>
        </div>
      </div>
    </div>
  </div>;
});

export default List;