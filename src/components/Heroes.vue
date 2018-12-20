<template>
  <ul class="grid">
    <li v-for="item in characters" class="col" v-bind:key="item.id">
      <article class="hero">
        <header class="hero-top">
          <img v-bind:src="item.image.original_url" class="hero-img" v-bind:alt="item.name">
        </header>
        <h3 class="title">
          <router-link class="hero-link" v-bind:to="{ path: `hero/${item.id}`}">{{ item.name }}</router-link>
        </h3>
        <span class="company-name">{{item.publisher.name}}</span>
        <span class="issues">{{item.first_appeared_in_issue.issue_number}} issues</span>
      </article>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Heroes",
  props: ["characters"]
};
</script>

<style lang="scss" scoped>
.grid {
  margin: 0 -15px;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.col {
  margin: 0 15px 36px 15px;
  @media (min-width: 800px) {
    width: calc(50% - 30px);
  }
  @media (min-width: 1024px) {
    width: calc(33.33% - 30px);
  }
}

.hero {
  position: relative;
}

.hero-link {
  color: #2c467f;
  text-decoration: none;
  font-family: "Open Sans";
}

.hero-top {
  height: 231px;
  overflow: hidden;
  margin-bottom: 10px;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.title {
  margin: 0;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 18px;
  letter-spacing: 0.05em;
}

.issues {
  position: absolute;
  right: 0;
  bottom: 18px;
  font-size: 10px;
  color: #849acc;
  font-family: "Open Sans";
  font-size: 10px;
  text-align: right;
  letter-spacing: 0.05em;
}

.company-name {
  font-family: "Open Sans";
  font-size: 10px;
  color: #c1c4cc;
}
</style>
