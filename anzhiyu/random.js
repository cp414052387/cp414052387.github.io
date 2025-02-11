var posts=["2025/02/08/hexo-blog美化/","1970/01/01/PMP学习第二课-价值交付系统/","2025/02/10/PMP学习第一课-引论/","2025/02/03/第一课-如何搭建blog/","2025/02/02/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };