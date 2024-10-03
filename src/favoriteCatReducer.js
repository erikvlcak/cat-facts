function favoriteCatReducer(favoriteList, action) {
    switch (action.type) {
        case 'add selected to favorite list': {
            return action.payload.list.filter(f => f.selected)
        }
    
        case 'remove selection from favorites': {
            return favoriteList.map(item => {
                return { ...item, selected: false };
            })
        }
    }
}

export default favoriteCatReducer;

//fix selection of favoriteList - add different cat head and fix
//button layouts and texts on favorite tab, ie remove save button on fave tab
//and add selected number to delete saved button.