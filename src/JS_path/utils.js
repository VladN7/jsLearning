// Export your utility functions
export function sectionHeader(title) {
  let result = '';
  for (let i = 0; i < title.length; i++) {
    result += '==';
  }
  console.log(`\n${result}\n${title}\n${result}`);
}
export function sectionSubHeader(title) {
  let result = '';
  for (let i = 0; i < title.length; i++) {
    result += '-';
  }
  console.log(`\n${title}\n${result}`);
}
export function sectionLog(title, operations) {
  console.log(`\n===== ${title} =====`);
  for (const [key, value] of Object.entries(operations)) {
    if (typeof value === 'object') {
      console.log(`${key}:`, JSON.stringify(value));
    } else {
      console.log(`${key}:`, value);
    }
  }
}

export function varTypeCheck(...variables) {
  variables.forEach((variable, index) => {
    const type = typeof variable;
    const value = JSON.stringify(variable);
    console.log(`Variable ${index + 1}: Type - ${type}, Value - ${value}`);
  });
}
export function quickSort(A) {
  if (A.length === 0) {
    return [];
  }
  if (A.length === 1) {
    return A;
  } else {
    let a = [], b = [], p = A[0];
    for (let i = 1; i < A.length; i++) {
      if (A[i] < p) a.push(A[i]);
      else b.push(A[i]);
    }
    return quickSort(a).concat(p, quickSort(b));
  }
}