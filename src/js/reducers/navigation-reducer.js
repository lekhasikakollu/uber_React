export default function NavigationReducer(state, action) {
    if (typeof state === 'undefined') {
        return Object.assign({}, state);
    }
    switch (action.type) {
        case 'CHANGE_VIEW':
            //console.log('yayy in show-excercise case');
            let showExerciseState = JSON.parse(JSON.stringify(state));
            showExerciseState.currentMainView = "exercise";
            return showExerciseState;

        default:
            return Object.assign({}, state);
    }
}