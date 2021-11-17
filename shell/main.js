const BIND_ATTR_REGEX = /^:/;
const main = document.querySelector('main');
const store = Redux.createStore(
  (state, action) => {
    switch (action.type) {
      case 'SET_CITIES':
        return {
          ...state,
          cities: action.payload,
        };
      case 'SET_SIDEBAR_OPEN':
        return {
          ...state,
          sidebar: {
            ...state.sidebar,
            open: action.payload,
          },
        };
      default:
        return state;
    }
  },
  {
    cities: { val1: '11', val2: '22', val3: '33', val4: '44', val5: '55' },
    sidebar: {
      list : '["./images/crown.svg"]',
      open: true,
      left: true,
    },
    rightbar:{
      name: "17.0.3"
    },
    appReact: {
      name: 'React 16.3.0',
    },
    footer:{
      name: '6.0.0',
      url: 'http://localhost:8003'
    },
  }
);

function evaluate(__expr__, __state__) {
  return function () {
    with (__state__) {
      try {
        return eval(__expr__);
      } catch (err) {
        return null;
      }
    }
  }.call(__state__);
}

function update(node, state) {
  let children = node.querySelectorAll('*');

  for (let c of children) {
    for (let attr of c.attributes) {
      if (BIND_ATTR_REGEX.test(attr.name)) {
        let attrName = attr.name.replace(BIND_ATTR_REGEX, '');
        let value = evaluate(attr.value, state);
        c.setAttribute(attrName, JSON.stringify(value));
      }
    }
  }
}

store.subscribe(() => update(main, store.getState()));
update(main, store.getState());

// const test = main.querySelector('wc-header');
// test.addEventListener('event-shell', (e) => {
//   console.log(e, 'aqui');
//   store.dispatch({ type: 'SET_CITIES', payload: e.detail });
//   console.log('recibiendo evento del appRoot React', e.detail);
// });

//react 16
window.addEventListener('react-header-event', function(e){
  console.log('evento ya en el shell React');
  store.dispatch({ type: 'SET_CITIES', payload: e.detail });
}) 

//vue 2
const vue = document.querySelector('wc-leftbar');
vue.addEventListener('event-vue-shell', (e) => {
  console.log('evento ya en el shell Vue', e.detail);
});

//angular 6
const angular = document.querySelector('wc-footer');
angular.addEventListener('eventAngularShell', function(e){
  console.log('evento ya en el shell Angular 6', e.detail);
}) 
