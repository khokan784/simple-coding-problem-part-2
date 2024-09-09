
function woodQuentity(chairQuentity, tableQuentity, bedQuentity){
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    const chairTotalWood = chairQuentity * perChair;
    const tableTotalWood = tableQuentity * perTable;
    const bedTotalWood = bedQuentity * perBed;
    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}
const total =woodQuentity(1, 5, 10);
console.log(total);