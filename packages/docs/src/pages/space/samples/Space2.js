import React from 'react';
import { Space, Card, Divider, ButtonGroup, Button } from 'react-windy-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Space2() {
  return (
    <Space direction="vertical">
      <Card hasBox={false} hasBorder={true}>
        <Card.Body>
          <h3>Forbidden City</h3>
          <h5 className="text comment">The Forbidden City and the Imperial Palace</h5>
          <p>
            China's largest and most important building, the Forbidden City — also known as the
            Imperial Palace — is situated in the very heart of Beijing and is a must-see when
            visiting the country.
          </p>
        </Card.Body>
        <Divider />
        <Card.Footer>
          <ButtonGroup block>
            <Button color="green" leftIcon={<FontAwesomeIcon icon={faPhone} />}>
              Phone
            </Button>
            <Button color="blue" leftIcon={<FontAwesomeIcon icon={faMailBulk} />}>
              Mail
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>

      <Card hasBox={false} hasBorder={true}>
        <Card.Body>
          <h3>Forbidden City</h3>
          <h5 className="text comment">The Forbidden City and the Imperial Palace</h5>
          <p>
            China's largest and most important building, the Forbidden City — also known as the
            Imperial Palace — is situated in the very heart of Beijing and is a must-see when
            visiting the country.
          </p>
        </Card.Body>
        <Divider />
        <Card.Footer>
          <ButtonGroup block>
            <Button color="green" leftIcon={<FontAwesomeIcon icon={faPhone} />}>
              Phone
            </Button>
            <Button color="blue" leftIcon={<FontAwesomeIcon icon={faMailBulk} />}>
              Mail
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </Space>
  );
}
