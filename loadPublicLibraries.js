// 函数来检查jQuery是否已经加载
function loadjQuery() {
  if (window.jQuery) {
    // jQuery已经加载，可以在这里执行依赖jQuery的代码
    console.log("jQuery is already loaded.");
  } else {
    // 创建<script>元素
    var script = document.createElement("script");
    script.src =
      "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
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
