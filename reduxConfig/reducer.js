const initialState = {
    fontSize: 30,
    fontSize1:15,
    fontSize2:15
};

export const reducer = (state = initialState,action) => {
    switch (action.type){
        case 'INCREASE_FONT_SIZE':
            return {
                ...state,
                fontSize: action.currentFontSize =32,
            };

            case 'MEDIUM_FONT_SIZE':
                return {
                    ...state,
                    fontSize: action.currentFontSize =30,
                };
    
            case 'DECREASE_FONT_SIZE':
                return {
                    ...state,
                    fontSize: action.currentFontSize = 25,
                };
            
                case 'SMALL_FONT_SIZE':
                    return {
                        ...state,
                        fontSize1: action.currentFontSize =10,
                    };
        
                    case 'MEDIUM1_FONT_SIZE':
                        return {
                            ...state,
                            fontSize1: action.currentFontSize =13,
                        };
            
                    case 'LARGE_FONT_SIZE':
                        return {
                            ...state,
                            fontSize1: action.currentFontSize = 15,
                        };

                        case 'SMALL2_FONT_SIZE':
                            return {
                                ...state,
                                fontSize2: action.currentFontSize =15,
                            };
                
                            case 'MEDIUM2_FONT_SIZE':
                                return {
                                    ...state,
                                    fontSize2: action.currentFontSize =20,
                                };
                    
                            case 'LARGE2_FONT_SIZE':
                                return {
                                    ...state,
                                    fontSize2: action.currentFontSize = 25,
                                };
            default:
                return state;

    }
};



