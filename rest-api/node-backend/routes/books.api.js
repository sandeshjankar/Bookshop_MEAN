const express = require('express');
const app = express();
const bookRoute = express.Router();
let Book = require("../model/Book")

//Add Book
bookRoute.route('/add-book').post((req, res, next) => {
    Book.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

//Get all book from store
bookRoute.route('/').get((req, res) => {
    Book.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});


//Get Book By ID

bookRoute.route('/read-book/:id').get((req, res) => {
    Book.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

//Update Book By ID

bookRoute.route('/update-book/:id').put((req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, {
        $set: req.body
    },
        (error, data) => {
            if (error) {
                return next(error);
                console.log(error);
            } else {
                res.json(data);
                console.log('Bood updated Successfully')
            }
        })
})

//Delete Book By ID

bookRoute.route('/delete-book/:id').get((req, res, next) => {
    Book.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(data);
        }
    })
})

module.exports = bookRoute;