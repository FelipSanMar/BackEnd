

class ProductManager{

    static id=0;   //No cambiara el valor por lo que permite el auto-incremento 

    constructor(){
        this.products=[]; //Crea arreglo vacio 
    }

    addProduct(title, description, price, thumbnail, code, stock){

        if(arguments.length !== 6){console.log("ERROR: Debe ingresar todos los campos \n");
    }else{
        if(!this.products.find((product) => product.code === code)){

            
            ProductManager.id++;        //Auto-incrementa el id
            const productData = {
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
                id: ProductManager.id
            };

            this.products.push(productData);

        }else {console.log("ERROR: Codigo repetido \n");}
    }
    }

    getProducts(){

        return this.products;
    }

    getProductByid(id){

        let productId = this.products.find((product) => product.id === id);

        if(productId){

            console.log("PRODUCTO ENCONTRADO \n");
            return productId;

        }else{ console.error("Not found");}
    }
}


const productos = new ProductManager();

// Arreglo vacio
console.log("Arreglo Vacio:");
console.log(productos.getProducts());

// Creacion de productos 
productos.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
productos.addProduct("producto2", "Este es un producto2", 40, "Imagen", "Perico", 90);
productos.addProduct("producto3", "Este es un producto prueba3", 30, "Imagen 3", "a", 26);


// Impresion del producto
console.log("PRODUCTOS AGREGADOS:");
console.log(productos.getProducts());

//addProduct con CODE repetido
console.log("CODE REPETIDO:");
productos.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

//Id encontrado
console.log("ID ENTONRADO: ");
console.log(productos.getProductByid(2));

//Id no encontrado
console.log("ID NO ENTONRADO: ");
productos.getProductByid(10);