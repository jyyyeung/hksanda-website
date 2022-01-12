<template>
  <div class="admin">
    <!-- <va-sidebar textColor="dark" width="11rem" minimizedWidth="64px">
      <template v-for="item in items" :key="item.to">
        <va-sidebar-item :to="item.to" :active="item.active">
          <va-sidebar-item-content>
            <va-icon :name="item.icon" />
            <va-sidebar-item-title>
              {{ item.title }}
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </template>
    </va-sidebar> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AdminPanel",
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "dashboard", to: "" },
        { title: "Sidebar demo", icon: "room", active: true },
        { title: "Loop", icon: "loop" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.admin {
  min-width: 100vw;
  margin: 0;
  left: 0;
  position: absolute;
}
</style>
