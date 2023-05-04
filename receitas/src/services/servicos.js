
import apiReceitas from "./apiExterna"
const servicos = {
  getAllReceitas( callback) {
    apiReceitas.get("receitas").then((response)=>{
      callback(response.data)

    })
  },

  getAllIngredientes( callback ) {
    apiReceitas.get("ingredientes").then((response)=>{
      console.debug("depois do retorno da API")
      callback(response.data)
    })
  },
  postIngrediente( ingr, callback ) {
    apiReceitas.post('ingredientes',ingr).then((response) => {
      if (callback != undefined) {
        callback(response.data)
      }
    }
    )

  }


}
export default servicos
