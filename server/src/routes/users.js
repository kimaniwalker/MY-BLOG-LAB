import { Router } from 'express';
import Table from '../table';

let router = Router();

let authors = new Table('authors');

router.get('/', (req, res) => {
    authors.getAll()
        .then(authors => {
            res.json(authors);
        })
});

router.get('/create', (req,res) => {
let author = {
    name: 'Don Lowkeyy',
    email: 'key@123.com'

}

authors.insert(author)
.then(id => {
    res.json(id);
})
})

export default router;