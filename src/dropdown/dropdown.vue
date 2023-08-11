<template>
  <a-trigger trigger="hover" position="rt">
    <div id="brand">
      <img src="../icon/logo/waddle2mini.png" alt="" height="36" />
    </div>
    <template #content>
      <div class="dropdown-select">
        <a-doption>新建</a-doption>
        <a-doption @click="save_to_pc">保存到电脑</a-doption>
        <a-doption @click="save_widget">导出控件</a-doption>
        <a-doption @click="open_file">打开本地文件</a-doption>
        <a-divider margin="1px" />
        <a-doption @click="open_doc">文档</a-doption>
        <a-doption @click="more_opinion">更多选项</a-doption>
        <a-divider margin="1px" />
        <a-doption @click="cloud_opinion">Cloud</a-doption>
      </div>
    </template>
  </a-trigger>
  <a-drawer :width="340" :visible="visible" @cancel="handleCancel" unmountOnClose :footer="false">
    <template #title> 更多 </template>
    <div>
      <a-typography-title :heading="6">偏好设置</a-typography-title>
      <a-space size="large" :fill="fill" :style="{ justifyContent: 'space-between', color: 'var(--color-text-2)' }">
        <p>积木盒积木全显</p>
        <a-switch @change="block_all_shown" v-model:model-value="block_all_shown_value" />
      </a-space>
      <a-space size="large" :fill="fill" :style="{ justifyContent: 'space-between', color: 'var(--color-text-2)' }">
        <p>主题</p>
        <a-select
          @change="theme_change"
          v-model:model-value="theme_value"
          :style="{ width: '150px' }"
          default-value="跟随系统"
        >
          <a-option>
            <template #icon>
              <icon-light />
            </template>
            <template #default>亮色模式</template>
          </a-option>
          <a-option>
            <template #icon>
              <icon-dark />
            </template>
            <template #default>暗黑模式</template>
          </a-option>
          <a-option>
            <template #icon>
              <icon-auto />
            </template>
            <template #default>跟随系统</template>
          </a-option>
        </a-select>
      </a-space>
      <a-typography-title :heading="6">关于Waddle</a-typography-title>
      <a-space size="large" :fill="fill" :style="{ justifyContent: 'space-between', color: 'var(--color-text-2)' }">
        让CoCo没有难做的控件！ Powered by Boxy
      </a-space>
    </div>
  </a-drawer>
  <a-modal v-model:visible="cloudVisible" :footer="false">
    <template #title>
      <a-space>
        <p>Cloud</p>
        <a-tag color="arcoblue" bordered> Beta </a-tag>
      </a-space>
    </template>
  </a-modal>
</template>

<script setup>
import Blockly from "blockly";
import { defineProps, ref } from "vue";
const props = defineProps(["workspace"]);
import { IconAuto, IconDark, IconLight } from "@arco-iconbox/vue-boxy";

import Theme from "@/theme/theme";
import { javascriptGenerator } from "blockly/javascript";
// 初始化数值
const visible = ref(false);
const cloudVisible = ref(false);
const fill = ref(true);
const theme_value = ref(localStorage.getItem("theme") || "跟随系统");
const block_all_shown_value = ref(!!localStorage.getItem("block_all_shown"));
const isLogined = ref(false);
/**
 * 积木框全显时运行代码
 */
const block_all_shown = (value) => {
  localStorage.setItem("block_all_shown", value ? "true" : "");
  block_all_shown_value.value = value;
  document.querySelector(".blocklyFlyout").style.width = value ? "" : 320;
};
/**
 * “更多”打开
 */
const more_opinion = () => {
  visible.value = true;
};
/**
 * “更多”打开
 */
const cloud_opinion = () => {
  cloudVisible.value = true;
};
/**
 * “跟随系统”主题切换
 */
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  if (event.matches && theme_value.value === "跟随系统") {
    Theme.switch("dark");
  } else {
    Theme.switch("light");
  }
});

switch_theme();
/**
 * 主题切换
 * @function
 */
function switch_theme() {
  localStorage.setItem("theme", theme_value.value);
  switch (theme_value.value) {
    case "亮色模式":
      Theme.switch("light");
      break;
    case "暗黑模式":
      Theme.switch("dark");
      break;
    default:
      Theme.switch(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
}
/**
 * 主题切换获取值
 */
const theme_change = (value) => {
  theme_value.value = value;
  switch_theme();
};
/**
 * 关闭“更多”
 */
const handleCancel = () => {
  visible.value = false;
};
/**
 * 保存到本地
 */
const save_to_pc = () => {
  let a = document.createElement("a");
  a.href = `data:,${JSON.stringify(Blockly.serialization.workspaces.save(props.workspace))}`;
  a.download = "project.boxy";
  a.click();
};
/**
 * 保存CoCo控件
 */
const save_widget = () => {
  let a = document.createElement("a");
  let code = javascriptGenerator.workspaceToCode(props.workspace);
  a.href = `data:,${code}`;
  if (window.mytitle && window.mytype) {
    a.download = `${window.mytitle}.${window.mytype}`;
  } else {
    a.download = `我的控件.js`;
  }
  a.click();
};
/**
 * 打开本地文件
 */
const open_file = () => {
  let input = document.createElement("input");
  input.setAttribute("id", "file");
  input.setAttribute("type", "file");
  input.setAttribute("name", "file");
  input.setAttribute("style", "visibility:hidden");
  input.setAttribute("accept", ".boxy");
  document.body.appendChild(input);
  input.click();
  input.onchange = (event) => {
    let file = event.target.files[0];
    let file_reader = new FileReader();
    file_reader.onload = () => {
      let fc = JSON.parse(file_reader.result);
      Blockly.serialization.workspaces.load(fc, props.workspace);
    };
    file_reader.readAsText(file, "UTF-8");
  };
};
/**
 * 打开文档
 */
const open_doc = () => {
  window.open("https://www.yuque.com/hzsn/waddle");
};
</script>

<style scoped>
#brand {
  background-color: var(--toolbox-background);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  width: 36px;
  height: 36px;
  padding: 12px;
}

.dropdown-select {
  box-sizing: border-box;
  padding: 12px 16px;
  color: var(--color-text-2);
  font-size: 14px;
  line-height: 1.5715;
  background-color: var(--color-bg-popup);
  border: 1px solid var(--color-neutral-3);
  border-radius: var(--border-radius-medium);
  box-shadow: 0 4px 10px #0000001a;
  animation: show_dropdown 0.5s forwards !important;
  animation-timing-function: cubic-bezier(0, 1.14, 0, 1.04) !important;
}

@keyframes show_dropdown {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 150px;
    height: 100%;
  }
}
</style>

<style>
.arco-drawer-container .arco-drawer {
  max-width: 100%;
}
</style>
