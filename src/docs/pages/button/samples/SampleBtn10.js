import React, {useState} from 'react';
import {Button, Toggle, Loader} from 'react-windy-ui';

const SampleBtn10 = () => {
  const [disabled, setDisabled] = useState(false);
  return <>
    <Toggle onChange={(value) => setDisabled(value)}/>
    <br/>
    <Button color="purple" disabled={disabled} onClick={() => alert('click')}>purple</Button>

    <Button color="blue" disabled={disabled} onClick={() => alert('click')}>
      <span>{disabled ? 'saving' : 'save'}</span>
      {
        disabled && <Loader type="third" size="small" color="white"
                            active={disabled}/>
      }

    </Button>

  </>;
};

export default SampleBtn10;