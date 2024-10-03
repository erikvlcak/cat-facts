function catReducer(list, action) {
  switch (action.type) {
    case "add to list": {
      action.payload.setNewId((prev) => prev + 1);
      let factObject = { id: action.payload.newId, fact: action.payload.newFact, selected: false, favorite: false };
      // localStorage.setItem("factsArray", JSON.stringify(list));
      return [...list, factObject];
    }
    case "select all": {
      return list.map((item) => {
        return { ...item, selected: true };
      });
    }
    case "deselect all": {
      return list.map((item) => {
        return { ...item, selected: false };
      });
    }
    case "select fact": {
      return list.map((item) => {
        if (item.id == action.payload.clickedItem.id) {
          
          return { ...item, selected: !item.selected };
        } else return item;
      });
    }
    
  }
}

export default catReducer;
