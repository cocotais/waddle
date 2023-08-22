<?php
session_start();
header('Content-type:image/jpeg');

//设置验证码图像的宽和高
$width=120;
$height=40;
 
//验证码可选值
$element=array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
 
//验证码的值
$string='';
for ($i=0;$i<5;$i++){
	$string.=$element[rand(0,count($element)-1)];
}
$_SESSION["code"] = $string;
//创建图像；
$img=imagecreatetruecolor($width, $height);
//设置图像验证码的背景颜色
$colorBg=imagecolorallocate($img,rand(200,255),rand(200,255),rand(200,255));
//设置验证码的字体颜色
$colorString=imagecolorallocate($img,rand(10,50),rand(10,50),rand(10,50));
//给图片填充背景颜色，从左上角开始填充
imagefill($img,0,0,$colorBg);   
 
//设置像素点
for($i=0;$i<100;$i++){
	imagesetpixel($img,rand(0,$width-1),rand(0,$height-1),imagecolorallocate($img,rand(100,200),rand(100,200),rand(100,200)));
}
//设置图像上的线条
for($i=0;$i<3;$i++){
	imageline($img,rand(0,$width/2),rand(0,$height),rand($width/2,$width),rand(0,$height),imagecolorallocate($img,rand(100,200),rand(100,200),rand(100,200)));
}

//设置验证码的字体和显示位置
imagettftext($img,14,rand(-5,5),rand(5,30),rand(30,35),$colorString,"DejaVuSans.ttf",$string);
//输出图像
imagejpeg($img);
//释放资源
imagedestroy($img);
?>