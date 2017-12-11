<?php

$cb = $_GET['callback'];
$word = $_GET['word'];


$s = key_exists('start',$_GET) ? $_GET['start'] : 0;
$c = key_exists('count',$_GET) ? $_GET['count'] : 30;

$url = "https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord={$word}&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=0&word={$word}&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&pn={$s}&rn={$c}&gsm=3c&" . time() . '=';

$curl = curl_init();

curl_setopt($curl,CURLOPT_URL,$url);
curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);

$res = curl_exec($curl);

curl_close($curl);

// var_dump($res);

echo $cb . "($res)";


?>