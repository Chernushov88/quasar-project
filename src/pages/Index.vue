<template>
  <q-page class="flex flex-center">
    <app-forms></app-forms>
  </q-page>
</template>

<script>
import AppForms from "components/AppForms";
export default {
  name: 'PageIndex',
  components: {
    AppForms
  },
  method: {
    showModal: function () {
      this.opened = true
    }
  }
}
</script>
