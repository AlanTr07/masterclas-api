import mongoose,{Schema} from "mongoose";

const productos=new Schema({
    nombre:String,
    modelos:String,
    precio:Number,
    descripcion:String,
    image:{
        filename:String,
        path:String,
    },
    
    createArt:{type:Date, default:Date.now}
});

const Producto=mongoose.model('productos',productos);
export default Producto;
