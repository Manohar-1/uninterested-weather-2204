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

  let image = document.createElement("img");
  image.setAttribute("src", el.img_url);
  image.style.width = "100%";

  box.append(image);
  document.querySelector("#container").append(box);
});
