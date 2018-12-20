<template>
  <article class="description" v-if="character.image !== undefined">
    <div class="description__left">
      <img
        v-bind:src="character.image.medium_url"
        class="description-img"
        v-bind:alt="character.name"
      >
    </div>
    <div class="description__right">
      <h1 class="title">{{ character.name }}</h1>
      <ul class="info">
        <li>
          <span class="info-left">Real name:</span>
          <span class="info-right">{{ character.real_name }}</span>
        </li>
        <li>
          <span class="info-left">Publisher:</span>
          <span class="info-right">{{ character.publisher.name }}</span>
        </li>
        <li>
          <span class="info-left">Gender:</span>
          <span class="info-right">{{ gender }}</span>
        </li>
        <li>
          <span class="info-left">Updated:</span>
          <span class="info-right">{{ character.date_last_updated }}</span>
        </li>
      </ul>
      <p class="description__text">{{character.deck}}</p>
    </div>
  </article>
  <article v-else>Loading...</article>
</template>

<script>
export default {
  name: "Description",
  props: ["character"],
  computed: {
    gender() {
      const { gender } = this.$props.character;
      function getGender(type) {
        return {
          1: "Male",
          2: "Female",
          3: "Unknown"
        }[type];
      }
      return getGender(gender);
    }
  }
};
</script>

<style lang="scss" scoped>
.description {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  @media (min-width: 1200px) {
    justify-content: space-between;
  }
}

.description-img {
  width: 100%;
}

.info {
  padding: 0;
  margin: 0;
  list-style-type: none;
  line-height: 28px;
}

.description__left {
  width: 416px;
  height: 610px;
  overflow: hidden;
}

.description__right {
  width: 596px;
}

.description__text {
  font-family: "Open Sans";
  font-size: 18px;
  color: #000000;
  margin-top: 30px;
  line-height: 26px;
}

.title {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 48px;
  letter-spacing: 0.05em;
  color: #2c467f;
  margin: 0 0 20px 0;
}

.info-left {
  font-family: "Open Sans";
  font-size: 14px;
  color: #c1c4cc;
  width: 100px;
  display: inline-block;
}

.info-right {
  font-family: "Open Sans";
  font-size: 14px;
  color: #000000;
  display: inline-block;
}
</style>