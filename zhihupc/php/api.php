<?php
//解决跨域问题：请求代理
  $data = file_get_contents($_GET['url']);
  echo $data;
