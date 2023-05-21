<template>
  <div>
    <button type="button" v-if="getIsAdmin" label="添加項目" @click="create(index)" />
    <ol class="list-group list-group-flush list-group-numbered">
      <li v-for="(item, i) in syllabus?.syllabus" :key="item" class="list-decimal list-outside">
        {{ item }}
        <button v-if="getIsAdmin"
          class="text-white bg-primary font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" type="button"
          @click="edit(index, i)">
          編輯
        </button>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { GET_SYLLABUS_BY_ID, MODIFY_SYLLABUS } from "@/apollo/assessment-syllabus";
// import {useMeta} from "vue-meta";

useSeoMeta({
  title: '武術自衛散手考試動作',
})

const route = useRoute();

const { data } = await useAsyncQuery(GET_SYLLABUS_BY_ID, {
  id: route.params.id
});
const syllabus = data?.value?.getSyllabusById;

const editingSyllabus = ref(-1);
const syllabusIndex = ref(-1);

const store = useMainStore();
const { getIsAdmin } = storeToRefs(store);
const { toggleModel } = store;

function edit(index, i) {
  editingSyllabus.value = index;
  syllabusIndex.value = i;
  const modelDetails = {
    content: getAssessmentSyllabus[index].syllabus[i],
    submitFunction: submitChange,
    type: "syllabus",
  };
  toggleModel(modelDetails);
}

function create(index) {
  editingSyllabus.value = index;
  syllabusIndex.value = -1;
  const modelDetails = {
    content: "",
    submitFunction: submitChange,
    type: "syllabus",
  };
  toggleModel(modelDetails);
}

function submitChange(newContent) {
  // id of view
  const assessment = Object.assign(
    {},
    getAssessmentSyllabus[editingSyllabus.value]
  );

  let syllabus = Object.assign([], assessment.syllabus);
  if (syllabusIndex.value >= 0) {
    syllabus[syllabusIndex.value] = newContent;
  } else {
    syllabus.push(newContent);
  }
  const { mutate } = useMutation(MODIFY_SYLLABUS, {
    level: {
      level: assessment.name,
      levelId: assessment.id,
      syllabus: syllabus,
    },
  });
  editingSyllabus.value = -1;
  syllabusIndex.value = -1;
}


</script>
