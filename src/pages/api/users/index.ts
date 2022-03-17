import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id:1, name:'João'},
        { id:2, name:'Vitor'},
        { id:3, name:'Coelho'},
    ]
    return response.json(users)
}