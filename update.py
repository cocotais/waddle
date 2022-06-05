import io
import re
import time

import bs4
import requests


def alter(file_name, old_str, new_str):
    """
    替换文件中的字符串
    :param file_name:文件名
    :param old_str:就字符串
    :param new_str:新字符串
    :return None
    """
    file_data = ""
    with io.open(file_name, "r", encoding="utf-8") as f:
        for line in f:
            if old_str in line:
                line = line.replace(old_str, new_str)
            file_data += line
    with io.open(file_name, "w", encoding="utf-8") as f:
        f.write(file_data)


def get_commit_number():
    """
    获取gitee仓库中的最新提交数
    :return Number
    """
    page = requests.get(url)
    soup = bs4.BeautifulSoup(page.content, 'html.parser')
    return(int(str(soup.select('div.all-commits>a')[0]).split('\n')[1][0:-4]))


def get_last_version_number():
    """
    获取gitee仓库中的最新版本号
    :return Number
    """
    page = requests.get(url)
    soup = bs4.BeautifulSoup(page.content, 'html.parser')
    return(str(soup.select('#git-readme>div>div.file_content.markdown-body>div')[-1])[5:-6].strip())


def get_this_version_number():
    """
    获取当前版本号
    """
    with open('index.html', 'r', encoding='utf-8') as index:
        return(re.search(r"var version = '(.*)'", index.read(), re.M | re.I).group(1))


def calculate_next_version_number(last_commit_number, last_version_number):
    """
    计算下一版本号
    警告，下一版本号非提交部分的末位是按照本地文件版本号+1计算的，如有不匹配请多次运行本程序。
    :param last_commit_number 最新提交数
    :param last_version_number 当前版本号
    :return str
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
last_commit_number = get_commit_number()
print(last_commit_number, 'commits ', end='')
print('with the version ', end='')
last_version_number = get_last_version_number()
print(last_version_number, '.')
time.sleep(2)

print('The local version is ', end='')
this_version_number = get_this_version_number()
print(this_version_number, '.')

print('The next version is ', end='')
next_version_number = calculate_next_version_number(
    last_commit_number, last_version_number)
print(next_version_number, '.')

print('The version numbers have been modified in the following directories:')
alter('index.html', this_version_number, next_version_number)
print('-', 'index.html : 2')
alter('sw.js', this_version_number, next_version_number)
print('-', 'sw.js : 1')
alter('README.md', this_version_number, next_version_number)
print('-', 'README.md : 1')
