const button = document.querySelector('#button');
let img = document.querySelector('.img');
let wid = document.querySelector("#width")
let hei = document.querySelector("#height")
let array = [wid, hei]
let list = [width, height];
let string = ["width", "height"];
wid.addEventListener("input", async () => {
                   // extracting width and height
  for (var i = 0; i < array.length; i++) {
    if (array[i].value != "") {
      list[i] = array[i].value;
    }else {
      list[i] = array[i].placeholder;
    }
    let dimension = list[i] - (1/4 *list[i]);   // fixing a weird bug
    dimension = dimension.toString();
    document.querySelector('.rect').style[`${string[i]}`] = `${dimension}pt`;
  }
});
button.addEventListener("click", async () => {
  img.src = `https://picsum.photos/${list[0]}/${list[1]}`;
});
function stylingRect(dimension, dim) {
}
