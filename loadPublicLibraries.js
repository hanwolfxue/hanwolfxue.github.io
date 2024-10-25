(() => {
  // 函数来检查jQuery是否已经加载
  //   function loadjQuery() {
  //     if (window.jQuery) {
  //       // jQuery已经加载，可以在这里执行依赖jQuery的代码
  //       console.log("jQuery is already loaded.");
  //     } else {
  //       // 创建<script>元素
  //       var script = document.createElement("script");
  //       script.src =
  //         "https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js";
  //       script.type = "text/javascript";

  //       // 绑定加载完成后的事件
  //       script.onload = function () {
  //         // jQuery加载完成，可以在这里执行依赖jQuery的代码
  //         console.log("jQuery has been loaded.");
  //         // 例如，使用jQuery
  //         // $(document).ready(function() {
  //         //   // your code here
  //         // });
  //       };

  //       // 将<script>元素添加到页面中
  //       document.getElementsByTagName("head")[0].appendChild(script);
  //     }
  //   }

  //   // 调用函数
  //   loadjQuery();

  //   // 函数来检查Lodash是否已经加载
  //   function loadLodash() {
  //     if (window._) {
  //       // Lodash已经加载，可以在这里执行依赖Lodash的代码
  //       console.log("Lodash is already loaded.");
  //     } else {
  //       // 创建<script>元素
  //       var script = document.createElement("script");
  //       script.src =
  //         "https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.min.js";
  //       script.type = "text/javascript";

  //       // 绑定加载完成后的事件
  //       script.onload = function () {
  //         // Lodash加载完成，可以在这里执行依赖Lodash的代码
  //         console.log("Lodash has been loaded.");
  //         // 例如，使用Lodash
  //         // _.map([{a: 1}, {a: 2}], 'a') => [1, 2]
  //       };

  //       // 将<script>元素添加到页面中
  //       document.getElementsByTagName("head")[0].appendChild(script);
  //     }
  //   }

  //   // 调用函数
  //   loadLodash();

  //   function loadCSS(url, callback) {
  //     var link = document.createElement("link");
  //     link.rel = "stylesheet";
  //     link.href = url;
  //     link.onload = callback;
  //     document.head.appendChild(link);
  //   }

  //   loadCSS(
  //     "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
  //     function () {
  //       console.log("Bootstrap CSS loaded and ready to use.");
  //       // 这里可以执行依赖于Bootstrap JS的代码
  //     }
  //   );

  //   function loadScript(url, callback) {
  //     var script = document.createElement("script");
  //     script.src = url;
  //     script.onload = callback;
  //     document.body.appendChild(script);
  //   }

  //   loadScript(
  //     "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  //     function () {
  //       console.log("Bootstrap JS loaded and ready to use.");
  //       // 这里可以执行依赖于Bootstrap JS的代码
  //     }
  //   );

  // 定义一个函数，用于加载外部资源并返回一个Promise
  // type -> script | link
  function loadResource(url, type, name) {
    return new Promise((resolve, reject) => {
      // 创建一个新的<script>或<link>元素
      let element;
      if (type === "script") {
        if (name) {
          if (!window.name) {
            element = document.createElement("script");
            element.src = url;
            element.onload = resolve; // 当资源加载完成时，解决Promise
            element.onerror = reject; // 当资源加载失败时，拒绝Promise
          }
        } else {
          element = document.createElement("script");
          element.src = url;
          element.onload = resolve; // 当资源加载完成时，解决Promise
          element.onerror = reject; // 当资源加载失败时，拒绝Promise
        }
      } else {
        element = document.createElement("link");
        element.rel = "stylesheet";
        element.href = url;
        element.onload = resolve;
        element.onerror = reject; // 当资源加载失败时，拒绝Promise
      }

      // 将元素添加到文档中以开始加载
      document.head.appendChild(element);
    });
  }

  // 要加载的资源数组
  const resources = [
    {
      url: "https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js",
      type: "script",
      name: "jQuery",
    },
    {
      url: "https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.min.js",
      type: "script",
      name: "_",
    },
    {
      url: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
      type: "link",
    },
    {
      url: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
      type: "script",
    },
  ];

  // 使用Promise.all来同时加载所有资源
  Promise.all(resources.map((item) => loadResource(item)))
    .then(() => {
      console.log("所有资源都已加载完成");
      // 在这里执行所有资源加载完成后的操作
    })
    .catch((error) => {
      console.error("加载资源时出错:", error);
    });
})();
