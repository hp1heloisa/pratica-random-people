import { connection } from "@/database/database-connection"
import { Person } from "@/protocols/person.protocol";

async function getPerson() {
    const people = await connection.query<Person>(`SELECT * FROM people ORDER BY RANDOM() LIMIT 1;`);
    return people.rows[0];
}

export const personRepository = {
    getPerson
}