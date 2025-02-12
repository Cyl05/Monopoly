import express from "express";
import { connectDB } from "./config/db.js";
import Property from "./models/property.model.js";
import cors from "cors";
import env from "dotenv";

env.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:5173', // Your frontend origin
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Good Morning");
});

// retrieve all properties
app.get("/properties", async (req, res) => {
	try {
		const properties = await Property.find().sort({ id: 1 });
		res.status(200).json(properties);
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
});

app.get("/deleteprops", async (req, res) => {
	try {
		await Property.deleteMany({});
		res.status(200).json({ message: "Cleared collection" });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
})

// insert property to mongodb
app.post("/property", async (req, res) => {
	const property = req.body;

	const newProperty = new Property(property);
	try {
		await newProperty.save();
		res.status(201).json({message: "Created success"});
	} catch (error) {
		console.log(error.message);
		res.status(500).json({message: "Server Error"});
	}
});

// insert multiple properties to mongodb
app.post("/properties", async (req, res) => {
    const properties = req.body; // Expecting an array of properties

    if (!Array.isArray(properties)) {
        return res.status(400).json({ message: "Invalid input, expected an array" });
    }

    try {
        await Property.insertMany(properties); // Bulk insert into MongoDB
        res.status(201).json({ message: "Properties created successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server Error" });
    }
});


app.listen(port, () => {
	connectDB();
	console.log(`Server started at http://localhost:${process.env.PORT}`);
});
