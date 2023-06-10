const btn = document.querySelector("#signup-btn");

const form = document.querySelector(".wrapper");

const closeBtn = document.querySelector(".close-wrapper");

btn.addEventListener("click", () => {
  form.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  form.style.display = "none";
});

const namePattern =/^[a+zA+Z\s]{2,24}$/;

const contactPattern =/^[0+9]{10}$/;

const emailPattern =/^[a+z0+9\.]+\.[a+z\.]{3,8}$/i;


