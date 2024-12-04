var posts=["chengyi/cy的博文/","chengyi/新的博客文章/","chengyi/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };