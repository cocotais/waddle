<?php
if (!isset($_COOKIE['codemao_auth'])) {
    http_response_code(401);
    die(json_encode(array("code"=>401,"message"=>"Not logined")));
}
$headerArray = array("Content-type:application/json;", "Accept:application/json");
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.codemao.cn/web/users/details");
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($ch, CURLOPT_COOKIE, "authorization=".$_COOKIE['codemao_auth']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headerArray);
$output = curl_exec($ch);
curl_close($ch);
echo($output);

http_response_code(200);