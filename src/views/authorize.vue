<template>
  <div class='sign-in'>
    <h2>Sign in</h2>
		<div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import autho from '../firebaseAuth'
export default {
  name: "authorize",
  mounted() {
    autho.authForm("#firebaseui-auth-container");
  }
};
</script>

<style>
@import "../../node_modules/firebaseui/dist/firebaseui.css";
.sign-in {
  display: flex;
  /* justify-content: center; */
  padding-top: 20px;
  flex-direction: column;
  text-align: center;
  width: 400px;
  height: 400px;
}
</style>