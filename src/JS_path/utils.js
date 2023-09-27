// Export your utility functions
export function sectionHeader(title) {
  console.log(`\n===== ${title} =====`);
}

export function multiVarTypeCheck(...variables) {
  variables.forEach((variable, index) => {
    const type = typeof variable;
    const value = JSON.stringify(variable);
    console.log(`Variable ${index + 1}: Type - ${type}, Value - ${value}`);
  });
}
