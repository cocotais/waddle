import os
import tornado.ioloop
import tornado.web
import threading
import json

#系统切换
import platform
WhatOs = platform.system()

if WhatOs == "windows":#win专用
	import asyncio
	asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
else:
	pass


#获取终端传入数据
import sys
gpus = sys.argv[1]
dk = gpus

'''
引用css&js：{{static_url('XXXX')}}
引用数据：{{XXXX}}
'''

class MainHandler(tornado.web.RequestHandler):
	def get(self):
		self.render("index.html")

settings = {
	"cookie_secret": "__TODO:_GENERATE_YOUR_OWN_RANDOM_VALUE_HERE__",
	"template_path": "page",
	"static_path": "static",
	"debug": True
}   
#debug决定是否实时加载

def make_app():
	return tornado.web.Application([
		(r"/", MainHandler),
	], **settings)   

print("server run in http://localhost:"+dk+"/")
dk = int(gpus)

app = make_app()
app.listen(dk)
tornado.ioloop.IOLoop.current().start()
