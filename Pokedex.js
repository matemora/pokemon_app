const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const PokeSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    japanese_name:{
        type:String,
        required:true,
    },
    pokedex_number:{
        type: Number,
        required:true,
    },
    type1:{
        type:String,
        required:true,
    },
    type2:{
        type:String,
        required:true,
    },
    height_m:{
        type:Number,
        required:true,
    },
    weight_kg:{
        type:Number,
        required:true,
    },
    classfication:{
        type:String,
        required:true,
    },
    generation:{
        type:Number,
        required:true,
    },
    is_legendary:{
        type:Boolean,
        required:true,
    },
    hp:{
        type:Number,
        required:true,
    },
    speed:{
        type:Number,
        required:true,
    },
    attack:{
        type:Number,
        required:true,
    },
    defense:{
        type:Number,
        required:true,
    },
    sp_attack:{
        type:Number,
        required:true,
    },
    sp_defense:{
        type:Number,
        required:true,
    },
    capture_rate:{
        type:String,
        required:true,
    },
    experience_growth:{
        type:Number,
        required:true,
    },
    percentage_male:{
        type:Number,
        required:true,
    },
    abilities:{
        type:[String],
        required:true,
    },
    base_total:{
        type:Number,
        required:true,
    },
    base_happiness:{
        type:Number,
        required:true,
    },
    base_egg_steps:{
        type:Number,
        required:true,
    },
    against_water:{
        type:Number,
        required:true,
    },
    against_steel:{
        type:Number,
        required:true,
    },
    against_rock:{
        type:Number,
        required:true,
    },
    against_psychic:{
        type:Number,
        required:true,
    },
    against_poison:{
        type:Number,
        required:true,
    },
    against_normal:{
        type:Number,
        required:true,
    },
    against_ice:{
        type:Number,
        required:true,
    },
    against_ground:{
        type:Number,
        required:true,
    },
    against_grass:{
        type:Number,
        required:true,
    },
    against_ghost:{
        type:Number,
        required:true,
    },
    against_flying:{
        type:Number,
        required:true,
    },
    against_fire:{
        type:Number,
        required:true,
    },
    against_fight:{
        type:Number,
        required:true,
    },
    against_fairy:{
        type:Number,
        required:true,
    },
    against_electric:{
        type:Number,
        required:true,
    },
    against_dragon:{
        type:Number,
        required:true,
    },
    against_dark:{
        type:Number,
        required:true,
    },
    against_bug:{
        type:Number,
        required:true,
}
});

const pok = model('Pokemon', PokeSchema);
exports.pok = pok;
