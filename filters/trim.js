import Vue from "vue";

Vue.filter("trim", (string, length = 20) => {
  return string.length > length
    ? string.substring(0, length - 3) + "..."
    : string;
});
