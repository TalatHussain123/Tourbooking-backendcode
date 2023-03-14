import Tour from '../models/Tour.js';

//Create Tour
export const createTour = async (req, res) => {

    const newTour = new Tour(req.body);
    try {
        const saveTour = await newTour.save();
        res.status(200).json({ success: true, message: 'Sucessfully Created', data: saveTour });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Created Failed!' });
    }
}

//Update Tour
export const updateTour = async (req, res) => {
    const id = req.params.id
    try {
        const updateTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })
        res.status(200).json({ success: true, message: 'Sucessfully updated', data: updateTour });
    } catch (err) {
        res.status(500).json({ success: false, message: 'update Failed' });
    }
}

//Delete
export const deleteTour = async (req, res) => {
    const id = req.params.id;
    try {
        await Tour.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Sucessfully deleted!' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'delete Failed' });
    }
}

// get single tour
export const getSingleTour = async (req, res) => {
    const id = req.params.id
    try {
        const tour = await Tour.findById(id).populate('reviews');
        res.status(200).json({ success: true, message: 'Sucessful', data: tour });
    } catch (err) {
        res.status(404).json({ success: false, message: 'Not Found' });
    }
}

//getallTour
export const getAllTour = async (req, res) => {
    //For pagination
    // const page = parseInt(req.query.page);
    // than in try section:=> const tours = await Tour.find({}).skip(page * 8).limit(8);

    try {
        const tours = await Tour.find({}).populate('reviews');
        res.status(200).json({ success: true, message: 'Sucessful', data: tours }); //for conformation of pagination => count:tours.length
    } catch (err) {
        res.status(404).json({ success: false, message: 'Not Found' });
    }
}


//get Tour by search
export const getTourBysearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)
    try {
        const tours = await Tour.find({ city, distance: { $gte: distance }, maxGroupSize: { $gte: maxGroupSize }, }).populate('reviews');
        res.status(200).json({ success: true, message: 'Sucessful', data: tours });
    } catch (err) {
        res.status(404).json({ success: false, message: 'Not Found' });
    }

}

//get by Feature
export const getFeatureTour = async (req, res) => {
    try {
        const tours = await Tour.find({ featured: true }).populate('reviews'); //.limit(8) for pagination
        res.status(200).json({ success: true, message: 'Sucessful', data: tours });
    } catch (err) {
        res.status(404).json({ success: false, message: 'Not Found' });
    }
}


//get tour count
export const getCountTour = async (req, res) => {
    try {
        const tourcount = await Tour.estimatedDocumentCount()
        res.status(200).json({ success: true, data: tourcount });
    } catch (err) {
        res.status(404).json({ success: false, message: 'Found' });
    }
}