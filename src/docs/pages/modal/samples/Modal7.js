import React from 'react';
import {Button, Modal, Notification, Tooltip} from 'react-windy-ui';

export default function Modal7() {
  return <>
    <Button type="primary" onClick={() => {
      Modal.info({
        type: 'primary',
        header: '删除成功',
        title: '您已经成功删除此数据。',
        body: '请稍候在系统管理界面上审核该结果，谢谢',
        okText: '确定',
        cancelText: '取消',
        onOk: () => {Notification.info('OK');},
        onCancel: () => {Notification.info('Cancel');},
      });
    }}>
      Info
    </Button>

    <Button type="primary" onClick={(e) => {
      Modal.warning({
        header: '删除成功',
        title: '您已经成功删除此数据。',
        body: '请稍候在系统管理界面上审核该结果，谢谢',
        okText: '确定',
      });
    }}>
      warning
    </Button>

    <Tooltip body="no header">
      <Button type="primary" onClick={(e) => {
        Modal.error({
          title: '系统无法删除此数据。',
          body: '请稍候在系统管理界面上查看该结果，谢谢',
          okText: '确定',
        });
      }}>
        error
      </Button>
    </Tooltip>

    <Button type="primary" onClick={(e) => {
      Modal.success({
        type: 'primary',
        header: '删除成功',
        title: '您已经成功删除此数据。',
        body: '请稍候在系统管理界面上审核该结果，谢谢',
        okText: '确定',
      });
    }}>
      success
    </Button>

    <Button type="primary" onClick={(e) => {
      Modal.confirm({
        type: 'primary',
        header: '确认删除',
        title: '您确认要删除此记录吗？',
        body: '请稍候在系统管理界面上审核该结果，谢谢',
        okText: '确定',
        cancelText: '取消',
        onOk: () => {
          console.log('ok');
        },
        onCancel: () => {
          console.log('cancelled');
        },
      });
    }}>
      confirm
    </Button>
  </>;
}