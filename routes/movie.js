import express from 'express';
import Movie from '../models/movie.model.js';
const router =express.Router();


router.get('/movies',async(req,res)=>{
    try {
        const movies = await Movie.find({}).exec();
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send({message:'Interval server error'})
    }
})


module.exports=router;