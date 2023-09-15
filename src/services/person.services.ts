import { personRepository } from "@/repositories/person.repository"

async function getPerson() {
    return await personRepository.getPerson();
}

export const personServices = {
    getPerson
}