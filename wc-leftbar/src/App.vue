<template>
  <div id="panel">
    <div class="hide">
      <Option></Option>
    </div>
    <!--:theme="selectedTheme" -->
    <sidebar-menu
      :collapsed="collapsed"
      :menu="menu"
      :show-one-child="true"
      :disableHover="true"
      @toggle-collapse="onCollapse"
      @item-click="onItemClick"
    ></sidebar-menu>
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu';
import  Option   from './components/Option.vue';
export default {
  components: {
    SidebarMenu,
    Option
  },
  data() {
    return {
      collapsed: false,
      menu: [
        {
          header: true,
          title: 'Vue Cli 2',
          hiddenOnCollapse: true,
        },
        {
          component: Option,
          hidden: false,
          hiddenOnCollapse: true
        },
        {
          title: 'Menu 1',
          icon: 'far fa-address-book',
          // href: '#',
        },
        {
          title: 'Menu 2',
          icon: 'far fa-address-book',
          child: [
            {
              // href: '/panel/recipe_community',
              title: 'by Community',
            },
            {
              // href: '/panel/recipe_tiarapot',
              title: 'by Tiarapot',
            },
          ],
        },
      ],
    };
  },
  props: {
    relative: {
      type: Boolean,
      default: true,
    },
    list: {
      type: String,
      default: "['./images/crown.svg']",
    },
  },
  Created() {
    console.log(this.data);
  },
  methods: {
    onCollapse() {},
    onItemClick(event, item) {
      if (item.title === 'Menu 1') {
        console.log('event hacia el shelll vue');
        this.$emit('event-vue-shell', { list: this.list });
      }
    },
  },
};
</script>
<style lang="css">
@import './../node_modules/vue-sidebar-menu/dist/vue-sidebar-menu.css';
@import './../node_modules/fortawesome/fontawesome-free/css/all.min.css';

.hide{
  display: none;
}
.fade-animation-enter-active {
  transition: transform 0.15s, opacity 0.45s !important;
}
.fade-animation-enter,
.fade-animation-leave-to {
  transform: translateX(-60%) !important;
  opacity: 0 !important;
}

.b-sidebar {
  margin-top: 38px !important;
}
.wrapper-button {
  width: 100%;
  background-color: #212529;
}
.v-sidebar-menu {
  max-width: 350px;
  position: static;
  height: 94vh;
}
</style>
