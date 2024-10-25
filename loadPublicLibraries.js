(() => {
  // 函数来检查jQuery是否已经加载
  function loadjQuery() {
    if (window.jQuery) {
      // jQuery已经加载，可以在这里执行依赖jQuery的代码
      console.log("jQuery is already loaded.");
    } else {
      // 创建<script>元素
      var script = document.createElement("script");
      script.src =
        "https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js";
      script.type = "text/javascript";

      // 绑定加载完成后的事件
      script.onload = function () {
        // jQuery加载完成，可以在这里执行依赖jQuery的代码
        console.log("jQuery has been loaded.");
        // 例如，使用jQuery
        // $(document).ready(function() {
        //   // your code here
        // });
      };

      // 将<script>元素添加到页面中
      document.getElementsByTagName("head")[0].appendChild(script);
    }
  }

  // 调用函数
  loadjQuery();

  // 函数来检查Lodash是否已经加载
  function loadLodash() {
    if (window._) {
      // Lodash已经加载，可以在这里执行依赖Lodash的代码
      console.log("Lodash is already loaded.");
    } else {
      // 创建<script>元素
      var script = document.createElement("script");
      script.src =
        "https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.min.js";
      script.type = "text/javascript";

      // 绑定加载完成后的事件
      script.onload = function () {
        // Lodash加载完成，可以在这里执行依赖Lodash的代码
        console.log("Lodash has been loaded.");
        // 例如，使用Lodash
        // _.map([{a: 1}, {a: 2}], 'a') => [1, 2]
      };

      // 将<script>元素添加到页面中
      document.getElementsByTagName("head")[0].appendChild(script);
    }
  }

  // 调用函数
  loadLodash();

  function loadCSS(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
  }

  loadCSS(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  );

  function loadScript(url, callback) {
    var script = document.createElement("script");
    script.src = url;
    script.onload = callback;
    document.body.appendChild(script);
  }

  loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
    function () {
      console.log("Bootstrap JS loaded and ready to use.");
      // 这里可以执行依赖于Bootstrap JS的代码
    }
  );
})();
