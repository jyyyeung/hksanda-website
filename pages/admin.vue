<template>
    <form ref="form" @submit="submitCredentials">
        <div class="form-group mb-3">
            <label class="form-label" for="usernameInput" html-for="usernameInput">用户<input id="usernameInput"
                    v-model="username" class="form-control" type="text"></label>
        </div>
        <div class="form-group mb-3">
            <label class="form-label" for="passwordInput" html-for="passwordInput">密码
                <input id="passwordInput" v-model="password" class="form-control" type="password">
            </label>
        </div>
        <button class="text-white bg-primary font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            type="submit">
            登入
        </button>
    </form>
</template>

<script setup lang="ts">
import bcrypt from "bcryptjs";

const username = ref("")
const password = ref("")

const store = useMainStore();
const { getIsAdmin } = storeToRefs(store);
const { setIsAdmin } = store;

function submitCredentials(e) {
    e.preventDefault();
    // const password = password;
    const hash =
        "$2a$10$F7yekPuUXAEhtfWTyGKL8OQLF7XtsWdpV8a/g5mZkz1f/uydVIS3q";

    const isPasswordCorrect = bcrypt.compareSync(password, hash);

    if (isPasswordCorrect && username === "fyc2005") {
        setIsAdmin();
        // TODO: Update to new router 
        this.$router.push({ path: "/", replace: true });
    }
}
</script>
