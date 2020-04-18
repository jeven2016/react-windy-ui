const addWindowEventListener = (type, handler) => {
  if (!type) {
    throw new Error('addWindowEventListener: the event type is invalid.');
  }

  let func;
  if (window.addEventListener) {
    func = window.addEventListener;
  } else if (window.attachEvent) {
    func = window.attachEvent;
    if (type === 'click') {
      type = 'onclick';
    }
  }
  func(type, handler, false);
};

const removeWindowEventListener = (type, handler) => {
  window.removeEventListener(type, handler, false);
};

const preventEvent = (evt) => {
  if (!evt) {
    console.warn("the evt doesn't exist.")
    return;
  }
  evt.preventDefault();
  evt.stopPropagation();
};

export {
  addWindowEventListener,
  removeWindowEventListener,
  preventEvent,
};