import React from 'react';
import HomeHeader from '../home/HomeHeader';
import {
  Affix,
  Card,
  Col,
  RouteLoader,
  Row,
  useMediaQuery,
  Responsive,
  Menu,
} from 'react-windy-ui';
import DocMenu from './DocMenu';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import InstallIndex from '../pages/install/InstallIndex';
import ButtonIndex from '../pages/button/ButtonIndex';
import InputIndex from '../pages/input/InputIndex';
import CheckboxIndex from '../pages/checkbox/CheckboxIndex';
import RadioIndex from '../pages/radio/RadioIndex';
import ToggleIndex from '../pages/toggle/ToggleIndex';
import CollapseIndex from '../pages/collapse/CollapseIndex';
import MenuIndex from '../pages/menu/MenuIndex';
import PopoverIndex from '../pages/popover/PopoverIndex';
import TooltipIndex from '../pages/tooltip/TooltipIndex';
import SelectIndex from '../pages/select/SelectIndex';
import DpIndex from '../pages/dropdown/DpIndex';
import BadgeIndex from '../pages/badge/BadgeIndex';
import DrawerIndex from '../pages/drawer/DrawerIndex';
import AlertIndex from '../pages/alert/AlertIndex';
import NotificationIndex from '../pages/notification/NotificationIndex';
import ModalIndex from '../pages/modal/ModalIndex';
import LoaderIndex from '../pages/loader/LoaderIndex';
import ProgressIndex from '../pages/progress/ProgressIndex';
import NavbarIndex from '../pages/navbar/NavbarIndex';
import TreeIndex from '../pages/tree/TreeIndex';
import BqIndex from '../pages/blockquote/BqIndex';
import GridIndex from '../pages/grid/GridIndex';
import CrIndex from '../pages/carousel/CrIndex';
import TabsIndex from '../pages/tabs/TabsIndex';
import BcIndex from '../pages/breadcumb/BcIndex';
import CardIndex from '../pages/card/CardIndex';
import LayoutIndex from '../pages/layout/LayoutIndex';
import TableIndex from '../pages/table/TableIndex';
import PaginationIndex from '../pages/pagination/PaginationIndex';
import DatePickerIndex from '../pages/datepicker/DatePickerIndex';
import PcIndex from '../pages/popconfirm/PcIndex';
import FormIndex from '../pages/form/FormIndex';
import HooksIndex from '../pages/hooks/HooksIndex';

function DocCenter(props) {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const {url} = useRouteMatch();
  const {lg: isLg, md: isMd, sm: isSm} = useMediaQuery({
    lg: Responsive.lg.min,
    md: Responsive.md.min,
    sm: Responsive.sm.min,
  });

  let contentProps;
  if (isLg) {
    contentProps = {lg: 8};
  } else if (isMd) {
    contentProps = {md: 10};
  } else {
    contentProps = {sm: 12};
  }

  let containerStyle;
  if (isLg) {
    containerStyle = {padding: '0 8%'};
  } else if (isMd) {
    containerStyle = {padding: '0 5%'};
  } else {
    containerStyle = {padding: '0 2%'};
  }

  const menu =  <DocMenu/>;

  console.log(`${isSm}, ${isMd}, ${isLg}`)

  return <>
    <HomeHeader/>
    <div style={containerStyle}>
      <Row gutter={{x: 16, y: 32}}>
        {
          isMd &&
          <Col md={2}>
            {/*<Affix top={90}>*/}
            {menu}
            {/*</Affix>*/}
          </Col>
        }
        <Col {...contentProps}>
          <Card block>
            <Card.Row extraClassName="doc page-container">
              <Switch>
                <RouteLoader route={Route} path={`${url}/button`}>
                  <ButtonIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/input`}>
                  <InputIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/radio`}>
                  <RadioIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/checkbox`}>
                  <CheckboxIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/toggle`}>
                  <ToggleIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/collapse`}>
                  <CollapseIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/menu`}>
                  <MenuIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/dropdown`}>
                  <DpIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/popover`}>
                  <PopoverIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/tooltip`}>
                  <TooltipIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/select`}>
                  <SelectIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/badge`}>
                  <BadgeIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/drawer`}>
                  <DrawerIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/alert`}>
                  <AlertIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/notification`}>
                  <NotificationIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/modal`}>
                  <ModalIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/loader`}>
                  <LoaderIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/progress`}>
                  <ProgressIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/navbar`}>
                  <NavbarIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/blockquote`}>
                  <BqIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/tree`}>
                  <TreeIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/grid`}>
                  <GridIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/carousel`}>
                  <CrIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/tabs`}>
                  <TabsIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/breadcrumb`}>
                  <BcIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/card`}>
                  <CardIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/layout`}>
                  <LayoutIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/table`}>
                  <TableIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/pagination`}>
                  <PaginationIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/datepicker`}>
                  <DatePickerIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/popConfirm`}>
                  <PcIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/form`}>
                  <FormIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/hooks`}>
                  <HooksIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/`}>
                  <InstallIndex/>
                </RouteLoader>
                <RouteLoader route={Route}>
                  <div>
                    404, 页面不存在！
                  </div>
                </RouteLoader>
              </Switch>
            </Card.Row>
          </Card>
        </Col>
        {
          isLg &&
          <Col lg={2}>
            <Affix top={70}>
              <Menu hasBox={false}>
                <Menu.Item>示例1: 普通的按钮</Menu.Item>
                <Menu.Item>示例1: 普通的按钮</Menu.Item>
                <Menu.Item>示例1: 普通的按钮</Menu.Item>
                <Menu.Item>示例1: 普通的按钮</Menu.Item>
                <Menu.Item>示例1: 普通的按钮</Menu.Item>
                <Menu.Item>示例1: 普通的按钮</Menu.Item>
                <Menu.Item>示例1: 普通的按钮</Menu.Item>
                <Menu.Item>示例1: 普通的按钮</Menu.Item>
                <Menu.Item>示例1: 普通的按钮</Menu.Item>
              </Menu>
            </Affix>
          </Col>
        }
      </Row>
    </div>
  </>;

}

export default DocCenter;