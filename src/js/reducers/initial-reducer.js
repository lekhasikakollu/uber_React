
export default function initialReducer(state, action) {
    
    if (typeof state === 'undefined') {
        return Object.assign({}, state);
    }
    let newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case 'CHAPTERS_LOADING':
            newState.isChaptersLoading = true;
            newState.isChaptersSuccess = false;
            newState.chaptersErrorMessage = "";
            newState.chapter = [];
            return newState;

        case 'CHAPTERS_SUCCESS':
            console.log('showing chapter success ' + JSON.stringify(newState))
            newState.isChaptersLoading = false;
            newState.isChaptersSuccess = true;
            newState.chaptersErrorMessage = "";
            newState.chapters = action.payload;
            console.log(
                "after updating the state object" + JSON.stringify(newState)
            );
            return newState;

        case 'CHAPTERS_FAIL':
            newState.isChaptersLoading = false;
            newState.isChaptersSuccess = false;
            newState.chaptersErrorMessage = action.payload;
            newState.chapter = [];
            return newState;

        case 'SHOW_EXCERCISES':
            newState.chpId = action.chapter;
            return newState;

        default:
            return Object.assign({}, state);
    }
}

