module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let i = 0; i < str.length; i += 1) {
    bracketsConfig.forEach((config) => {
      if (config[1] === str[i]) {
        if (stack[stack.length - 1] === config[0]) {
          stack.pop();
        } else {
          stack.push(config[1]);
        }
      } else if (config[0] === str[i]) {
        stack.push(config[0]);
      }
    });
  }

  if (stack.length) {
    return false;
  }

  return true;
};
