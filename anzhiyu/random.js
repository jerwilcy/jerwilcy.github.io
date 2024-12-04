var posts=["2024/12/04/新的博客文章/","2024/12/04/cy的博文/","2024/12/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };