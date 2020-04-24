import Vue from "vue";

Vue.filter("slugify", param => {
  let temp = param.replace(/[^a-zA-Z0-9\s-]/g, "");

  return temp.replace(/\s+/g, "-").toLowerCase();
});
