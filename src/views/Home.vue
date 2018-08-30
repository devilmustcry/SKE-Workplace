<template>
  <div class="home">
    <b-table
      :data="persons"
      :columns="columns"
      :paginated="true"
      :per-page="10"
    >
    </b-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true,
          sortable: true
        },
        {
          field: 'title',
          label: 'Title',
          sortable: true
        },
        {
          field: 'first_name',
          label: 'First Name',
          sortable: true
        },
        {
          field: 'last_name',
          label: 'Last Name',
          sortable: true
        },
        {
          field: 'nickname',
          label: 'Nickname',
          sortable: true
        },
        {
          field: 'tel',
          label: 'Tel',
          sortable: true
        },
        {
          field: 'email',
          label: 'Email',
          sortable: true
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('getFirebaseDatabase')
  },
  computed: {
    ...mapGetters({
      persons: 'getPersons'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
