const apiPromise = fetch("https://www.reddit.com/r/aww/.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const post = data.data.children;

    for (let data of post) {
      console.log(data);

      const div = document.createElement("div");

      const name = data.data.title;
      console.log(name);
      const heading = document.createElement("h1");
      heading.innerHTML = name;
      div.appendChild(heading);

      const image = document.createElement("img");
      image.src = data.data.thumbnail;
      div.appendChild(image);

      const link = document.createElement("a");
      link.href = data.data.url;
      div.appendChild(link);

      document.body.appendChild(div);
    }
  });
