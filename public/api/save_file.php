<?php
include_once('./config.php');
if(!isset($_COOKIE['codemao_auth'])){
    http_response_code(401);
    die("error");
}
// 创建连接
$uname = json_decode(base64_decode(explode(".",$_COOKIE['codemao_auth'])[1]))->user_id;
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    http_response_code(500);
    die("error");
} 
$_req = json_decode(file_get_contents('php://input'));
 $t=time();
$sql = "INSERT INTO Files (file_name, content, uid, title, time)
VALUES ('".$_req->filename."', '".base64_encode(json_encode($_req->content))."', $uname, '".$_req->title."', $t)";
 
if ($conn->query($sql) === TRUE) {
    http_response_code(200);
    echo $t;
} else {
    http_response_code(400);
    echo $conn->error;
    echo $sql;
}
 
$conn->close();
?>