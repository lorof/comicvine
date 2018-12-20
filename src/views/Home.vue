<template>
  <div>
    <Header/>
    <div class="container">
      <Heroes v-bind:characters="characters"/>
      <ShowMore v-if="characters.length <= 6" v-bind:onClick="loadCharacters"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Header from "@/components/Header";
import Heroes from "@/components/Heroes";
import ShowMore from "@/components/ShowMore";

export default {
  components: {
    Header,
    Heroes,
    ShowMore
  },
  methods: {
    ...mapActions(["loadCharacters"])
  },
  computed: {
    ...mapState(["characters"])
  },
  mounted() {
    this.loadCharacters();
  }
};
</script>
