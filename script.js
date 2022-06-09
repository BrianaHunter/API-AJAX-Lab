// my try
// const apiPromise = fetch("https://www.reddit.com/r/aww/.json")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     const post = data.data.children;

//     for (let data of post) {
//       console.log(data);

//       const div = document.createElement("div");

//       const name = data.data.title;
//       console.log(name);
//       const heading = document.createElement("h1");
//       heading.innerHTML = name;
//       div.appendChild(heading);

//       const image = document.createElement("img");
//       image.src = data.data.thumbnail;
//       div.appendChild(image);

//       const link = document.createElement("a");
//       link.classList.add(".url");
//       link.href = data.data.url;
//       div.appendChild(link);

//       document.body.appendChild(div);
//     }
//   });

// IN CLASS
const url = "https://www.reddit.com/r/aww/.json";
const searchForm = document.querySelector(".search");
fetch(url)
  .then((res) => res.json())
  .then(createPosts);

// searchForm event listener
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const subreddit = document.querySelector("input").value;
  console.log(subreddit);

  // construct our url
  const subredditUrl = `https://www.reddit.com/r/${subreddit}/.json`;
  fetch(subredditUrl)
    .then((res) => res.json())
    .then(createPosts);
});

function createPosts(data) {
  // remove the old posts
  if (document.querySelector(".posts"))
    document.body.removeChild(document.querySelector(".posts"));

  const posts = data.data.children;

  // create a div to hold the posts
  const postsContainer = document.createElement("div");
  postsContainer.classList.add("posts");

  // for each method with slice method
  posts.slice(0, 10).forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    // image element
    const image = document.createElement("img");
    image.setAttribute("src", post.data.thumbnail);
    image.classList.add("thumbnail");

    //title element
    const title = document.createElement("p");
    title.innerText = post.data.title;
    title.classList.add("title");

    //link element
    const link = document.createElement("a");
    link.setAttribute("href", `https://reddit.com${post.data.permalink}`);
    link.setAttribute("target", "_blank");
    link.innerText = "View post";
    link.classList.add("link");

    // appending post elements to the postDiv
    postDiv.appendChild(image);
    postDiv.appendChild(title);
    postDiv.appendChild(link);
    postsContainer.appendChild(postDiv);
  });

  //adding posts to container to the body
  document.body.appendChild(postsContainer);
}
