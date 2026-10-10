// // function callBack(method, url, callback) {
// //   const xhr = new XMLHttpRequest();

// //   xhr.responseType = "json";

// //   xhr.addEventListener("load", () => {
// //     callback(xhr.response);
// //   });

// //   xhr.open(method, url);
// //   xhr.send();
// // }

// // callBack(
// //   "GET",
// //   "https://jsonplaceholder.typicode.com/users/1",
// //   (user) => {
// //     console.log("USER:", user);

// //     callBack(
// //       "GET",
// //       `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
// //       (posts) => {
// //         console.log("POSTS:", posts);

// //         callBack(
// //           "GET",
// //           `https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`,
// //           (comments) => {
// //             console.log("COMMENTS:", comments);
// //           }
// //         );
// //       }
// //     );
// //   }
// // );

function makeTea(callBack) {
  console.log("chai ban rahi hai...");
  callBack();
}

function getbiscuit(callBack) {
  console.log("Biscut le aaye!");
  callBack();
}
function serve(callBack) {
  console.log("Chai aur biscuit serve kar diya");
  callBack();
}

function over() {
  console.log("sab kaam complete");
}

makeTea(() => {
  getbiscuit(() => {
    serve(() => {
      over();
    });
  });
});



