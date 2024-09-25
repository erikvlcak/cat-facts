function catReducer(list, action) {
  switch (action.type) {
    case "add to list": {
      console.log("added fact", action.payload.newFact);
      let factObject = { id: Date.now(), fact: action.payload.newFact }; //need to find a way how to store data, what keys to use and how to get all stored data at once when displaying list of facts.
      localStorage.setItem(1, factObject.fact);
      return [...list, factObject];
    }
  }
}

export default catReducer;
