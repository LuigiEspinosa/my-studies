Vue.component('CoinDetail', {
  props: ['coin'],

  data() {
    return {
      showPrices: false,
      value: 0,
    };
  },

  created() {
    console.log('Created CoinDetail...');
  },

  mounted() {
    console.log('Mounted CoinDetail...');
  },

  computed: {
    title() {
      return `${this.coin.name} - ${this.coin.symbol}`;
    },

    convertedValue() {
      if (!this.value) return 0;
      return this.value / this.coin.price;
    },
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
      this.$emit('change-color', this.showPrices ? 'FF96C8' : '3D3D3D');
    },
  },

  template: `
    <div>
      <img
        v-bind:src="coin.img"
        v-bind:alt="coin.name + ' Icon'"
        v-on:mouseover="toggleShowPrices"
        v-on:mouseout="toggleShowPrices"
      >

      <h1 v-bind:class="coin.changePercent <= 0 ? 'red' : 'green'">
        {{ title }}
        <span v-if="coin.changePercent > 0">👍🏼</span>
        <span v-else-if="coin.changePercent < 0">👎🏼</span>
        <span v-else>🤞🏼</span>

        <button v-on:click="toggleShowPrices">
          {{ showPrices ? '🙉' : '🙈' }}
        </button><br />
      </h1>
      
      <input type="number" v-model="value"><br />
      <span>{{ convertedValue }}</span>

      <slot name="text"></slot>
      <slot name="link"></slot>

      <ul v-show="showPrices">
        <li class="uppercase" v-bind:class="{
            orange: p.value === coin.price,
            red: p.value < coin.price,
            green: p.value > coin.price
          }" v-for='(p, idx) in coin.pricesWithDays' v-bind:key='idx'>
          {{ p.day }}: {{ p.value }}
        </li>
      </ul>
    </div>
  `,
});

new Vue({
  el: '#app',

  data() {
    return {
      color: 'f4f4f4',
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: -10,
        showPrices: false,
        price: 8400,
        pricesWithDays: [
          { day: 'Lunes', value: 8400 },
          { day: 'Martes', value: 7900 },
          { day: 'Miercoles', value: 8200 },
          { day: 'Jueves', value: 9000 },
          { day: 'Viernes', value: 9400 },
          { day: 'Sabado', value: 10000 },
          { day: 'Domingo', value: 10200 },
        ],
      },
    };
  },

  created() {
    console.log('Created...');
  },

  mounted() {
    console.log('Mounted...');
  },

  methods: {
    updateColor(color) {
      this.color = color || this.color.split('').reverse().join('');
    },
  },
});
