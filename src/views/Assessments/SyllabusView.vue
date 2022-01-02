<template>
  <Message severity="info">備注：青少年武術章別動作將為主要考試項目。</Message>
  <TabView>
    <TabPanel
      v-for="syllabus in syllabuses"
      :key="syllabus.name"
      :header="'武術自衛散手 ' + syllabus.name"
    >
      <ol>
        <li v-for="item in syllabus.syllabus" :key="item">{{ item }}</li>
      </ol>
    </TabPanel>
  </TabView>
</template>

<script>
export default {
  name: "SyllabusView",
  data() {
    return {
      syllabuses: [
        // TODO: add other levels
        {
          name: "一級 白带",
          syllabus: [
            "綁手帶 (120秒完成)",
            "手型：直拳 (散手章別計劃規定動作)",
            "直、擺拳、上勾拳擊手靶 (須帶拳套)",
            "原地左右：直拳、擺拳、上勾拳",
            "前、後、左、右蓆（跌法基本功）",
            "格鬥式：正面、側面實戰格鬥資勢，均停頓5秒左右 (散手章別計劃規定動作)",
            "步法   前滑步、後滑步、左滑步、右滑步、各做三次 (散手章別計劃規定動作)",
            "女子 防身自衛術(初級技術考核)",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
