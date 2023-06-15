const getCarImage = (type: string): any => {
  switch (type) {
    case "passenger": {
      return require("../assets/passenger.png");
    }
    case "cargo": {
      return require("../assets/cargo.png");
    }
    case "special": {
      return require("../assets/special.png");
    }
    default: {
      return require('../assets/free-icon-unknown-3179157.png')
    }
  }
};

export default getCarImage