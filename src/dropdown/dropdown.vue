<script setup>
import Blockly from "blockly";
import { defineProps, ref } from "vue";
import { IconAuto, IconDark, IconLight } from "@arco-iconbox/vue-boxy";
import { Message } from '@arco-design/web-vue'
import Theme from "@/theme/theme";
import { javascriptGenerator } from "blockly/javascript";
import axios from "axios";

const props = defineProps(["workspace"]);
// 初始化数值
const visible = ref(false);
const cloudVisible = ref(false);
const newVisible = ref(false);
const fill = ref(true);
const theme_value = ref(localStorage.getItem("theme") || "跟随系统");
const block_all_shown_value = ref(!!localStorage.getItem("block_all_shown"));
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
 * 关闭“更多”
 */
const handleCancel = () => {
  visible.value = false;
};
/**
 * 保存到本地
 */
const save_to_pc = () => {
  let title = "我的控件";
  let a = document.createElement("a");
  let blockCode = Blockly.serialization.workspaces.save(props.workspace);
  const blob = new Blob([JSON.stringify(blockCode)], {
    type: 'application/json'
  });
  try {
    for (let i of blockCode.blocks.blocks) {
      switch (i.type) {
        case "ivw_defTypes":
          title = i.fields.title;
          break
        case "vw_defTypes":
          title = i.fields.title;
          break
        default:
          break
      }
    }
  }
  catch (e) { }
  a.href = URL.createObjectURL(blob);
  a.download = title + ".waddle2";
  a.click();
};
/**
 * 保存CoCo控件
 */
const save_widget = () => {
  let title = "我的控件", type = "js";
  let a = document.createElement("a");
  let code = javascriptGenerator.workspaceToCode(props.workspace);
  let blockCode = Blockly.serialization.workspaces.save(props.workspace);
  try {
    for (let i of blockCode.blocks.blocks) {
      switch (i.type) {
        case "ivw_defTypes":
          title = i.fields.title;
          type = "js"
          break
        case "vw_defTypes":
          title = i.fields.title;
          type = "jsx"
          break
        default:
          break
      }
    }
  }
  catch (e) { }
  a.href = `data:,${code}`;
  a.download = `${title}.${type}`;
  a.click();
};

function isJSON(str) {
  if (typeof str === 'string') {
    try {
      let obj = JSON.parse(str);
      return !!(typeof obj === 'object' && obj);
    } catch (e) {
      return false
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
      }
      else {
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
};
/**
 * 打开文档
 */
const open_doc = () => {
  window.open("https://www.yuque.com/hzsn/waddle");
};

const upload = (file) => {
  axios({
    method: 'get',
    url: file,
  }).then(function (response) {
    if (isJSON(JSON.stringify(response.data))) {
      let fc = response.data;
      Blockly.serialization.workspaces.load(fc, props.workspace);
    }
    else {
      let parser = new DOMParser();
      let xml = parser.parseFromString(response.data, "text/xml");
      let blocks = xml
        .getElementsByTagName("body")[0]
        .getElementsByTagName("blocks")[0]
        .getElementsByTagName("xml")[0];
      props.workspace.clear();
      Blockly.Xml.domToWorkspace(blocks, props.workspace);
    }
    newVisible.value = false;
  });
}
////////////////////////////////Cloud////////////////////////////////
let userLogined = ref(false)
let userName = ref('未登录')
let userAvatar = ref('')
let res = ref([["作品加载失败", -1, "作品加载失败"], ["请刷新后重试", -1, "请刷新后重试"]])
let haswork = ref(false)
if (window.location.hash.length > 0) {
  const myRequest = new Request("/api/get_file.php?time=" + window.location.hash.substring(1, window.location.hash.length + 1), {
    method: 'GET'
  })
  fetch(myRequest)
    .then(async (x) => {
      if ((await x.text()).length != 0) {
        Blockly.serialization.workspaces.load((await x.text()), props.workspace)
      }
    })
}
function save() {
  try {
    let title = "我的控件", type = "MY_WIDGET";
    let blockCode = Blockly.serialization.workspaces.save(props.workspace);
    try {
      for (let i of blockCode.blocks.blocks) {
        switch (i.type) {
          case "ivw_defTypes":
            title = i.fields.title;
            break
          case "vw_defTypes":
            title = i.fields.title;
            break
          case "ivw_itemTitle":
            type = i.fields.title;
            break
          case "vw_itemTitle":
            type = i.fields.title;
            break
          default:
            break
        }
      }
    }
    catch (e) { }
    if (window.location.hash.length == 0) {
      const myRequest = new Request('/api/save_file.php', {
        method: 'POST', body: JSON.stringify({ filename: type, content: blockCode, title: title }), headers: {
          'Content-Type': 'application/json'
        }
      });
      fetch(myRequest)
        .then(async response => {
          if (response.status === 200) {
            Message.info("保存成功！")
            window.location.hash = await response.text()
          } else {
            Message.info("保存失败！错误码：" + response.status.toString())
          }
        })
    } else {
      const myRequest = new Request('/api/upd_file.php', {
        method: 'POST', body: JSON.stringify({ filename: type, content: blockCode, title: title, time: window.location.hash.slice(1) }), headers: {
          'Content-Type': 'application/json'
        }
      });
      fetch(myRequest)
        .then(async response => {
          if (response.status === 200) {
            Message.info("保存成功！")
            window.location.hash = await response.text()
          } else {
            Message.info("保存失败！错误码：" + response.status.toString())
          }
        })
    }
  } catch (error) {
    Message.info("导出出现问题，请检查积木是否拼接错误，如无误请反馈给Waddle开发人员")
  }
}

let loginOkay = (name, avatar, first) => {
  userAvatar.value = avatar
  userName.value = name
  userLogined.value = true
  sync()
  if (first) {
    Message.success('登录成功')
    location.reload()
  }
}

axios.get('/api/details.php')
  .then((x) => {
    if (x.status == 200) {
      loginOkay(x.data.nickname, x.data.avatar_url, false)
    }
  })

let login = async (username, password) => {
  axios.get("/api/login.php?username=" + username + "&password=" + password)
    .then((data) => {
      if (data.status != 200) {
        Message.error("登录失败！错误：" + String(data.data))
      }
      else {
        loginOkay(data.data.user_info.nickname, data.data.user_info.avatar_url, true)
      }
    })
    .catch((err) => {
      Message.error("登录失败！错误：" + String(err))
    })
}
function sync() {
  axios.get('/api/file_list.php')
    .then(function (response) {
      if (response.data.length == 0) {
        haswork.value = false;
      } else {
        res.value = response.data
        haswork.value = true;
      }
    }).catch(function (err) {
      haswork.value = false
    });
}
let del = (time) => {
  axios.post('/api/del_file.php', String(time))
    .then(function (response) {
      if (response.data == 'okay') {
        Message.success("已删除")
        sync()
      } else {
        Message.error(response.data)
      }
    }).catch(function (err) {
      Message.error("删除失败")
    });
}

</script>

<template>
  <a-trigger trigger="hover" position="rt">
    <div id="brand">
      <img src="../icon/logo/waddle2mini.png" alt="" height="36" />
    </div>
    <template #content>
      <div class="dropdown-select">
        <a-doption @click="new_opinion">新建</a-doption>
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
        <a-select @change="theme_change" v-model:model-value="theme_value" :style="{ width: '150px' }"
          default-value="跟随系统">
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
    <template #default>
      <a-row class="grid-demo" gutter="20">
        <a-col flex="200px">
          <a-space>
            <a-avatar v-if="!userLogined">未登录</a-avatar>
            <a-avatar v-else>
              <img :src="userAvatar">
            </a-avatar>
            <p>
              {{ userLogined ? userName : "未登录" }}
            </p>
          </a-space>
          <div style="margin-top:10px;" v-if="!userLogined">
            <a-button style="width: 100%;">立刻登录</a-button>
          </div>
          <div style="margin-top:10px;" v-else>
            <a-button @click="save" style="width:100%">保存作品</a-button>
          </div>
        </a-col>
        <a-col flex="auto">
          <a-empty v-if="!haswork" />
          <a-list v-else style="height: 100%;">
            <a-list-item v-for="[name, time, title] in res" :key="name">
              <a-list-item-meta :title="String(title)" :description="String(name)">
              </a-list-item-meta>
              <template #actions>
                <icon-edit @click="run(Number(time))" />
                <a-popconfirm content="你真的要删除吗?" type="warning" @ok="del(Number(time))">
                  <icon-delete />
                </a-popconfirm>
              </template>
            </a-list-item>
          </a-list>
        </a-col>
      </a-row>
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
    height: 284px;
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
</style>
