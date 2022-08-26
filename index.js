document
  .querySelector("#signcontent>div")
  .addEventListener("click", function () {
    document.location.href = "signin.html";
  });

document.querySelector("#signcontent>div").style.cursor = "pointer";
document
  .querySelector("#signcontent>div+div")
  .addEventListener("click", function () {
    document.location.href = "signup.html";
  });

document.querySelector("#signcontent>div+div").style.cursor = "pointer";

let companyData = [
  {
    img_url:
      "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-logo.webp&w=384&q=75",
  },
  {
    img_url:
      "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fyamaha-logo.webp&w=384&q=75",
  },
  {
    img_url:
      "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Funicef-logo.webp&w=384&q=75",
  },
  {
    img_url:
      "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fvericast-logo2.webp&w=384&q=75",
  },
  {
    img_url:
      "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fwalgreens-logo.webp&w=384&q=75",
  },
  {
    img_url: "",
  },
  {
    img_url:
      "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fp-and-g-logo.webp&w=384&q=75",
  },
  {
    img_url:
      "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fschwans-logo.webp&w=384&q=75",
  },
  {
    img_url:
      "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fdictionary-com-logo.webp&w=384&q=75",
  },
  {
    img_url: "",
  },
];

companyData.forEach(function (el) {
  let box = document.createElement("div");

  box.style.fontFamily = "sans-serif";

  let image = document.createElement("img");
  image.setAttribute("src", el.img_url);
  image.style.width = "100%";

  box.append(image);
  document.querySelector("#container").append(box);
});

let productData = [
  {
    img1:
      "https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1920&q=100",
    img2:
      "https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-calendar-product-icon.png&w=128&q=75",
    heading: "Marketing Calendar",
    description:
      "A calendar that helps you see, schedule, and share your marketing.",
    li1: "See everything together in one place",
    li2: "Share your progress with higher-ups",
    li3: "Show what your marketing is doing",
    color: "orange",
    btnfont: "#F37E5D",
    btnbg: "#FFEDE3",
  },
  {
    img1:
      "https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fsuite-product-background.png&w=1920&q=100",
    img2:
      "https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-suite-product-icon.png&w=128&q=75",
    heading: "Marketing Suite",
    description:
      "A family of agile marketing products to coordinate your team, projects, and process.",
    li1: "Manage marketing requests",
    li2: "Eliminate content bottlenecks",
    li3: "Maximize resources to increase output",
    btnfont: "#F37E5D",
    btnbg: "#FFEDE3",
  },
  {
    img1:
      "https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhs-product-background.png&w=1920&q=100",
    img2:
      "https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-suite-product-icon.png&w=128&q=75",
    heading: "Headline Studio",
    description: "Write better headlines that will boost your traffic.",
    li1: "Score your headlines based on proven data",
    li2: "Improve headlines with smart suggestions",
    li3: "Find the high-scoring words instantly",
    btnfont: "#618BE0",
    btnbg: "#DFE8F9",
  },
  {
    img1:
      "https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fami-product-background.png&w=1920&q=100",
    img2:
      "https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-calendar-product-icon.png&w=128&q=75",
    heading: "Actionable Marketing Institute",
    description: "Develop new marketing skills in 30 minutes (or less).",
    li1: "Improve your marketing with fluff-free training",
    li2: "Spend less time learning & more time doing",
    li3: "Learn from industry pros you trust",
    btnfont: "#835CE5",
    btnbg: "#E6DEFA",
  },
];

productData.forEach(function (el) {
  let box = document.createElement("div");

  let img_1 = document.createElement("img");
  img_1.setAttribute("src", el.img1);
  img_1.style.height = "20vh";
  img_1.style.width = "450px";
  img_1.style.position = "absolute";

  let img_2 = document.createElement("img");
  img_2.setAttribute("src", el.img2);
  img_2.style.width = "15%";
  img_2.style.height = "10vh";
  img_2.style.position = "relative";
  img_2.style.top = "12vh";
  img_2.style.left = "6vh";

  let heading = document.createElement("h1");
  heading.innerText = el.heading;
  heading.style.textAlign = "left";
  heading.style.marginTop = "80px";
  heading.style.fontSize = "22px";
  heading.style.paddingLeft = "40px";

  let desc = document.createElement("p");
  desc.innerText = el.description;
  desc.style.paddingLeft = "40px";
  desc.style.fontFamily = "sans-serif";

  let unordered_list = document.createElement("ul");

  let item1 = document.createElement("li");
  item1.innerText = el.li1;
  let item2 = document.createElement("li");
  item2.innerText = el.li2;
  let item3 = document.createElement("li");
  item3.innerText = el.li3;

  unordered_list.append(item1, item2, item3);
  unordered_list.style.paddingLeft = "80px";
  unordered_list.style.fontFamily = "sans-serif";
  unordered_list.style.fontSize = "14px";
  unordered_list.style.lineHeight = "30px";
  unordered_list.style.listStyleType = "circle";

  let btn = document.createElement("button");
  btn.innerText = "Explore More";
  btn.style.padding = "10px";
  btn.style.marginLeft = "40px";
  btn.style.bottom = "10px";
  btn.style.color = el.btnfont;
  btn.style.backgroundColor = el.btnbg;
  btn.style.border = "white";
  btn.style.borderRadius = "2px";

  box.append(img_1, img_2, heading, desc, unordered_list, btn);

  document.querySelector("#container2>div").append(box);
});

document.querySelector("#footer>div>p").style.cursor = "pointer";
document.querySelector("#footer>div>p+p+p").style.cursor = "pointer";
document.querySelector("#footer>div>p").addEventListener("click", function () {
  document.location.href = "signup.html";
});

document
  .querySelector("#footer>div>p+p+p")
  .addEventListener("click", function () {
    document.location.href = "signin.html";
  });
