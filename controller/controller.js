const scriptController = (function () {
    const modules = [
      "components/layout/layout.js",
      "components/home/home.js",
      "components/work/work.js",
      "components/about/about.js",
      "components/nav/nav.js",
      "components/mouse/mouse.js",      
    ];

    function loadModule(src) {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.type = "module";
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    }

    async function loadModules() {
      for (const module of modules) {
        await loadModule(module);
      }
    }

    return {
      loadModules,
    };
  })();

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      let logo = document.getElementById("loader-logo");
      logo.style.top = "55%";
      logo.style.opacity = "100%";
      setTimeout(() => {
        logo.style.top = "55%";     
        setTimeout(() => {
          logo.style.opacity = "1%";
        setTimeout(() => {
          let loader = document.getElementById("mainLoader");
          loader.style.top = "-100%";
        }, 1000);
      }, 600);
      }, 500);
    }, 100);

    setTimeout(() => {
      let app = document.getElementById("app");
      app.style.display = "block";
    }, 100);

    scriptController
      .loadModules()
      .then(() => {
        console.log("All modules loaded successfully.");
      })
      .catch((error) => {
        console.error("Error loading modules:", error);
      });
  });
