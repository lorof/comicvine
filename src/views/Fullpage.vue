<template>
  <div>
    <Header/>
    <div class="container">
      <Hero v-bind:character="character"/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  components: {
    Header,
    Hero
  },
  computed: {
    ...mapState(["character"])
  },
  methods: {
    ...mapActions(["loadCharacter"]),
    ...mapMutations(["clearCharacter"])
  },
  created() {
    this.loadCharacter(this.$route.params.id);
  },
  destroyed() {
    this.clearCharacter();
  }
};
</script>