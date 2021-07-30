import React from 'react';
import {Stepper} from "react-windy-ui";

export default function Stepper5() {
  return <>
    <div className="doc doc-row">
      <Stepper activeStep={3} dotIcon={true} direction="vertical" reverse={true} grayDot={true}>
        <Stepper.Step title="您已提交订单，等待系统确认">2021-07-11 16:22:33</Stepper.Step>
        <Stepper.Step title="订单已确认，已通知商家配货">2021-07-11 16:32:13</Stepper.Step>
        <Stepper.Step title="您的订单已经打包完成，正在通知快递取件">2021-07-12 11:32:13</Stepper.Step>
        <Stepper.Step title="【上海市】 快件离开 【上海一号网点】 已发往 【上海浦东转运中心】">2021-07-13 12:32:13</Stepper.Step>
      </Stepper>
    </div>
  </>
};