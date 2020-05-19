import React, {useState} from 'react';
import {useTransition, animated} from 'react-spring';
import {faLaptop} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button} from 'react-windy-ui';

export default function TransitionTest() {
  const [show, set] = useState(false);

  //useChain: 多个特效串起来顺序执行
  //mount/unmount
  const transition = useTransition(show, null, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
  });


  return <>
    <Button onClick={() => set(pre => !pre)}>change</Button>
    {
      transition.map(({item, key, props}) => {
        return item && <animated.div key={key} style={props}>
          <FontAwesomeIcon icon={faLaptop} style={{fontSize: '20px'}}/>
        </animated.div>;
      })
    }
  </>;

}