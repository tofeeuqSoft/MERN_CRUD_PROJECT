import axios from "axios";


export function Create(productName , productCode, img, unitPrice, qty, totalPrice){
    let URL = "/api/v1/CreateProduct";
    let PostBody = {
            productName : productName,
            productCode : productCode,
            img : img,
            unitPrice : unitPrice,
            qty : qty,
            totalPrice : totalPrice 
    }
return axios.post(URL, PostBody).then((res)=>{
    if(res.status === 201){
        return true;
    }else{
        return false;
    }
 }).catch((error)=>{
    console.log(error);
    return false;
 })
}

export function Read(){
    let URL = "/api/v1/ReadProduct"
return axios.get(URL).then((res)=>{
        if(res.status ===200){
            return res.data["data"];
        }else{
            return false;
        }
 }).catch((error)=>{
        console.log(error);
        return false;
 })    
}


export function Update(id, productName, productCode, img,unitPrice,qty,totalPrice){
    let URL = "/api/v1/UpdateProduct/" + id;
        let PostBody = {
            productName:productName,
            productCode:productCode,
            img:img,
            unitPrice:unitPrice,
            qty:qty,
            totalPrice:totalPrice 
    }
return axios.post(URL, PostBody).then((res)=>{
    if(res.status === 200){
        return true;
    }else{
        return false;
    }
 }).catch((error)=>{
    console.log(error);
    return false;
 })
}




export function Delete(id){
    let URL = "/api/v1/DeleteProduct/"+ id;
return  axios.post(URL).then((res)=>{
        if(res.status ===200){
            return true;
        }else{
            return false;
        }
 }).catch((error)=>{
        console.log(error);
        return false;
 })  
}