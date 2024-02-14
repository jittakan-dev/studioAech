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
  const loader = document.getElementById('loader');
  document.addEventListener("DOMContentLoaded", () => {
    scriptController
      .loadModules()
      .then(() => {
        console.log("All modules loaded successfully.");
        
        document.getElementById('app').style.display = 'block';
        setTimeout(() => {
          loader.style.top = "-100%";
          // loader.style.display = 'none';
        }, 1000);
        document.body.classList.remove('loading');
      })
      .catch((error) => {
        console.error("Error loading modules:", error);
      });
  });