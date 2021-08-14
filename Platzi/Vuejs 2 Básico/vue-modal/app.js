Vue.component("modal", {
  props: ["title"],

  methods: {
    close () {
      this.$emit("close")
    }
  },

  template: `
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3> {{ title }} </h3>
          <div>
            <slot name="body"></slot>
          </div>
          <footer>
            <button @click="close">
              Cerrar
            </button>
          </footer>
        </div>
      </div>
    </div>
  `
})

const app = new Vue({
  el: "#app",

  data () {
    return {
      title: "Título del Modal",
      showModal: false
    }
  },

  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    }
  }
})