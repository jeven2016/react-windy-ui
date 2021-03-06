import React from 'react';
import {Button, Col, Popover, Row} from 'react-windy-ui';
import {faSmile} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function HomeFooter() {
  return <div className="doc home-footer">
    <Row>
      <Col xs={12} sm={3}>
        <div className="doc footer-panel">
          <div className="doc footer-title">
            其他资源
          </div>
          <ul className="doc home-link">
            <li>代码仓库</li>
            <li>Wui样式库</li>
            <li>图标库</li>
            <li>在线主题编辑器</li>
          </ul>
        </div>

      </Col>
      <Col xs={12} sm={3}>
        <div className="doc footer-panel">
          <div className="doc footer-title">
            成为贡献者
          </div>
          <ul className="doc home-link">
            <li>提交更新</li>
            <li>报告Bug</li>
            <li>修改样式</li>
          </ul>
        </div>
      </Col>
      <Col xs={12} sm={3}>
        <div className="doc footer-panel">
          <div className="doc footer-title">
            获取帮助
          </div>
          <ul className="doc home-link">
            <li>常见问题</li>
            <li>在线讨论</li>
            <li>StackOverflow</li>
          </ul>
        </div>
      </Col>
      <Col xs={12} sm={3}>
        <div className="doc footer-panel right">
          <div className="doc footer-title">
            进行捐助
          </div>
          <Popover position="top" autoWidth body={<div>
            <p>Haha, you're so kind. </p>
            <p>Appreciate to access this project.</p>
            {<FontAwesomeIcon icon={faSmile} style={{color: '#49b847'}}/>}
            {<FontAwesomeIcon icon={faSmile} style={{color: '#49b847'}}/>}
            {<FontAwesomeIcon icon={faSmile} style={{color: '#49b847'}}/>}
          </div>}>
            <Button color="green" outline>我要捐助</Button>
          </Popover>
        </div>
      </Col>
    </Row>
  </div>;
}