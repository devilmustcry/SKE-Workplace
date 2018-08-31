<template>
  <div>
    <div class="modal-card" style="width: 450px">
      <header class="modal-card-head">
        <p class="modal-card-title">ADD PERSON</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Student ID">
          <b-input
            type="string"
            :value="id"
            v-model="id"
            placeholder="Your student id"
            required>
          </b-input>
        </b-field>
        <b-field label="Title">
          <b-input
            type="string"
            :value="title"
            v-model="title"
            placeholder="Your title name"
            required>
          </b-input>
        </b-field>
        <b-field label="First Name">
          <b-input
            type="string"
            :value="first_name"
            v-model="first_name"
            placeholder="Your first name"
            required>
          </b-input>
        </b-field>
        <b-field label="Last Name">
          <b-input
            type="string"
            :value="last_name"
            v-model="last_name"
            placeholder="Your last name"
            required>
          </b-input>
        </b-field>
        <b-field label="Nickname">
          <b-input
            type="string"
            :value="nickname"
            v-model="nickname"
            placeholder="Your nickname"
            required>
          </b-input>
        </b-field>
        <b-field label="Tel">
          <b-input
            type="string"
            :value="tel"
            v-model="tel"
            placeholder="Your phone number"
            required>
          </b-input>
        </b-field>
        <b-field label="Email">
          <b-input
            type="email"
            :value="email"
            v-model="email"
            placeholder="Your email">
          </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
          <button class="button" type="button" @click="closeModal">Close</button>
          <button class="button is-primary" @click="callAddPerson">Login</button>
      </footer>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddPerson',
  data () {
    return {
      id: '',
      title: '',
      first_name: '',
      last_name: '',
      nickname: '',
      tel: '',
      email: ''
    }
  },
  methods: {
    callAddPerson () {
      if (this.id !== '' && this.title !== '' && this.first_name !== '' && this.last_name !== '' && this.nickname !== '' && this.tel !== '') {
        const person = {
          id: this.id,
          title: this.title,
          first_name: this.first_name,
          last_name: this.last_name,
          nickname: this.nickname,
          tel: this.tel,
          email: this.email
        }
        this.$emit('addPerson', person)
        this.$toast.open({
          message: 'Add person successfully!',
          type: 'is-success'
        })
      } else {
        this.$toast.open({
          message: `Please fill out the information.`,
          position: 'is-bottom',
          type: 'is-danger'
        })
      }
      this.closeModal()
    },
    closeModal () {
      this.$emit('handleChangeModal')
    }
  }
}
</script>

<style>
</style>
