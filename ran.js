let wid = document.querySelector("#width")
let hei = document.querySelector("#height")
let width = 800;
let height = 400;
let dimension;

input(wid, width, "width")

// doing the same for height input
input(hei, height, "height")

const button = document.querySelector('#button');
button.addEventListener("click", async () => {
  let blur = document.querySelector("#blur").value;
  width = Math.floor(width);
  height = Math.floor(height);
  let url = `https://picsum.photos/${width}/${height}`;
  // adding grayscale to the url
  if (document.querySelector("#gray").checked) {
    url += `?grayscale`;
    // adding blur to the url after the grayscale
    if (blur != 0) {
      url += `&blur=${blur}`
    };
  };
  // adding blur to the url
  if (blur != 0) {
    url += `?blur=${blur}`
  };
  let img = document.querySelector('.img');
  img.src = url;
});

let x;
let y;
let dirList = [false, false, false, false]
document.querySelector("#topleft").addEventListener('mousedown', e => {
  startCoordinates(e)
  dirList[0] = true;
})
document.querySelector("#topright").addEventListener('mousedown', e => {
  startCoordinates(e)
  dirList[1] = true;
})

document.querySelector("#bottomleft").addEventListener('mousedown', e => {
  startCoordinates(e)
  dirList[2] = true;
})
document.querySelector("#bottomright").addEventListener('mousedown', e => {
  startCoordinates(e)
  dirList[3] = true;
})

document.addEventListener("mouseup", e => {
  for (var i = 0; i < dirList.length; i++) {
    if (dirList[i]) {
      endCoordinates(e, i)
      dirList[i] = false
    }
  }
})

function startCoordinates(e) {
  x = e.clientX;
  y = e.clientY;
}

function endCoordinates(e, i) { //the i will be used to determine witch controler
  let diffx;
  let diffy;
  if (i == 0) { //that means it is the topleft controler
    diffx = Math.floor(x - e.clientX);
    diffy = Math.floor(y - e.clientY);
  } else if (i == 1) { //that means it is the topright controler
    diffx = Math.floor(e.clientX - x);
    diffy = Math.floor(y - e.clientY);
  } else if (i == 2) { //that means it is the bottomleft controler
    diffx = Math.floor(x - e.clientX);
    diffy = Math.floor(e.clientY - y);
  } else if (i == 3) { //that means it is the bottomright controler
    diffx = Math.floor(e.clientX - x);
    diffy = Math.floor(e.clientY - y);
  };

  // extracting the width and height from input's value or its placeholder
  if (wid.value != "") {
    width = parseFloat(wid.value) + diffx;
    wid.value = Math.floor(parseFloat(wid.value) + diffx * 3 / 4);
  } else {
    width = parseFloat(wid.placeholder) + diffx;
    wid.value = Math.floor(parseFloat(wid.placeholder) + diffx * 3 / 4);
  }
  if (hei.value != "") {
    height = parseFloat(hei.value) + diffy;
    hei.value = Math.floor(parseFloat(hei.value) + diffy * 3 / 4);
  } else {
    height = parseFloat(hei.placeholder) + diffy;
    hei.value = Math.floor(parseFloat(hei.placeholder) + diffy * 3 / 4);
  }

  let bugfixerwid = Math.floor(width * 3 / 4);
  let bugfixerhei = Math.floor(height * 3 / 4);
  document.querySelector('.rect').style.width = `${bugfixerwid}pt`; //adjusting the dimensions
  document.querySelector('.rect').style.height = `${bugfixerhei}pt`; //adjusting the dimensions
}

function input(i, j, string) {
  i.addEventListener("input", () => {
    // extracting dimensions
    if (i.value != "") {
      j = i.value;
      dimension = j * 3 / 4; // fixing a weird bug
    } else {
      j = i.placeholder;
      dimension = j
    }
    console.log(j);
    // styling the width and height of the rectangle
    dimension = dimension.toString();
    document.querySelector('.rect').style[string] = `${dimension}pt`; //adjusting the dimensions
    eval(string + "=" + j)
  });
}
