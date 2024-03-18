// import connection
import db from '../config/database.js'

// get all products
export const getProducts = (result) => {
    db.query("select * from product", (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        }
        else{
            result(null, results)
        }
    })
}

// get single product
export const getProductById = (id, result) => {
    db.query("select * from product where product_id = ?", [id], (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        }
        else{
            result(null, results[0])
        }
    })
}

// insert product to database
export const insertProduct = (data, result) => {
    db.query("insert into product set?", [data], (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        }
        else{
            result(null, results)
        }
    })
}

// update product to database
export const updateProductById = (data, id, result) => {
    db.query("update product set product_name = ?, product_price = ? where product_id = ?", [data.product_name, data.product_price, id], (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        }
        else{
            result(null, results)
        }
    })
}

// delete product from database
export const deleteProductById = (id, result) => {
    db.query("delete from product where product_id = ?", [id], (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        }
        else{
            result(null, results)
        }
    })
}