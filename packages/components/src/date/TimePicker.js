import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring'
import {useDrag} from 'react-use-gesture'


const style = {
  width: '30px',
  height: '30px',
  background: 'red',
  touchAction: 'none',//拖动
}

const TimePicker = React.forwardRef((props, ref) => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0 })
  })

  // Bind it to a component
  return <animated.div {...bind()} style={{...style, x, y }} />
});

export default TimePicker;