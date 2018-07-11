import { Router } from 'express';
import Table from '../table';

let router = Router();

let blogs = new Table('blogs');

router.get('/', (req, res) => {
    blogs.getAll()
        .then(blogs => {
            res.json(blogs);
        })
});

router.post('/', (req,res) => {
let blog = req.body;

blogs.insert(blog)
.then(id => {
    res.json(id);
})
})

export default router;