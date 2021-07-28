import React, {useMemo, useState} from 'react';
import HomeHeader from '../home/HomeHeader';
import {Affix, Card, Col, Drawer, initStore, Responsive, RouteLoader, Row, useMediaQuery,} from 'react-windy-ui';
import DocMenu from './DocMenu';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
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
import AffixIndex from '../pages/affix/AffixIndex';
import QuickManu from './QuickManu';
import {QuickManuContext} from '../utils/DocUtils';
import SpaceIndex from "../pages/space/SpaceIndex";
import TextFieldIndex from "../pages/text_field/TextFieldIndex";
import StartIndex from "../pages/start/StartIndex";
import AvatarIndex from "../pages/avatar/AvatarIndex";
import TimeIndex from "../pages/time/TimeIndex";
import ListIndex from "../pages/list/ListIndex";
import SkeletonIndex from "../pages/skeleton/SkeletonIndex";
import ContainerIndex from "../pages/container/ContainerIndex";
import TypographyIndex from "../pages/typography/TypographyIndex";

function DocCenter(props) {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const {url} = useRouteMatch();
  const responsive = useMemo(() => ({
    xg: Responsive.xg.min,
    lg: Responsive.lg.min,
    sm: Responsive.sm.max,
  }), []);
  const {xg: isMinXg, lg: isMinLg, sm: isMaxSm} = useMediaQuery(responsive);

  let contentProps;
  if (isMinXg) {
    contentProps = {col: 8};
  } else if (isMinLg) {
    contentProps = {col: 10};
  } else {
    contentProps = {col: 12};
  }

  let containerStyle = {padding: '16px 16px'};

  const [store] = useState(() =>
    initStore({list: []}), /**{list:  [{id: xx, text: xxx}]} **/
  );

  const [activeDrawer, setActive] = useState(false);

  return <QuickManuContext.Provider value={{quickManuStore: store}}>
    <HomeHeader/>
    <div style={containerStyle}>
      {
        !isMinLg &&
        <Drawer active={activeDrawer}
                position="left"
                hasAnchor
                style={{width: isMaxSm ? '80%' : '300px'}}
                onChange={(show) => setActive(show)}>
          <DocMenu hasBox={false}
                   onSelectMenuItem={() => setActive(false)}/>
        </Drawer>
      }

      <Row gutter={{x: 16, y: 32}}>
        {
          isMinLg &&
          <Col col={2} extraClassName="doc left-col">
            <Affix top={80}>
              <DocMenu hasBox={false}
                       onSelectMenuItem={() => setActive(false)}/>
            </Affix>
          </Col>
        }
        <Col {...contentProps} extraClassName="doc content-col">
          <Card block hasBox={false}>
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
                <RouteLoader route={Route} path={`${url}/affix`}>
                  <AffixIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/hooks`}>
                  <HooksIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/space`}>
                  <SpaceIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/text-field`}>
                  <TextFieldIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/start`}>
                  <StartIndex/>
                </RouteLoader>
                <RouteLoader route={Route} path={`${url}/avatar`} render={() => <AvatarIndex/>}/>
                <RouteLoader route={Route} path={`${url}/timepicker`} render={() => <TimeIndex/>}/>
                <RouteLoader route={Route} path={`${url}/list`} render={() => <ListIndex/>}/>
                <RouteLoader route={Route} path={`${url}/skeleton`} render={() => <SkeletonIndex/>}/>
                <RouteLoader route={Route} path={`${url}/container`} render={() => <ContainerIndex/>}/>
                <RouteLoader route={Route} path={`${url}/typography`} render={() => <TypographyIndex/>}/>
                <RouteLoader route={Route} path={`${url}/`}>
                  <StartIndex/>
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
        {isMinXg && <Col col={2}>
          <Affix top={80}>
            <QuickManu/>
          </Affix>
        </Col>}
      </Row>
    </div>
  </QuickManuContext.Provider>;

}

export default DocCenter;