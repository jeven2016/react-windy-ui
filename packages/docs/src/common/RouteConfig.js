import React from "react";

// const ButtonIndex = React.lazy(() => import('../pages/button/ButtonIndex'));
const ButtonIndex = React.lazy(() => import('../pages/button/ButtonIndex'));
const InputIndex = React.lazy(() => import( '../pages/input/InputIndex'));
const CheckboxIndex = React.lazy(() => import( '../pages/checkbox/CheckboxIndex'));
const RadioIndex = React.lazy(() => import( '../pages/radio/RadioIndex'));
const ToggleIndex = React.lazy(() => import( '../pages/toggle/ToggleIndex'));
const CollapseIndex = React.lazy(() => import( '../pages/collapse/CollapseIndex'));
const MenuIndex = React.lazy(() => import( '../pages/menu/MenuIndex'));
const PopoverIndex = React.lazy(() => import( '../pages/popover/PopoverIndex'));
const TooltipIndex = React.lazy(() => import( '../pages/tooltip/TooltipIndex'));
const SelectIndex = React.lazy(() => import( '../pages/select/SelectIndex'));
const DpIndex = React.lazy(() => import( '../pages/dropdown/DpIndex'));
const BadgeIndex = React.lazy(() => import( '../pages/badge/BadgeIndex'));
const DrawerIndex = React.lazy(() => import( '../pages/drawer/DrawerIndex'));
const AlertIndex = React.lazy(() => import( '../pages/alert/AlertIndex'));
const NotificationIndex = React.lazy(() => import( '../pages/notification/NotificationIndex'));
const ModalIndex = React.lazy(() => import( '../pages/modal/ModalIndex'));
const LoaderIndex = React.lazy(() => import( '../pages/loader/LoaderIndex'));
const ProgressIndex = React.lazy(() => import( '../pages/progress/ProgressIndex'));
const NavbarIndex = React.lazy(() => import( '../pages/navbar/NavbarIndex'));
const TreeIndex = React.lazy(() => import( '../pages/tree/TreeIndex'));
const BqIndex = React.lazy(() => import( '../pages/blockquote/BqIndex'));
const GridIndex = React.lazy(() => import( '../pages/grid/GridIndex'));
const CrIndex = React.lazy(() => import( '../pages/carousel/CrIndex'));
const TabsIndex = React.lazy(() => import( '../pages/tabs/TabsIndex'));
const BcIndex = React.lazy(() => import( '../pages/breadcumb/BcIndex'));
const CardIndex = React.lazy(() => import( '../pages/card/CardIndex'));
const LayoutIndex = React.lazy(() => import( '../pages/layout/LayoutIndex'));
const TableIndex = React.lazy(() => import( '../pages/table/TableIndex'));
const PaginationIndex = React.lazy(() => import( '../pages/pagination/PaginationIndex'));
const DatePickerIndex = React.lazy(() => import( '../pages/datepicker/DatePickerIndex'));
const PcIndex = React.lazy(() => import( '../pages/popconfirm/PcIndex'));
const FormIndex = React.lazy(() => import( '../pages/form/FormIndex'));
const HooksIndex = React.lazy(() => import( '../pages/hooks/HooksIndex'));
const AffixIndex = React.lazy(() => import( '../pages/affix/AffixIndex'));
const SpaceIndex = React.lazy(() => import( "../pages/space/SpaceIndex"));
const TextFieldIndex = React.lazy(() => import( "../pages/text_field/TextFieldIndex"));
const StartIndex = React.lazy(() => import( "../pages/start/StartIndex"));
const AvatarIndex = React.lazy(() => import( "../pages/avatar/AvatarIndex"));
const TimeIndex = React.lazy(() => import( "../pages/time/TimeIndex"));
const ListIndex = React.lazy(() => import( "../pages/list/ListIndex"));
const SkeletonIndex = React.lazy(() => import( "../pages/skeleton/SkeletonIndex"));
const ContainerIndex = React.lazy(() => import( "../pages/container/ContainerIndex"));
const TypographyIndex = React.lazy(() => import( "../pages/typography/TypographyIndex"));
const StepperIndex = React.lazy(() => import( "../pages/stepper/StepperIndex"));

const RouteConfig = {
  button: <ButtonIndex/>,
  input: <InputIndex/>,
  radio: <RadioIndex/>,
  checkbox: <CheckboxIndex/>,
  toggle: <ToggleIndex/>,
  collapse: <CollapseIndex/>,
  menu: <MenuIndex/>,
  dropdown: <DpIndex/>,
  popover: <PopoverIndex/>,
  tooltip: <TooltipIndex/>,
  select: <SelectIndex/>,
  badge: <BadgeIndex/>,
  drawer: <DrawerIndex/>,
  alert: <AlertIndex/>,
  notification: <NotificationIndex/>,
  modal: <ModalIndex/>,
  loader: <LoaderIndex/>,
  progress: <ProgressIndex/>,
  navbar: <NavbarIndex/>,
  blockquote: <BqIndex/>,
  tree: <TreeIndex/>,
  grid: <GridIndex/>,
  carousel: <CrIndex/>,
  tabs: <TabsIndex/>,
  breadcrumb: <BcIndex/>,
  card: <CardIndex/>,
  layout: <LayoutIndex/>,
  table: <TableIndex/>,
  pagination: <PaginationIndex/>,
  datepicker: <DatePickerIndex/>,
  popConfirm: <PcIndex/>,
  form: <FormIndex/>,
  affix: <AffixIndex/>,
  hooks: <HooksIndex/>,
  space: <SpaceIndex/>,
  'text-field': <TextFieldIndex/>,
  start: <StartIndex/>,
  avatar: <AvatarIndex/>,
  timepicker: <TimeIndex/>,
  list: <ListIndex/>,
  skeleton: <SkeletonIndex/>,
  container: <ContainerIndex/>,
  typography: <TypographyIndex/>,
  stepper: <StepperIndex/>,
  "": <StartIndex/>, //default route
};

export default RouteConfig;