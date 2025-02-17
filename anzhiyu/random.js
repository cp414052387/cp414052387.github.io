var posts=["2025/02/11/PMP学习第二课-价值交付系统/","2025/02/08/hexo-blog美化/","2025/02/10/PMP学习第一课-引论/","2025/02/03/第一课-如何搭建blog/","2025/02/17/PMP学习第五课-团队绩效域/","2025/02/16/PMP学习第四课-干系人绩效域/","2025/02/13/PMP学习第三课-项目管理原则/","2025/02/02/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };