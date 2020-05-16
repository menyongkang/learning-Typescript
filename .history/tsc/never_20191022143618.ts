// never 具体行为

// throw new Error(message)
// return error('something is error')
// while(true){} 存在无法达到的终点

const err = (message: string): never => {
  throw new Error(message);
}

const showError = () => err('some error');

showError();F