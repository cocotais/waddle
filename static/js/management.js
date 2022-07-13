var menagement

menagement.getAll = ()=>{
    if("works" in window.localStorage){
        return window.localStorage["works"]
    }return []
}