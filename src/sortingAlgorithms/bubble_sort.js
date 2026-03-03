export default function bubble_sort(originalArray) {
  // 1. Create a deep copy so we don't mutate the original state
  let arr = originalArray.map((item) => ({ ...item }));
  let n = arr.length;
  let animations = []; // To store what happened at each step

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Record: These two indices are being compared (for changing color)
      animations.push({ type: "compare", indices: [j, j + 1] });

      if (arr[j].h > arr[j + 1].h) {
        // Record: These two need to swap
        animations.push({ type: "swap", indices: [j, j + 1] });

        // Standard swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return animations;
}
