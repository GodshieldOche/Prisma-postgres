const express = require('express');
const {PrismaClient} = require('@prisma/client')


const app = express();


const prisma = new PrismaClient()

const { user, profile, post} = prisma


app.use(express.json())


app.post('/user', async (req, res) => {
    const { email, name } = req.body
    
    const users = await user.create({
        data: {
            email,
            name
        }
    })

    res.status(201).json(users)

})


app.post('/post', async (req, res) => {
    const { title, content, published, authorId } = req.body

    const createdPost = await post.create({
        data: {
            title,
            content,
            published,
            authorId 
        }
    })

    res.status(201).json(createdPost)

})


app.get('/', async (req, res) => {
    const users = await user.findMany()
    console.log(users)
    res.send('Hello World!');
})




app.listen(3000, () => { console.log('Server started on port 3000') });