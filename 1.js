/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-1.com"
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-2.com"
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-3.com"
  }
];


function createPostCard(posts) {
  posts.forEach(post => {
    const body = document.querySelector(".post");
    const newDiv = document.createElement("div");
    body.append(newDiv);
    newDiv.classList.add("post");

    const img = document.createElement("img");
    newDiv.prepend(img);
    img.classList.add("post__image");
    img.setAttribute("alt", "my image");
    img.setAttribute("src", post.img);
    // console.log(img);

    const head = document.createElement("h2");
    newDiv.append(head);
    head.classList.add("post__title");
    head.textContent = post.title;
    // console.log(head);

    const article = document.createElement("p");
    newDiv.append(article);
    article.classList.add("post__text");
    article.textContent = post.text;
    // console.log(article);

    const button = document.createElement("a");
    newDiv.append(button);
    button.classList.add("button");
    button.textContent = "Read more";
    button.href = post.link;
  });
}

createPostCard(posts);
