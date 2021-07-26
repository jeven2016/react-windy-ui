import React from "react";
import {Card, List} from "react-windy-ui";
import Avatar from "react-windy-ui/src/avatar";
import Button from "react-windy-ui/src/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMailBulk, faPhone, faPlane} from "@fortawesome/free-solid-svg-icons";
import img from "../../../style/imgs/girl.jpg";

export default function List5() {

  return <>
    <div className="doc doc-row">
      <Card block style={{maxWidth: '670px'}}>
        <Card.Row>
          <List>
            <List.Item
              compact={true}
              vertical={true}
              type="panel"
              icon={<Avatar hasBox={false} extraClassName="bg-color-green" src={img}/>}
              title="Countryside"
              description="A geographic area that is located outside towns and cities..."
              justifyActions='center'
              actions={[
                <Button inverted circle color="blue" hasBox={false}>
                  <FontAwesomeIcon icon={faPhone}/>
                </Button>,
                <Button inverted circle color="blue" hasBox={false}>
                  <FontAwesomeIcon icon={faMailBulk}/>
                </Button>,
                <Button inverted circle color="blue" hasBox={false}>
                  <FontAwesomeIcon icon={faPlane}/>
                </Button>
              ]}>
              In general, a rural area or a countryside is a geographic area that is located outside towns and cities...
            </List.Item>
          </List>
        </Card.Row>

      </Card>
    </div>
  </>;
}