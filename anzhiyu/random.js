var posts=["2025/02/03/第一课-如何搭建blog/","2025/02/02/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };