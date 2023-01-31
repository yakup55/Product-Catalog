export const OPEN_SNACBAR="OPEN_SNACBAR"
export const CLOSE_SNACBAR="CLOSE_SNACBAR"

export function openSnacbar(snacbar){
    return function(dispatch){
        return dispatch({type:OPEN_SNACBAR,payload:snacbar})
    }
}
export function closeSnacbar(){
    return function(dispatch){
        return dispatch({type:CLOSE_SNACBAR})
    }
}