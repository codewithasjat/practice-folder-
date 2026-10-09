
function callBack(method, url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.responseType = "json";

  xhr.addEventListener("load", () => {
    callback(xhr.response);
  });

  xhr.open(method, url);
  xhr.send();
}

callBack(
  "GET",
  "https://jsonplaceholder.typicode.com/users/1",
  (user) => {
    console.log("USER:", user);

    callBack(
      "GET",
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
      (posts) => {
        console.log("POSTS:", posts);

        callBack(
          "GET",
          `https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`,
          (comments) => {
            console.log("COMMENTS:", comments);
          }
        );
      }
    );
  }
);

