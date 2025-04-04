<template>
  <section>FILTER</section>
  <section>
    <base-card>
      <div>
        
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register As A Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :areas="coach.areas"
          :rate="coach.hourlyRate"
        ></coach-item>
      </ul>
      <h1 v-else>No Coaches</h1>
    </base-card>
  </section>
</template>
<script>
import CoachItem from "../../components/coaches/CoachItem.vue";

export default {
  components: {
    CoachItem,
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters["coaches/coaches"];
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>
