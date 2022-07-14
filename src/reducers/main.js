const Main = (state, action) => {
    if (state === undefined) {
        return {
            test: false,
        };
    }
    switch (action.type) {
        case 'MEMORY_INIT_' :
            console.log('MEMORY_INIT');
            // console.log(state.main);
            // state.main.test = true;
            // console.log(state.main);
            return {test : true};

        case 'TEST_SWITCH_' :
            console.log(state.main);
            return {test:  true};

        case 'TEST_' :
            console.log(state.main);
            return {...state.main};

        default:
            return state.main;
    }

};
export default Main;


