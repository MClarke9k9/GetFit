init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

// const foo = (x,y) => {
//   let result = y;
//   let arr = x;
//   if (result.length !== arr.length) {
//     return null;
//   }

//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] = result) {
//       return "Woohoo you did it!";
//     } else {
//       return null;
//     }
//   }
// }