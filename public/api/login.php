<?php
session_start();
if($_REQUEST["code"] != $_SESSION["code"]){
    http_response_code(400);
    die(json_encode(array("error"=>"code incorrect")));
}
$data  = json_encode(array("pid"=>"7KeVbBdw","identity"=>$_REQUEST["username"],"password"=>$_REQUEST['password']));
$headerArray = array("Content-type:application/json;charset='utf-8'", "Accept:application/json");
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "https://api.codemao.cn/tiger/v3/web/accounts/login");
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headerArray);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($curl);
$code = curl_getinfo($curl,CURLINFO_HTTP_CODE);
curl_close($curl);
if($code != '200'){
    http_response_code(403);
    die($output);
}
$uname = json_decode(base64_decode(explode(".",json_decode($output)->auth->token)[1]))->user_id;
setcookie("codemao_auth",json_decode($output)->auth->token, time()+3600*24*30,'/','.coco-central.cn',true,true);
http_response_code(200);
echo($output);