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
      return 'Not found'
    }
  }
};

export default getCarImage