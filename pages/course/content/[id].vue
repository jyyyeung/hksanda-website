<template>
  <div>
    <Markdown v-bind:source="'# ' + courseDetail?.name" />
    <button v-if="getIsAdmin"
      class="text-white bg-primary font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 " type="button"
      @click="edit(courseDetail)">
      編輯 {{ courseDetail?.name }}
    </button>
    <Markdown :source="courseDetail?.content" />
    <Markdown :source="footer" />
  </div>
</template>

 
<script setup lang="ts">
import { UPDATE_COURSE_CONTENT, GET_COURSE_CONTENT_BY_ID } from "@/apollo/course-contents";
import { Markdown } from "#components"


const footer = `\n\n---\n如希望自行组班或报名私人班，欢迎浏览[*私人及组班课程*](/course/session)\n如有任何疑问，欢迎进行咨询`

const route = useRoute()

const store = useMainStore();
const { getIsAdmin } = storeToRefs(store);


const { data } = await useAsyncQuery(GET_COURSE_CONTENT_BY_ID, { id: route.params.id });
const courseDetail = data.value?.getCourseContentById;

const { toggleModel } = store;


function editCourse(course) {
  // TODO: check if mutation works
  console.log(course);
  const { mutate } = useMutation(UPDATE_COURSE_CONTENT, {
    course: course,
  });
}

function edit(course) {
  const modelDetails = {
    content: course,
    type: "course",
    submitFunction: editCourse,
  };
  console.log(modelDetails);
  toggleModel(modelDetails);
}

</script>
