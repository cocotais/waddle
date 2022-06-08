import io
import os
import re

import bs4
import requests


def alter(file_name, old_str, new_str):
    """
    替换文件中的字符串
    """
    file_data = ""
    with io.open(file_name, "r", encoding="utf-8") as f:
        for line in f:
            if old_str in line:
                line = line.replace(old_str, new_str)
            file_data += line
    with io.open(file_name, "w", encoding="utf-8") as f:
        f.write(file_data)


def get_last_commit_number():
    """
    获取gitee仓库中的最新提交数
    """
    page = requests.get(url)
    soup = bs4.BeautifulSoup(page.content, 'html.parser')
    return(int(str(soup.select('div.all-commits>a')[0]).split('\n')[1][0:-4]))


def get_this_commit_number():
    """
    获取本地仓库提交数
    """
    return(int(os.popen('git rev-list --all --count').read().strip()))


def get_last_version_number():
    """
    获取gitee仓库中的最新版本号
    """
    page = requests.get(url)
    soup = bs4.BeautifulSoup(page.content, 'html.parser')
    return(str(soup.select('#git-readme>div>div.file_content.markdown-body>div')[-1])[5:-6].strip())


def get_this_version_number():
    """
    获取本地仓库版本号
    """
    with open('index.html', 'r', encoding='utf-8') as index:
        return(re.search(r"var version = '(.*)'", index.read(), re.M | re.I).group(1))


def calculate_next_version_number(last_commit_number, last_version_number):
    """
    计算下一版本号
    """
    temporary = re.sub(r'(?<=\().+?(?=\))',
                       str(last_commit_number + 1), last_version_number)
    return(temporary.split('.')[0] + '.'
           + temporary.split('.')[1] + '.'
           + str(int(temporary.split('.')[2].split('(')[0]) + 1)
           + '(' + temporary.split('.')[2].split('(')[1])


print()
url = 'https://gitee.com/coco-central/waddle/tree/dev/'

print('Branch origin/dev has ', end='')
last_commit_number = get_last_commit_number()
print(last_commit_number, 'commits ', end='')
print('with the version ', end='')
last_version_number = get_last_version_number()
print(last_version_number, '\b.')

print('Branch dev has ', end='')
this_commit_number = get_this_commit_number()
print(this_commit_number, 'commits ', end='')
print('with the version ', end='')
this_version_number = get_this_version_number()
print(this_version_number, '\b.')

print('The next version is ', end='')
next_version_number = calculate_next_version_number(
    last_commit_number, last_version_number)
print(next_version_number, '\b.')

print('The version numbers have been modified in the following directories:')
alter('index.html', this_version_number, next_version_number)
print('-', 'index.html : 2')
alter('sw.js', this_version_number, next_version_number)
print('-', 'sw.js : 1')
alter('README.md', this_version_number, next_version_number)
print('-', 'README.md : 1')

print('\'./static/Waddle/toolBox.xml\' is being formatted.', end='')
with open('./static/Waddle/toolBox.xml', 'r', encoding='utf-8') as file:
    text = file.read()
text = re.sub(r'<field name="[A-Z|a-z]*">\n\s*', '<field name="TEXT">', text)
text = re.sub(r'\n\t*</field>', '</field>', text)
with open('./static/Waddle/toolBox.xml', 'w', encoding='utf-8') as file:
    file.write(text)
print('\r\'./static/Waddle/toolBox.xml\' format complete.', '  ')
