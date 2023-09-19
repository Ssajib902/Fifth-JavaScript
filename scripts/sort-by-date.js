
// const displayFeatures2 = cards => {

// function sortingArray() {
//         const cardsArray = cards.tools;
//         const sortByDate = document.getElementById('sort-date');
//         // console.log("clicked");
//         const customSort = (a, b) => {
//             const dataA = new Date(a.published_in);
//             const dataB = new Date(b.published_in);
//             if (dataA > dataB) {
//                 return 1;
//             }
//             else if (dataA < dataB) {
//                 return -1;
//             }
//             else {
//                 return 0;
//             }
//         }
//         cardsArray.sort(customSort);
//     }
// sortingArray();
// };
// displayFeatures2();
const fetchUniverseHub2 = async () => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data);
};

document.getElementById('sort-date').addEventListener("click", function(){
    console.log("this is new");


})