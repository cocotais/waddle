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

$sql = "SELECT * FROM Files WHERE uid=$uname";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        if($row['time']==$_GET["time"]){
            echo base64_decode($row["content"]);
        }
        
    }
    http_response_code(200);
    
} else {
    echo "error";
    http_response_code(400);
}
 
$conn->close();
?>