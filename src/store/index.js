import Vuex from 'vuex'
import db from '../services/firebase'

const state = {
  persons: []
}

const getters = {
  getPersons (state) {
    return state.persons
  }
}

const mutations = {
  appendPersons (state, persons) {
    state.persons = persons.reverse()
  }
}

const actions = {
  getFirebaseDatabase ({commit}) {
    db.collection('users').get()
      .then((querySnapshot) => {
        const persons = []
        querySnapshot.forEach((doc) => {
          persons.push(doc.data())
        })
        commit('appendPersons', persons)
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
  },
  async setFirebaseDatabase (_, person) {
    await db.collection('persons').doc().set({
      id: person.id,
      title: person.title,
      first_name: person.first_name,
      last_name: person.last_name,
      nickname: person.nickname,
      tel: person.tel,
      email: person.email
    })
  }
}

const store = () => {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters
  })
}

export default store
