// ==UserScript==
// @name         New Userscript
// @namespace    https://www.baidu.com/
// @version      2024-10-25
// @description  try to take over the world!
// @author       You
// @match        https://www.baidu.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jsdelivr.net
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  function loadResource(parmas) {
    const { url, type, name } = parmas;
    return new Promise((resolve, reject) => {
      // 创建一个新的<script>或<link>元素
      let element;
      if (type === "script") {
        if (name) {
          console.log("name", name, window[name]);
          if (!window[name]) {
            element = document.createElement("script");
            element.src = url;
            element.onload = () => {
              console.log(`${name}加载完成`);
              resolve();
            }; // 当资源加载完成时，解决Promise
            element.onerror = reject; // 当资源加载失败时，拒绝Promise
          } else {
            console.log(`${name}加载完成`);
            resolve();
          }
        } else {
          element = document.createElement("script");
          element.src = url;
          element.onload = () => {
            console.log(`${name}加载完成`);
            resolve();
          }; // 当资源加载完成时，解决Promise
          element.onerror = reject; // 当资源加载失败时，拒绝Promise
        }
      } else {
        element = document.createElement("link");
        element.rel = "stylesheet";
        element.href = url;
        element.onload = () => {
          console.log(`${name}加载完成`);
          resolve();
        };
        element.onerror = reject; // 当资源加载失败时，拒绝Promise
      }

      // 将元素添加到文档中以开始加载
      document.head.appendChild(element);
    });
  }

  // 要加载的资源数组
  const resources = [
    {
      url: "https://hanwolfxue.github.io/libs/jquery.min.js",
      type: "script",
      name: "jQuery",
    },
    {
      url: "https://hanwolfxue.github.io/libs/lodash.min.js",
      type: "script",
      name: "_",
    },
    {
      url: "https://hanwolfxue.github.io/libs/bootstrap.min.css",
      type: "link",
    },
    {
      url: "https://hanwolfxue.github.io/libs/bootstrap.bundle.min.js",
      type: "script",
    },
  ];

  // 使用Promise.all来同时加载所有资源
  // Promise.all(resources.map((item) => loadResource(item)))
  //   .then(() => {
  //     console.log("所有资源都已加载完成");
  //     // 在这里执行所有资源加载完成后的操作
  //   })
  //   .catch((error) => {
  //     console.error("加载资源时出错:", error);
  //   });

  async function asyncFunction() {
    // 使用 await 等待 Promise.all 完成
    const result = await Promise.all(
      resources.map((item) => loadResource(item))
    );
    // 可以返回 Promise.all 的结果
    return result;
  }
  window.asyncFunction = asyncFunction;

  // 在其他地方调用 asyncFunction
  // asyncFunction().then((result) => {
  //   console.log(result); // 这里会打印 [promise1的值, promise2的值, promise3的值]
  // });
  // Your code here...
})();
