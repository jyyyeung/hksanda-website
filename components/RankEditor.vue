<template>
    <div class="grid p-fluid">
        <div class="col-12 md:col-4">
            <label for="rankingAwardees">
                {{ editedRanking.name }}
                <Textarea
                    id="rankingAwardees"
                    v-model="editedRanking.awardees"
                    :auto-resize="true"
                    cols="50"
                    rows="5"
                />
            </label>
        </div>
    </div>

    <Button
        label="儲存"
        @click="submitFunction(editedRanking)"
    />
</template>

<script>

export default {
    name: "RankEditor",
    props: {
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
    },
    data() {
        return {
            editedRanking: {
                name: "",
                awardees: ""
            },
        };
    },
    mounted() {
        this.editedRanking = Object.assign({}, this.ranking);
    },
};
</script>

<style></style>
