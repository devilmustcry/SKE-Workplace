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
    db.collection('persons').get()
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
