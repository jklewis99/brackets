<template>
  <div>
    <h1>Sign in</h1>
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
</style>