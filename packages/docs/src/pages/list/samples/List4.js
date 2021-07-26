import React from "react";
import {Card, Divider, List} from "react-windy-ui";
import Avatar from "react-windy-ui/src/avatar";
import Button from "react-windy-ui/src/button";
import image from '../../../style/imgs/pic_p4.jpg';
import {faComment, faStarOfDavid, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function List4() {

  return <>
    <div className="doc doc-row">
      <List>
        <List.Item
          vertical={true}
          type="panel"
          icon={<Avatar hasBox={false} size="small" extraClassName="bg-color-green">B</Avatar>}
          title="Countryside"
          description="A geographic area that is located outside towns and cities..."
          actions={[
            <Button inverted hasBox={false} size="small" style={{color: '#0ca0ff'}}
                    leftIcon={<FontAwesomeIcon icon={faThumbsUp}/>}>800K+</Button>,
            <Button inverted hasBox={false} size="small"
                    leftIcon={<FontAwesomeIcon icon={faStarOfDavid}/>}>122</Button>,
            <Button inverted hasBox={false} size="small" leftIcon={<FontAwesomeIcon icon={faComment}/>}>300K+</Button>
          ]}
          moreElements={<Card style={{width: "15rem"}} hasBox={false}>
            <Card.CardImage autoScale>
              <Card.Image src={image}>
              </Card.Image>
              <Card.OverlayTitle>
                <h4>Place</h4>
              </Card.OverlayTitle>
            </Card.CardImage>
          </Card>}>
          In general, a rural area or a countryside is a geographic area that is located outside towns and cities...
        </List.Item>
        <Divider/>

        <List.Item
          vertical={true}
          type="panel"
          icon={<Avatar hasBox={false} size="small" extraClassName="bg-color-green">B</Avatar>}
          title="Countryside"
          description="A geographic area that is located outside towns and cities..."
          actions={[
            <Button inverted hasBox={false} size="small" style={{color: '#0ca0ff'}}
                    leftIcon={<FontAwesomeIcon icon={faThumbsUp}/>}>800K+</Button>,
            <Button inverted hasBox={false} size="small"
                    leftIcon={<FontAwesomeIcon icon={faStarOfDavid}/>}>122</Button>,
            <Button inverted hasBox={false} size="small" leftIcon={<FontAwesomeIcon icon={faComment}/>}>300K+</Button>
          ]}
          moreElements={<Card style={{width: "15rem"}} hasBox={false}>
            <Card.CardImage autoScale>
              <Card.Image src={image}>
              </Card.Image>
              <Card.OverlayTitle>
                <h4>Place</h4>
              </Card.OverlayTitle>
            </Card.CardImage>
          </Card>}>
          In general, a rural area or a countryside is a geographic area that is located outside towns and cities...
        </List.Item>
        <Divider/>

        <List.Item
          vertical={true}
          type="panel"
          icon={<Avatar hasBox={false} size="small" extraClassName="bg-color-green">B</Avatar>}
          title="Countryside"
          description="A geographic area that is located outside towns and cities..."
          actions={[
            <Button inverted hasBox={false} size="small" style={{color: '#0ca0ff'}}
                    leftIcon={<FontAwesomeIcon icon={faThumbsUp}/>}>800K+</Button>,
            <Button inverted hasBox={false} size="small"
                    leftIcon={<FontAwesomeIcon icon={faStarOfDavid}/>}>122</Button>,
            <Button inverted hasBox={false} size="small" leftIcon={<FontAwesomeIcon icon={faComment}/>}>300K+</Button>
          ]}
          moreElements={<Card style={{width: "15rem"}} hasBox={false}>
            <Card.CardImage autoScale>
              <Card.Image src={image}>
              </Card.Image>
              <Card.OverlayTitle>
                <h4>Place</h4>
              </Card.OverlayTitle>
            </Card.CardImage>
          </Card>}>
          In general, a rural area or a countryside is a geographic area that is located outside towns and cities...
        </List.Item>
        <Divider/>

      </List>

    </div>
  </>;
}