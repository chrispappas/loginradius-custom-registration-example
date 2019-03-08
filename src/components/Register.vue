<template>
  <form action="?" @submit.prevent="handleRegister">
    <dl>
      <dt><label for="name">Name</label></dt>
      <dd>
        <input type="text" name="name" id="name" v-model="name" required />
      </dd>
      <dt><label for="email">Email</label></dt>
      <dd>
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          autocomplete="username"
          required
        />
      </dd>
      <dt><label for="password">Password</label></dt>
      <dd>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          autocomplete="new-password"
          required
        />
      </dd>
      <dd><button type="submit">Register</button></dd>
    </dl>
  </form>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "Chris",
      email: "me+laksjdl@chrispappas.dev",
      password: "testing"
    };
  },
  methods: {
    serialize(obj) {
      return Object.keys(obj)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
        )
        .join("&");
    },
    handleRegister() {
      const schema = [];
      // must manually serialize the json object because LoginRadius' library apparently does not
      // do this automatically? Serious deficiency in either the documentation, or the library (or both)
      const params = this.serialize({
        emailid: this.email,
        password: this.password,
        firstname: this.name
      });

      window.LRObject.api.registration(
        schema,
        params,
        response => {
          window.console.log(response);
        },
        errors => {
          window.console.error(errors);
        }
      );
    }
  }
};
</script>

<style scoped></style>
