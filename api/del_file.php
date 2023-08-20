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
$req = intval(file_get_contents('php://input'));
$sql = "DELETE FROM `Files` WHERE `time` = $req";
 
if ($conn->query($sql) === TRUE) {
    http_response_code(200);
    echo 'okay';
} else {
    http_response_code(400);
    echo $conn->error;
    echo $sql;
}
 
$conn->close();
?>