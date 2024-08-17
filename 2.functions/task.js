function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }

    sum += arr[i];
  }
  
  return {
    min: min,
    max: max,
    avg: +(sum / arr.length).toFixed(2),
  }
}

function summElementsWorker(...arr) {
  if (arr.length > 0) {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  } else return 0;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length > 1) {
    let max = arr[0];
    let min = arr[0];
    
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] < min) {
        min = arr[i];
      } 
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max - min;
  } else return 0;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length > 1) {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  } else return 0;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length > 1) {
    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }
    if (countEvenElement > 0) {
      return sumEvenElement / countEvenElement;
    } else return 0;
  } else return 0;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 1; i < arrOfArr.length; i += 1) {
    let currentMaxWorkerResult = func(...arrOfArr[i]);
    if (currentMaxWorkerResult > maxWorkerResult) {
      maxWorkerResult = currentMaxWorkerResult;
    }
  }
  return maxWorkerResult;
}
