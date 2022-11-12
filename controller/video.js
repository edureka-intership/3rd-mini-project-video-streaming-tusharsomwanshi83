const video = require('../model/video')

// This funciton shows the list of all shows in Database
// http://localhost:8011/shows
exports.Shows = (req, res) => {
    video.find({ type: "show" })
        .then(
            result => {
                res.status(200).json({
                    message: "Shows fatched sucess",
                    data: result
                })
            }
        )
        .catch(error => {
            res.status(500).json({
                message: "DB error occured",
                data: error
            })
        })
}

// This funciton shows the list of all movies in Database
// http://localhost:8011/movies
exports.Movies = (req, res) => {
    video.find({ type: "movie" })
        .then(
            result => {
                res.status(200).json({
                    message: "Movies fetched sucess",
                    data: result
                })
            }
        )
        .catch(
            error => {
                res.status(500).json({
                    message: "DB error occured",
                    data: error
                })
            }
        )
}

// This funciton shows the specific show for searched result
// http://localhost:8011/shows/1
exports.ShowsId = (req, res) => {
    const filter = {}
    filter.type = { $in: ["show"] }
    filter._id = { $in: req.params.id }
    video.find(filter)
        .then(
            result => {
                res.status(200).json({
                    message: "Shows fatched sucess",
                    data: result
                })
            }
        )
        .catch(error => {
            res.status(500).json({
                message: "DB error occured",
                data: error
            })
        })
}

// This funciton shows the specific movie for searched result
// http://localhost:8011/movies/8
exports.MoviesId = (req, res) => {
    const filter = {}
    filter._id = { $in: req.params.id }
    console.log(filter);
    video.find(filter)
        .then(
            result => {
                res.status(200).json({
                    message: "Movies fetched sucess",
                    data: result
                })
            }
        )
        .catch(
            error => {
                res.status(500).json({
                    message: "DB error occured",
                    data: error
                })
            }
        )
}

// Show the all movies and shows
// http://localhost:8011/5
exports.All = (req, res) => {
    video.find()
        .then(
            result => {
                res.status(200).json({
                    message: "Data fetched sucess",
                    data: result
                })
            }
        )
        .catch(
            error => {
                res.status(500).json({
                    message: "DB error occured",
                    data: error
                })
            }
        )
}

