import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring'
import {useDrag} from 'react-use-gesture'


const style = {
  width: '30px',
  height: '30px',
  background: 'red'
}

const TimePicker = React.forwardRef((props, ref) => {
  const [axis, setAxis] = useState({x: 0, y: 0});
  const [{x, y}] = useSpring(() => axis);

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({down, movement: [mx, my]}) => {
    console.log("hello")
    setAxis({x: down ? mx : 0, y: down ? my : 0})
  })

  // Bind it to a component
  return <animated.div {...bind()} style={{...style, transform: `translate3d(${x}px, ${y}px, 0)`}}/>
});

export default TimePicker;