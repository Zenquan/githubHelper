import store from "@/store";

export default {
  beforeCreate() {
    this.$store = store;
  }
};
