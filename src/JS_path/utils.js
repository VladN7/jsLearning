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

Array.prototype.quickSort = function(propName) {
  if (this.length <= 1) {
    return [...this];
  }

  let a = [], b = [], p = this[0];
  const isObject = typeof p === 'object' && p !== null;

  for (let i = 1; i < this.length; i++) {
    let comparison;
    if (isObject && propName) {
      comparison = String(this[i][propName]).localeCompare(String(p[propName]));
    } else if (isObject) {
      const firstKey = Object.keys(this[i])[0];
      comparison = String(this[i][firstKey]).localeCompare(String(p[firstKey]));
    } else {
      comparison = String(this[i]).localeCompare(String(p));
    }

    if (comparison < 0) {
      a.push(this[i]);
    } else {
      b.push(this[i]);
    }
  }

  return [...a.quickSort(propName), p, ...b.quickSort(propName)];
};
