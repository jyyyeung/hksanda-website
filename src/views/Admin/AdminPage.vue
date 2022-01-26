<template>
  <DeferredContent>
    <form>
      <div class="mb-3">
        <label for="usernameInput" class="form-label">用户</label>
        <input type="text" class="form-control" id="usernameInput" />
      </div>
      <div class="mb-3">
        <label for="passwordInput" class="form-label">密码</label>
        <input type="password" class="form-control" id="passwordInput" />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="checkbox" />
        <label class="form-check-label" for="checkbox">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">登入</button>
    </form>
  </DeferredContent>
</template>

<script>
export default {
  name: "AdminPage",
};
</script>

<style lang="scss" scoped></style>
