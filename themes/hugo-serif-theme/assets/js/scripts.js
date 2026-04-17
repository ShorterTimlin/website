document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("site-header");
  if (header && window.Headroom && window.innerWidth >= 992) {
    var headroom = new window.Headroom(header, {
      offset: {
        up: 48,
        down: 96
      },
      tolerance: {
        up: 5,
        down: 0
      },
      classes: {
        initial: "headroom",
        pinned: "headroom--pinned",
        unpinned: "headroom--unpinned",
        top: "headroom--top",
        notTop: "headroom--not-top",
        bottom: "headroom--bottom",
        notBottom: "headroom--not-bottom",
        frozen: "headroom--frozen"
      }
    });
    headroom.init();
  }

  var offcanvasElement = document.getElementById("primaryNav");
  if (!offcanvasElement || !window.bootstrap) {
    return;
  }

  offcanvasElement.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth >= 992) {
        return;
      }
      var offcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvas) {
        offcanvas.hide();
      }
    });
  });
});
