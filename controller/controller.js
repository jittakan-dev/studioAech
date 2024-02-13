const scriptController = (function () {
    const modules = [
      "components/loader/loader.js",
      "components/layout/layout.js",
      "components/home/home.js",
      "components/work/work.js",
      "components/about/about.js",
      "components/mouse/mouse.js",
      "components/nav/nav.js",
    ];

    function loadModule(src) {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.type = "module";
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
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

  document.body.classList.add('loading');

  document.addEventListener("DOMContentLoaded", () => {
    scriptController
      .loadModules()
      .then(() => {
        console.log("All modules loaded successfully.");
        document.getElementById('loader').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        document.body.classList.remove('loading');
      })
      .catch((error) => {
        console.error("Error loading modules:", error);
      });
  });