<template>
  <h1></h1>
</template>

<script>
export default {
  method: {},

  mounted() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "75373ec5a2b673227c8404bed696ea09",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
  },
};
</script>

<style>
</style>