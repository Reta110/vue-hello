<template>
  <div class="container text-center">
    <h1>Mi lista</h1>

    <ol class="list-group list-group-numbered">
      <li
        v-for="(user, index) of arrayOrdenado"
        :key="user.id"
        @click="adding(index)"
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ user.name }}</div>
        </div>
        <span class="badge bg-primary rounded-pill">{{ user.cantidad }}</span>
      </li>
    </ol>
    <button class="btn btn-info btn-block" @click="restoring()">Restaurar</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "List",
  computed: {
    ...mapState(["users"]),
    arrayOrdenado(){
        return this.users.sort((a, b) => b.cantidad - a.cantidad)
    }
  },
  methods: {
    ...mapMutations(["adding", "restoring"]),
  },
};
</script>