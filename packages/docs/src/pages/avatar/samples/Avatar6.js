import React from 'react';
import {Avatar, Button, IconAccount, IconEdit, Space, PopConfirm, Tooltip} from 'react-windy-ui';
import img from "../../../style/imgs/girl.jpg";

export default function Avatar6() {
  return <>
    <Space>
      <Avatar shape="circle" size="large" src={img}
              accessory={<Avatar shape="circle" hasBox={false} style={{background: 'rgb(251, 190, 17)'}}>
                <Tooltip body="VIP User" position="bottom"><span>V</span></Tooltip>
              </Avatar>}/>

      <Avatar shape="round" size="large" style={{background: "#49b847"}}
              accessory={<Avatar shape="circle" hasBox={false} style={{background: 'rgb(251, 190, 17)'}}>

                <PopConfirm body="Would you like to edit your avatar?">
                  <Tooltip body="click me">
                    <Button hasBox={false} hasBorder={false} color="red" inverted>
                      <IconEdit style={{fontSize: '.8rem'}}/>
                    </Button>
                  </Tooltip>
                </PopConfirm>

              </Avatar>}>
        <IconAccount/>
      </Avatar>

      <Avatar shape="circle" size="large" style={{background: "#49b847"}}
              accessory={<Avatar shape="circle" hasBox={false} style={{background: 'rgb(251, 190, 17)'}}>
                V
              </Avatar>}>
        B
      </Avatar>
    </Space>

  </>;

}