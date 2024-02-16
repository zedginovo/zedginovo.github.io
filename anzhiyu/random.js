var posts=["2024/02/11/hello-world/","2024/02/11/111/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };