const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://mitulagarwal2003:gosnack@cluster0.l6qmk6c.mongodb.net/GoSnack?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("connected");

        const foodItemsData = await mongoose.connection.db.collection("food_items").find({}).toArray();
        const foodCategoryData = await mongoose.connection.db.collection("foodCategory").find({}).toArray();

        global.food_items = foodItemsData;
        global.foodCategory = foodCategoryData;

    } catch (err) {
        console.log("---", err);
    }
};

module.exports = mongoDB;
