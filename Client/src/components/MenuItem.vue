<template>
  <div :class="['menu-item', menuItem.cssClass ? menuItem.cssClass : undefined]">
    <q-item v-if="(menuItem.to || menuItem.externalUrl) && !menuItem.subMenuItems" :to="to" :clickable="true"
            @click.native="goExternal()" :exact="menuItem.exact">
      <q-item-section avatar v-if="menuItem.icon">
        <q-icon :name="menuItem.icon"/>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{menuItem.title}}</q-item-label>
        <q-item-label caption>{{menuItem.subTitle}}</q-item-label>
      </q-item-section>
    </q-item>
    <q-expansion-item :expand-separator="expandSeparator" v-if="menuItem.subMenuItems" :icon="menuItem.icon"
                      :label="menuItem.title" :caption="menuItem.subTitle"
                      @click.native="goExternal()" :to='to' :exact="menuItem.exact">
      <MenuItem :menuItem="subItem" :key="subItem.id" v-for="subItem of menuItem.subMenuItems"/>
    </q-expansion-item>
  </div>
</template>

<script>

  export default {
    name: 'MenuItem',
    props: {
      menuItem: Object,
      required: true
    },
    computed: {
      to() {
        return this.menuItem.to;
      },
      expandSeparator() {
        return this.menuItem.settingsJson?.expandSeparator;
      }
    },
    methods: {
      goExternal() {
        if (this.menuItem.externalUrl)
          window.open(this.menuItem.externalUrl);
      }
    },
    beforeCreate() {
      this.$options.components.MenuItem = require('sun').MenuItem;
    }
  }

</script>

<style>

</style>
