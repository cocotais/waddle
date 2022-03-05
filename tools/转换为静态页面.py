
'''
将torando格式的html转换为普通静态html
即static_url转换为静态相对引用并创建新的index.html到根目录
此刻你可以使用任意静态服务器运行该工具（就是说你能用某些静态托管工具托管）
'''

from typing import IO
import builtins
import os
import re


header = '''
<!--
这个index.html是由./tools/转换为静态页面.py自动生成的，需要修改index.html请到./pages/index.html
这个index.html是由./tools/转换为静态页面.py自动生成的，需要修改index.html请到./pages/index.html
这个index.html是由./tools/转换为静态页面.py自动生成的，需要修改index.html请到./pages/index.html
-->
'''


files = []


def open(*args, **kwargs) -> IO:
    files.append(f := builtins.open(*args, **kwargs))
    return f


def closeAllFiles():
    for f in files:
        f.close()
        print(f, '未关闭') if not f.closed else 0


inRoot = os.path.exists('./page/index.html')

path = './page/index.html' if inRoot else '../page/index.html'
index = open(path, 'r', encoding='UTF-8')
html = index.read()

pattern = r'''\{\{static_url\(['"](?P<url>.+?)['"]\)\}\}'''


def repl(matched):
    url = matched.group('url')
    return f'./static/{url}'


new_html = re.sub(pattern, repl, html)
new_path = './index.html' if inRoot else '../index.html'
new_index = open(new_path, 'w', encoding='UTF-8')
new_index.write(header + new_html)

closeAllFiles()

print('转换完毕！！！')
