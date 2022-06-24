import React from 'react';
import { Button, IconSearch } from 'react-windy-ui';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconButton = () => {
  return (
    <>
      <div className="doc doc-row">
        <Button type="primary" size="large" leftIcon={<FontAwesomeIcon icon={faCog} size="1x" />} />
        <Button type="primary" size="medium" leftIcon={<FontAwesomeIcon icon={faCog} />} />
        <Button type="primary" size="small" leftIcon={<FontAwesomeIcon icon={faCog} />} />
      </div>
      <div className="doc doc-row">
        <Button type="primary" size="large" leftIcon={<IconSearch />} circle />
        <Button type="primary" size="medium" leftIcon={<IconSearch />} circle />
        <Button type="primary" size="small" leftIcon={<IconSearch size="small" />} circle />
      </div>
    </>
  );
};

export default IconButton;
