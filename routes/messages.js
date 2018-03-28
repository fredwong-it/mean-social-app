const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const Message = require('../models/message');

router.get('/', function (req, res, next) {
    Message.find()
        .exec(function (err, messages) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }

            res.status(200).json({
                message: 'Success',
                obj: messages
            });
        });
});

router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }

        next();
    });
});

router.post('/', function (req, res, next) {
    const message = new Message({
        content: req.body.content
    });

    message.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        res.status(201).json({
            message: 'Saved message',
            obj: result
        });
    });
});

router.patch('/:id', function (req, res, next) {
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        if (!message) {
            return res.status(500).json({
                title: 'An error occurred',
                error: { message: 'Message not found' }
            });
        }

        message.content = req.body.content;
        message.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
    
            res.status(200).json({
                message: 'Updated message',
                obj: result
            });
        });
    });
});

router.delete('/:id', function(req, res, next) {
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        if (!message) {
            return res.status(500).json({
                title: 'An error occurred',
                error: { message: 'Message not found' }
            });
        }

        message.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
    
            res.status(200).json({
                message: 'Updated message',
                obj: result
            });
        });
    });
});

module.exports = router;
