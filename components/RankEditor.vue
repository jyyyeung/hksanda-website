<template>
    <div class="grid p-fluid">
        <div class="col-12 md:col-4">
            <label for="rankingAwardees">
                {{ editedRanking.name }}
                <Textarea id="rankingAwardees" v-model="editedRanking.awardees" :auto-resize="true" cols="50" rows="5" />
            </label>
        </div>
    </div>

    <Button label="儲存" @click="props.submitFunction(editedRanking)" />
</template>

<script setup>
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

