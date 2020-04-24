/*
** Axios module configuration
** See https://axios.nuxtjs.org/options
*/

import axios from "axios";
import https from "https";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";

export default ({ app, store, redirect }) => {
  axios.defaults.baseURL = process.env.apiUrl;
  axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });

  if (process.server) {
    return;
  }

  // Request interceptor
  axios.interceptors.request.use(request => {
    request.baseURL = process.env.apiUrl;

    const locale = store.getters["lang/locale"];
    if (locale) {
      request.headers.common["Accept-Language"] = locale;
    }

    return request;
  });

  // Response interceptor
  axios.interceptors.response.use(
    response => response,
    error => {
      const { status } = error.response || {};

      if (status >= 500) {
        app.$notify(
          app.i18n.t("error_alert_text") + app.i18n.t("error_alert_text")
        );
      }

      return Promise.reject(error);
    }
  );
};
