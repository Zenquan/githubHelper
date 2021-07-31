import Vue from "vue";

/**
 * 将vue组件插入到页面上
 * @param {object} component 			组件
 * @param {string} insertSelector  插入选择器
 */
function insert(component, insertSelector = "body") {
  insertDomFactory(component, insertSelector);
}

// 根据组件生成vue实例
// 生成插入的dom
function insertDomFactory(component, insertSelector) {
  const vm = generateVueInstance(component);

  generateInsertDom(insertSelector, vm);
}

// 遍历待插入的dom
// 插入新创建的元素
// 将vue实例挂载到新创建的元素上
function generateInsertDom(insertSelector, vm) {
  const dom = document.querySelectorAll(insertSelector);
  dom.forEach(item => {
    const insert = document.createElement("div");
    insert.id = "insert-item";
    item.appendChild(insert);
    vm.$mount("#insert-item");
  });
}

function generateVueInstance(component) {
  const insertCon = Vue.extend(component);

  return new insertCon();
}

export default insert;
