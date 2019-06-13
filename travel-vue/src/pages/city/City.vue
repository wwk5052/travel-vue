<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
import axios from "axios";

export default {
  name: "City",
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  mounted() {
    this.getCityList();
  },
  methods: {
    getCityList() {
      axios.get("/api/city.json").then(this.getCityListSucc);
    },
    getCityListSucc(res) {
      const data = res.data;
      if (data.ret && data.data) {
        this.cities = data.data.cities;
        this.hotCities = data.data.hotCities;
      }
    },
    handleLetterChange(letter) {
      this.letter = letter;
    }
  }
};
</script>

<style lang="stylus" scoped></style>