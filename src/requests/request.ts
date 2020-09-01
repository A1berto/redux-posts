const URL = "https://5f4e3b915b92f4001604d804.mockapi.io/"

export const getToDoList = () => {
    console.log("entrato nel get")
    return fetch(URL).then(res => res.json())/*.then(json => json.body)*/
}