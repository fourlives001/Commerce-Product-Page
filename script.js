const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const display = document.querySelector(".display");
const imgHide = document.getElementById("img-product");
const imgShow = document.getElementById("img-productII");
const addToCart = document.querySelector(".add");
// let num = 0;
// plus.addEventListener("click", () => {
//   num++;
//   display.textContent = num;
// });
// minus.addEventListener("click", () => {
//   display.textContent = num;
//   num--;
//   if (num < 0) {
//     num = 0;
//   }
// });
addAndRemove();
let count = 0;
function addAndRemove() {
  plus.addEventListener("click", () => {
    count++;
    display.textContent = count;

    let num = 150;
    console.log();
  });

  minus.addEventListener("click", () => {
    display.textContent = count;
    count--;

    if (count < 0) {
      count = 0;
    }
  });
  // function toCart() {
  //   let cost = 150;
  //   return count * cost;
  // }
  // console.log(toCart);
}

function toCart(count) {
  let cost = 150;
  return count * cost;
}
// console.log(toCart(count));
addToCart.addEventListener("click", (toCart) => {
  // function toCart() {
  //   let cost = 150;
  //   return count * cost;

  //   addAndRemove();
  // }
  console.log(addToCart);
});

imgHide.addEventListener("mouseover", () => {
  imgHide.style.display = "none";
  imgShow.style.display = "block";
});

imgHide.addEventListener("mouseout", () => {
  imgHide.style.display = "block";
  imgShow.style.display = "none";
});
