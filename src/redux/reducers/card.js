
export const cardReducer = (state={cardItems:[]}, action) => {
    switch(action.type ) {
        case "ADD_CARD":
            const item=action.payload;
            const existItem=state.cardItems.find(x=>x.id === item.payload); // kayıtlı olan ve dışardan gelenin aynı olduğu durum varsa 
            if(existItem){
                return {
                ...state,
                cardItems: state.cardItems.map(x=>x.id === existItem.id?item:x)
            }  
         }  else { // farklı bir ürün geldiyse
                return {
                    ...state,
                    cardItems: [...state.cardItems, item]
                }
            }
        case "REMOVE_CARD":
            return {
                cardItems:state.cardItems.filter(x=>x.id !=action.payload)
            }    
           
            
        default:
           return state
    }
}