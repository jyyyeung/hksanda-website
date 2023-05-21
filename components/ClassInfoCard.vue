<template>
    <!--<div class="row">-->
    <!--<div class="">-->
    <span class="class my-4 col-span-12 lg:col-span-6 class__info">
        <h3 class="text-lg">{{ session.title }} （{{ session.type }}）</h3>

        <dl class="grid grid-cols-12 h5">
            <template v-if="session.classroom">
                <dt class="col-span-3">教室</dt>
                <dd class="col-span-9">（{{ session.classroom }}）上课</dd>
            </template>
            <dt class="col-span-3">时间：</dt>
            <dd class="col-span-9">逢{{ session.time }}</dd>
            <dt class="col-span-3">對象</dt>
            <dd class="col-span-9">
                {{ session.students }}
            </dd>
            <template v-if="session.location">
                <dt class="col-span-3">地点</dt>
                <dd class="col-span-9">
                    {{ session.location }}
                </dd>
            </template>
        </dl>

        <button v-if="isAdmin" :label="`編輯 ${session.type}`" class="p-button-primary p-button-sm" type="submit"
            @click="edit(session)" />
        <!--<ConfirmPopup />-->
        <button type="button" v-if="isAdmin" class="p-button-danger p-button-outlined p-button-sm ml-2" icon="pi pi-times"
            label="删除" @click="confirm($event, session)" />
    </span>
    <!--</div>-->
    <!--
  <div
  v-show="session.mapQuery"
  class="col-12 col-lg-6"
  >
  <iframe
  :src="`https://maps.google.com/maps?f=q&source=s_q&hl=zh-HK&geocode=&q=${session.mapQuery}&aq=&ie=UTF8&t=m&z=17&output=embed`"
  :title="`${session.mapQuery}-Map`"
  height="100%"
  width="100%"
  frameborder="0"
  scrolling="no"
  />
  </div>
-->
    <!--</div>-->
</template>

<script setup>

const props = defineProps({
    session: {
        type: Object,
        default: () => ({
            title: "",
            type: "",
            students: null,
            location: null,
            mapQuery: null,
            classroom: null,
        }),
    },
    edit: {
        type: Function,
        required: true
    }, remove: {
        type: Function,
        required: true
    },
    isAdmin: Boolean
})


function confirm(event, session) {
    this.$confirm.require({
        target: event.currentTarget,
        message: '你确定要删除吗？',
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        accept: () => {
            props.remove(session)
            this.$toast.add({ severity: 'info', summary: '成功', detail: '已成功删除', life: 3000 });
        },
        reject: () => {
            // this.$toast.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000});
        }
    });
}

</script>

<style lang="scss" scoped>
.class {
    .class__info {

        // margin: 10px;
        &>p {
            line-height: 2em !important;
        }
    }
}
</style>
