<template>
    <form ref="form" @submit="submitCredentials">
        <div class="form-group mb-3">
            <label for="usernameInput" class="form-label">用户</label>
            <input type="text" class="form-control" id="usernameInput" v-model="username" />
        </div>
        <div class="form-group mb-3">
            <label for="passwordInput" class="form-label">密码</label>
            <input type="password" class="form-control" id="passwordInput" v-model="password" />
        </div>
        <button type="submit" class="btn btn-primary">登入</button>
    </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import bcrypt from "bcryptjs";

export default {
    name: "AdminPage",
    data() {
        return {
            username: "",
            password: "",
        };
    },
    computed: {
        ...mapState(["isAdmin"]),
    },
    methods: {
        ...mapActions(["setIsAdmin"]),
        submitCredentials(e) {
            e.preventDefault();
            // Gen Salt
            /*bcrypt.genSalt(10, (_, salt) => {*/
            /*bcrypt.hash(this.password, salt, (_, hash) => {*/
            /*console.log(hash);*/
            /*});*/
            /*});*/
            const password = this.password;
            const hash =
                "$2a$10$F7yekPuUXAEhtfWTyGKL8OQLF7XtsWdpV8a/g5mZkz1f/uydVIS3q";

            const isPasswordCorrect = bcrypt.compareSync(password, hash);

            if (isPasswordCorrect && this.username == "fyc2005") {
                this.setIsAdmin();
                this.$router.push({ path: "/", replace: true });
            }
        },
    }}
</script>
