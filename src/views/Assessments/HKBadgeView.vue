<template>
  <div>
    <h1>武術散手章别全港公開試</h1>
    <p>
      香港武術散手自衛術一至十級青少年章別計劃是由香港政府康樂及文化事務署認可及資助之
      全港性公開武術項目考核試，本會學員可報考章別考核試，考取認可武術章別資格及證書。
    </p>
    <p>
      而成年學員亦可推薦報考政府認可之武術散手教練及裁判證書課程，考取認可專業資格。
    </p>
    <h2>武術散手章別計劃考核內容</h2>
  </div>
  <TabView>
    <TabPanel
      v-for="syllabus in syllabuses"
      :key="syllabus.name"
      :header="syllabus.name"
    >
      <ol>
        <li v-for="item in syllabus.syllabus" :key="item">{{ item }}</li>
      </ol>
    </TabPanel>
  </TabView>
</template>

<script>
export default {
  name: "HKPage",
  data() {
    return {
      syllabuses: [
        // TODO: add other levels
        {
          name: "第一級",
          syllabus: [
            "手型 : 熟知拳之各部分名稱。",
            "格鬥式: 正面、側面、實戰格鬥姿勢，均停頓5秒左右。",
            "步法: 前滑步、後滑步、左滑步、右滑步，至少做三次。",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
