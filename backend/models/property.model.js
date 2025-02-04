import mongoose from "mongoose";
// Property object is how we interact with MongoDB

const propertySchema = new mongoose.Schema({
    flag: {
        type: String,
        required: true
    }, 
    id: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    isOwned: {
        type: Boolean,
        required: true
    }, 
    isMortgaged: {
        type: Boolean,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    housesOwned: {
        type: Number,
        required: true
    },
    rent: {
        type: [Number], 
        required: true
    }
});

const Property = mongoose.model('Property', propertySchema);

export default Property;