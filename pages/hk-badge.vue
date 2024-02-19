<template>
  <div id="hk-badge">
    <RenderPage />

    <div v-if="pending">Loading...</div>
    <div v-else>
      <section :key="syllabus._id" v-for="syllabus in syllabuses">
        <template v-if="syllabus?.badge?.length > 0">
          <h2>{{ "散打 " + syllabus?.level?.split(" ")[0] }}</h2>
          <ol class="list-group list-group-flush list-group-numbered">
            <li v-for="(item, i) in syllabus?.badge" :key="i" class="list-inside list-decimal">
              {{ item }}
            </li>
          </ol>
        </template>
      </section>
      <!-- <div v-for="syllabus in syllabuses" class="m-2 block">
        <template v-if="syllabus?.syllabus.length > 0">
          <h2>{{ syllabus.level }}</h2>
          <div class="container">
            <ol>
              <li
                v-for="item in syllabus?.syllabus"
                :key="item"
                class="list-inside list-decimal"
              >
                {{
                  item.replace("武術散打章別計劃規定動作", "").replace("()", "")
                }}
              </li>
            </ol>
          </div>
        </template>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { GET_SYLLABUS } from "~/utils/queries";

useSeoMeta({
  title: "武術散打章別全港公開試",
  description:
    "香港武術散打自衛術一至十級青少年章別計劃是由香港政府康樂及文化事務署認可及資助之全港性公開武術項目考核試，本會學員可報考章別考核試，考取認可武術章別資格及證書。 而成年學員亦可推薦報考政府認可之武術散打教練及裁判證書課程，考取認可專業資格。",
});

const { data: syllabuses, pending, refresh } = useSanityQuery(GET_SYLLABUS);

if (!syllabuses.value) {
  refresh();
}

// const syllabuses = computed(() => {
//   // NOTE: Change text to a better expression?
//   // console.log(getAssessmentSyllabus);
//   const syllabuses = data?.value
//     ? data.value.map((level) => ({
//         // id: level.id,
//         syllabus: level.syllabus.filter((syllabus) =>
//           syllabus.includes("規定動作")
//         ),
//         level: "散打 " + level.level.split(" ")[0],
//       }))
//     : [];

//   // console.log(syllabuses)

//   return syllabuses;
// });
</script>
