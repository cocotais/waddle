<script setup>
import Blockly from "blockly";
import { defineProps, ref } from "vue";
import { IconAuto, IconDark, IconLight } from "@arco-iconbox/vue-boxy";
import Theme from "@/theme/theme";
import { javascriptGenerator } from "blockly/javascript";
import axios from "axios";

const props = defineProps(["workspace"]);
// 初始化数值
const visible = ref(false);
const newVisible = ref(false);
const theme_value = ref(localStorage.getItem("theme") || "跟随系统");
const block_all_shown_value = ref(!!localStorage.getItem("block_all_shown"));

function setFlyout() {
  const flyout = document.querySelector("div.injectionDiv > svg.blocklyFlyout");
  if (flyout) {
    flyout.style.width = "320px";
  }
}
/**
 * 积木框全显时运行代码
 */
const handleFlyoutChange = (value) => {
  localStorage.setItem("block_all_shown", value ? "true" : "");
  block_all_shown_value.value = value;
  setFlyout();
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

const new_opinion = () => {
  newVisible.value = true;
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
 * 保存到本地
 */
const save_to_pc = () => {
  let title = "我的控件";
  let a = document.createElement("a");
  let blockCode = Blockly.serialization.workspaces.save(props.workspace);
  const blob = new Blob([JSON.stringify(blockCode)], {
    type: "application/json",
  });
  try {
    for (let i of blockCode.blocks.blocks) {
      switch (i.type) {
        case "ivw_defTypes":
          title = i.fields.title;
          break;
        case "vw_defTypes":
          title = i.fields.title;
          break;
        default:
      }
    }
  } catch (e) {}
  a.href = URL.createObjectURL(blob);
  a.download = title + ".waddle2";
  a.click();
};
/**
 * 保存CoCo控件
 */
const save_widget = () => {
  let title = "我的控件",
    type = "js";
  let a = document.createElement("a");
  let code = javascriptGenerator.workspaceToCode(props.workspace);
  let blockCode = Blockly.serialization.workspaces.save(props.workspace);
  try {
    for (let i of blockCode.blocks.blocks) {
      switch (i.type) {
        case "ivw_defTypes":
          title = i.fields.title;
          type = "js";
          break;
        case "vw_defTypes":
          title = i.fields.title;
          type = "jsx";
          break;
        default:
          break;
      }
    }
  } catch (e) {}
  a.href = URL.createObjectURL(new Blob([code]));
  a.download = `${title}.${type}`;
  a.click();
};

function isJSON(str) {
  if (typeof str === "string") {
    try {
      let obj = JSON.parse(str);
      return !!(typeof obj === "object" && obj);
    } catch (e) {
      return false;
    }
  }
}
/**
 * 打开本地文件
 */
const open_file = () => {
  let input = document.createElement("input");
  input.setAttribute("id", "file");
  input.setAttribute("type", "file");
  input.setAttribute("name", "file");
  input.setAttribute("style", "visibility:hidden");
  input.setAttribute("accept", ".waddle2,.waddle");
  document.body.appendChild(input);
  input.click();
  input.onchange = (event) => {
    let file = event.target.files[0];
    let file_reader = new FileReader();
    file_reader.onload = () => {
      if (isJSON(file_reader.result)) {
        let fc = JSON.parse(file_reader.result);
        Blockly.serialization.workspaces.load(fc, props.workspace);
      } else {
        let parser = new DOMParser();
        let xml = parser.parseFromString(file_reader.result, "text/xml");
        let blocks = xml
          .getElementsByTagName("body")[0]
          .getElementsByTagName("blocks")[0]
          .getElementsByTagName("xml")[0];
        props.workspace.clear();
        Blockly.Xml.domToWorkspace(blocks, props.workspace);
      }
    };
    file_reader.readAsText(file, "UTF-8");
  };
  window.location.hash = "";
};
/**
 * 打开文档
 */
const open_doc = () => {
  window.open("https://www.yuque.com/hzsn/waddle");
};

const upload = (file) => {
  axios({
    method: "get",
    url: file,
  }).then(function (response) {
    if (isJSON(JSON.stringify(response.data))) {
      let fc = response.data;
      Blockly.serialization.workspaces.load(fc, props.workspace);
    } else {
      let parser = new DOMParser();
      let xml = parser.parseFromString(response.data, "text/xml");
      let blocks = xml.getElementsByTagName("body")[0].getElementsByTagName("blocks")[0].getElementsByTagName("xml")[0];
      props.workspace.clear();
      Blockly.Xml.domToWorkspace(blocks, props.workspace);
    }
    newVisible.value = false;
    window.location.hash = "";
  });
};
</script>

<template>
  <a-trigger trigger="hover" position="rt">
    <div id="brand">
      <img alt="" style="height: 36px" src="../icon/logo/waddle2mini.png" />
    </div>
    <template #content>
      <div class="dropdown-select">
        <a-doption @click="new_opinion">新建</a-doption>
        <a-doption @click="save_to_pc">保存到电脑</a-doption>
        <a-doption @click="save_widget">导出控件</a-doption>
        <a-doption @click="open_file">打开本地文件</a-doption>
        <a-divider margin="1px" />
        <a-doption @click="open_doc">文档</a-doption>
        <a-doption @click="more_opinion">设置</a-doption>
      </div>
    </template>
  </a-trigger>
  <a-modal v-model:visible="visible" width="auto">
    <template #title>设置</template>
    <div id="modal-content">
      <a-space>
        <p>积木盒宽度</p>
        <a-radio-group :model-value="block_all_shown_value" @change="handleFlyoutChange" type="button">
          <a-radio :value="true">适应</a-radio>
          <a-radio :value="false">固定</a-radio>
        </a-radio-group>
      </a-space>
      <a-space>
        <p>主题</p>
        <a-select
          @change="theme_change"
          v-model:model-value="theme_value"
          style="text-align: justify"
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
      <a-space><p>当前版本</p><p>V2.2.1</p></a-space>
    </div>
    <template #footer>
      <span style="color: var(--color-text-4)">Copyright 2024 CoCo中控台</span>
    </template>
  </a-modal>
  <a-modal class="newModal" v-model:visible="newVisible" :footer="false">
    <template #title>
      <a-space>
        <p>新建控件</p>
      </a-space>
    </template>
    <template #default>
      <div class="newContent">
        <a-card title="空白控件" hoverable>
          <template #extra>
            <a-link @click="upload('./tutorials/blank.waddle2')">添加</a-link>
          </template>
          <span>全新的开始～</span>
        </a-card>
        <a-card title="不可见控件模版" hoverable>
          <template #extra>
            <a-link @click="upload('./tutorials/invisiblewidget.waddle')">添加</a-link>
          </template>
          <span>开始创作你的不可见控件吧！</span>
        </a-card>
        <a-card title="可见控件模版" hoverable>
          <template #extra>
            <a-link @click="upload('./tutorials/visiblewidget.waddle')">添加</a-link>
          </template>
          <span>开始创作你的可见控件吧！</span>
        </a-card>
        <a-card title="Hello!" hoverable>
          <template #extra>
            <a-link @click="upload('./tutorials/hello.waddle')">添加</a-link>
          </template>
          <span>来跟Waddle打声招呼吧！</span>
          <a-tag color="purple" bordered>不可见控件</a-tag>
        </a-card>
        <a-card title="Base编解码" hoverable>
          <template #extra>
            <a-link @click="upload('./tutorials/base.waddle')">添加</a-link>
          </template>
          <span>快速Base64加密/解密</span>
          <a-tag color="purple" bordered>不可见控件</a-tag>
        </a-card>
        <a-card title="超链接" hoverable>
          <template #extra>
            <a-link @click="upload('./tutorials/hyperlink.waddle')">添加</a-link>
          </template>
          <span>超链接控件捏～</span>
          <a-tag color="green" bordered>可见控件</a-tag>
        </a-card>
        <a-card title="闪烁按钮" hoverable>
          <template #extra>
            <a-link @click="upload('./tutorials/blinkButton.waddle')">添加</a-link>
          </template>
          <span>一闪一闪亮按钮～</span>
          <a-tag color="green" bordered>可见控件</a-tag>
        </a-card>
        <a-card title="HTML控件" hoverable>
          <template #extra>
            <a-link @click="upload('./tutorials/html.waddle')">添加</a-link>
          </template>
          <span>富文本吗？太强了！</span>
          <a-tag color="green" bordered>可见控件</a-tag>
        </a-card>
        <a-card title="密码框" hoverable>
          <template #extra>
            <a-link @click="upload('./tutorials/password.waddle')">添加</a-link>
          </template>
          <span>密码输入有保障！</span>
          <a-tag color="green" bordered>可见控件</a-tag>
        </a-card>
        <a-card title="投票条" hoverable>
          <template #extra>
            <a-link @click="upload('./tutorials/voteLine.waddle')">添加</a-link>
          </template>
          <span>支持！反对！看谁票更多</span>
          <a-tag color="green" bordered>可见控件</a-tag>
        </a-card>
      </div>
    </template>
  </a-modal>
</template>

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
    height: 248px;
  }
}

.newContent {
  display: grid;
  grid-gap: 20px 20px;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-items: center;
}
</style>

<style>
.arco-drawer-container .arco-drawer {
  max-width: 100%;
}

.newModal .arco-modal {
  max-width: 800px;
  height: 90%;
  max-height: 600px;
}

.newModal .arco-modal .arco-modal-body {
  max-width: 800px;
  height: calc(90% - 48px);
  padding: 24px 0;
}

.newContent .arco-tag {
  position: absolute;
  bottom: 20px;
  left: 15px;
}

.newContent .arco-card {
  margin: 0 0 20px 0;
  height: 150px;
  min-width: 200px;
  width: 200px;
}

#modal-content > div {
  justify-content: space-between;
  width: 100%;

  -webkit-tap-highlight-color: transparent;
}
</style>
