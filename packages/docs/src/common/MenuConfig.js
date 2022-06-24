const MenuConfig = {
  start: 'doc.menu.start',
  basic: {
    type: 'subMenu',
    id: 'basicIndex',
    label: 'doc.menu.formIndex',

    items: {
      button: 'doc.menu.button',
      checkbox: 'doc.menu.checkbox',
      menu: 'doc.menu.menu',
      input: 'doc.menu.input',
      'text-field': 'doc.menu.text-field',
      radio: 'doc.menu.radio',
      select: 'doc.menu.select',
      toggle: 'doc.menu.toggle',
      datepicker: 'doc.menu.datepicker',
      timepicker: 'doc.menu.timepicker',
      form: 'doc.menu.form',
      affix: 'doc.menu.affix'
    }
  },

  pop: {
    type: 'subMenu',
    id: 'popIndex',
    label: 'doc.menu.pop',

    items: {
      dropdown: 'doc.menu.dropdown',
      popover: 'doc.menu.popover',
      popConfirm: 'doc.menu.popConfirm',
      tooltip: 'doc.menu.tooltip',
      modal: 'doc.menu.modal',
      drawer: 'doc.menu.drawer'
    }
  },
  info: {
    type: 'subMenu',
    id: 'infoIndex',
    label: 'doc.menu.info',

    items: {
      badge: 'doc.menu.badge',
      alert: 'doc.menu.alert',
      notification: 'doc.menu.notification',
      loader: 'doc.menu.loader',
      progress: 'doc.menu.progress'
    }
  },
  data: {
    type: 'subMenu',
    id: 'dataIndex',
    label: 'doc.menu.data',

    items: {
      avatar: 'doc.menu.avatar',
      list: 'doc.menu.list',
      skeleton: 'doc.menu.skeleton',
      navbar: 'doc.menu.navbar',
      tree: 'doc.menu.tree',
      blockquote: 'doc.menu.blockquote',
      carousel: 'doc.menu.carousel',
      table: 'doc.menu.table',
      pagination: 'doc.menu.pagination',
      typography: 'doc.menu.typography',
      stepper: 'doc.menu.stepper'
    }
  },
  layout: {
    type: 'subMenu',
    id: 'layoutIndex',
    label: 'doc.menu.layoutIndex',

    items: {
      container: 'doc.menu.container',
      space: 'doc.menu.space',
      collapse: 'doc.menu.collapse',
      grid: 'doc.menu.grid',
      tabs: 'doc.menu.tabs',
      breadcrumb: 'doc.menu.breadcrumb',
      card: 'doc.menu.card',
      layout: 'doc.menu.layout',
      box: 'doc.menu.box'
    }
  },

  utilsIndex: {
    type: 'subMenu',
    id: 'utilsIndex',
    label: 'doc.menu.utilsIndex',

    items: {
      hooks: 'doc.menu.hooks',
      theme: 'doc.menu.theme',
      icons: 'doc.menu.icons',
      classes: 'doc.menu.classes',
      functions: 'doc.menu.functions'
    }
  }
};

export default MenuConfig;
