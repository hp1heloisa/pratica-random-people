import { personServices } from "@/services/person.services"
import { Request, Response } from "express";

export default async function getPerson(req: Request, res: Response){
    const people = await personServices.getPerson();
    res.send(people);
}
