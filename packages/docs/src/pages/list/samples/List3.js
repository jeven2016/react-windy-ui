import React from 'react';
import { Divider, List } from 'react-windy-ui';
import Avatar from 'react-windy-ui/src/avatar';
import Button from 'react-windy-ui/src/button';
import { faCog, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../../style/imgs/girl.jpg';

export default function List2() {
  return (
    <>
      <div className="doc doc-row">
        <List>
          <List.Item
            type="panel"
            icon={
              <Avatar hasBox={false} size="small" extraClassName="bg-color-green">
                B
              </Avatar>
            }
            title="Bob"
            description="The description for this person"
            actions={[
              <Button inverted hasBox={false}>
                <FontAwesomeIcon icon={faPhone} />
              </Button>,
              <Button inverted hasBox={false}>
                <FontAwesomeIcon icon={faCog} />
              </Button>
            ]}
          />
          <Divider />
          <List.Item
            type="panel"
            icon={
              <Avatar hasBox={false} size="small" extraClassName="bg-color-green">
                W
              </Avatar>
            }
            title="Wang"
            description="The description for this person"
            actions={[
              <Button inverted hasBox={false}>
                <FontAwesomeIcon icon={faPhone} />
              </Button>,
              <Button inverted hasBox={false}>
                <FontAwesomeIcon icon={faCog} />
              </Button>
            ]}
          />
          <Divider />
          <List.Item
            type="panel"
            icon={<Avatar hasBox={false} size="small" extraClassName="bg-color-green" src={img} />}
            title="She"
            description="The description for this person"
            actions={[
              <Button inverted hasBox={false}>
                <FontAwesomeIcon icon={faPhone} />
              </Button>,
              <Button inverted hasBox={false}>
                <FontAwesomeIcon icon={faCog} />
              </Button>
            ]}
          />
          <Divider />
        </List>
      </div>
    </>
  );
}
