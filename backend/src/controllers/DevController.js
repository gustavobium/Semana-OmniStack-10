const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// index, show, store, update, delete

module.exports = {
    async index(req, res) {
        const devs = await Dev.find();
        return res.json(devs);
    },

    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            const { login, avatar_url, bio } = apiResponse.data;
            const name = apiResponse.data.name ? apiResponse.data.name : login;
        
            console.log(name, avatar_url, bio, github_username);
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });

        }
    
        return res.json(dev);
    },

    async update(req, res) {
        const {  github_username, name, avatar_url, bio, techs, latitude, longitude } = req.body;        
    
        console.log(github_username, name, avatar_url, bio, techs, latitude, longitude);
    
        const techsArray = parseStringAsArray(techs);
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        };
    
        dev = await Dev.update({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
        });        

        return res.json(dev);
    },

    async destroy(req, res) {
        const {  github_username  } = req.body;
        const dev = await Dev.deleteOne({github_username});

        return res.json(dev);
    }
}