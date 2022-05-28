page_drawer_load = () => {
  //加载抽屉导航
  html = `<ul class="mdui-list">
    <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">home</i>
        <div class="mdui-list-item-content">首页</div>
    </li>
    <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">book</i>
        <div class="mdui-list-item-content">题目</div>
    </li>
    <li class="mdui-subheader">关于</li>
    <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">more_vert</i>
        <div class="mdui-list-item-content">还没做呢！</div>
    </li>
</ul>`;
  document.getElementById("drawer").innerHTML = html;
};

page_drawer_load();

page_drawer_toggle = () => {
  //打开/切换
  new mdui.Drawer("#drawer").toggle();
};

page_sign = () => {
  //首页图
  let time = ` 今天${new Date().getMonth() + 1}月${new Date().getDate()}日 `
  let colors = [
    "#ae3ec9",
    "#e03131",
    "#5f3dc4",
    "#3b5bdb",
    "#1971c2",
    "#099268",
    "#66a80f",
    "#e8590c",
    "#f08c00",
  ];
  let color = colors[new Date().getDate() % colors.length];
  if (document.getElementsByClassName("page_sign") != []) {
    //在首页，有首图
    document.getElementsByClassName("page_sign")[0].style.backgroundColor =
      color;
    document
      .getElementsByClassName("page_sign")[0]
      .getElementsByTagName("h3")[0].innerText = time;
  }
};

page_sign();
