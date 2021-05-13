const defaultState = {
    user: {}
}

//Reducers transformam um state em um valor
export default function reducer(state = defaultState,
    { type, payload }: { type: string; payload: any }): any {
    switch (type) {
        case 'SET_USER_STATE':
            return {
                ...state,
                user: {
                    username: payload.split('@')[0]                    
                }
            }
            case 'SET_USER_DATE':
                return {
                    ...state,
                    user: {                        
                        lastLogin: payload
                    }
                }         
    }
}