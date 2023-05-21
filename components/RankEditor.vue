<template>
    <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-4">
            <label for="rankingAwardees">
                {{ editedRanking.name }}
                <Textarea id="rankingAwardees" v-model="editedRanking.awardees" :auto-resize="true" cols="50" rows="5" />
            </label>
        </div>
    </div>

    <button type="button" label="儲存" @click="props.submitFunction(editedRanking)" />
</template>

<script setup lang="ts">
const props = defineProps({
    ranking: {
        type: Object,
        default: () => ({
            name: "",
            awardees: ""
        })
    },
    submitFunction: {
        type: Function,
        default: () => {
            return null
        }
    }
})

const editedRanking = reactive({
    name: "",
    awardees: ""
})

onMounted(() => {
    editedRanking = Object.assign({}, props.ranking);
})
</script>

