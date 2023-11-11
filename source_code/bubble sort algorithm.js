// Bubble Sort Algorithm

const bubbleSort = function (arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j+1);
                swapped = true;
            }
        }
        if (!swapped)
            break;
    }
    return arr;
};

const swap = function (arr, i, j) {
    let c = arr[i];
    arr[i] = arr[j];
    arr[j] = c;
};

let array = [3, 2, 4, 5, 1, 9, 6, 8, 7, 10];
console.log(`before: ${array}`);
console.log(`after : ${bubbleSort(array)}`);

module.exports = {bubbleSort};
