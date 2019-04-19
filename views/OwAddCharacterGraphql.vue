<template>
  <section class="section">
    <div class="container">
      <h1 class="is-size-2">Add a Character</h1>
      <hr>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Character Name" name="name" id="name">
        </div>
      </div>
      <div class="field">
        <label class="label">Class</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Character Class"
            name="class"
            id="className"
          >
        </div>
      </div>
      <div class="field">
        <label class="label">Weapons</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Character Weapons"
            name="weapon"
            id="weapon"
          >
        </div>
      </div>
      <div class="field">
        <label class="label">Ultimate</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Character Ultimate"
            name="ultimate"
            id="ultimate"
          >
        </div>
      </div>
      <div class="field">
        <label class="label">Quote</label>
        <div class="control">
          <input class="input" type="text" placeholder="Quote" name="quote" id="quote">
        </div>
      </div>
      <div class="field">
        <label class="label">Image URL</label>
        <div class="control">
          <input class="input" type="text" placeholder="Image URL" name="imageUrl" id="imageUrl">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-link" @click="addOwCharacter">Submit</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {};
  },
  methods: {
    addOwCharacter() {
      const name = document.getElementById("name").value;
      const className = document.getElementById("className").value;
      const weapon = document.getElementById("weapon").value;
      const quote = document.getElementById("quote").value;
      const ultimate = document.getElementById("ultimate").value;
      const imageUrl = document.getElementById("imageUrl").value;
      console.log(name, className, quote, ultimate, imageUrl, weapon);

      this.$apollo
        .mutate({
          mutation: gql`
            mutation createChar(
              $name: String
              $className: String
              $weapon: String
              $quote: String
              $ultimate: String
              $imageUrl: String
            ) {
              createOwcharacter(
                data: {
                  name: $name
                  class: $className
                  weapon: $weapon
                  quote: $quote
                  ultimate: $ultimate
                  imageUrl: $imageUrl
                }
              ) {
                name
                class
                weapon
                quote
                ultimate
                imageUrl
              }
            }
          `,
          variables: {
            name: name,
            className: className,
            weapon: weapon,
            quote: quote,
            ultimate: ultimate,
            imageUrl: imageUrl
          }
        })
        .then(res => {
          this.$router.push({ name: "homeGraphql" });
        });
    }
  }
};
</script>

