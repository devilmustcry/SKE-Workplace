<template>
  <div class="home">
    <b-table
      :data="persons"
      :columns="columns"
      :paginated="true"
      :per-page="10"
      default-sort="id"
    >
    </b-table>

    <section class="t-al-center">
      <button class="button is-primary is-medium"
        @click="isComponentModalActive = true">
        ADD PERSON
      </button>

      <b-modal :active.sync="isComponentModalActive" has-modal-card>
        <AddPerson @addPerson="addPerson" @handleChangeModal="handleChangeModal"></AddPerson>
      </b-modal>
    </section>
  </div>
</template>

<script>
import AddPerson from '@/components/AddPerson'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    AddPerson
  },
  data () {
    return {
      isComponentModalActive: false,
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
    this.getFirebaseDatabase()
  },
  methods: {
    ...mapActions({
      getFirebaseDatabase: 'getFirebaseDatabase',
      setFirebaseDatabase: 'setFirebaseDatabase'
    }),
    addPerson (person) {
      this.setFirebaseDatabase(person)
    },
    handleChangeModal () {
      this.isComponentModalActive = !this.isComponentModalActive
    }
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
