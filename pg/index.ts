import { PrismaClient } from "@prisma/client";

(async () => {
    const prisma = new PrismaClient();
    const start = Date.now();

    await prisma.$connect();

    const result = await prisma.component.findMany({
        cursor: undefined, // first page doesn't provide cursor
        orderBy: {created: 'asc'},
        skip: 0,  // excluding this doesn't make a difference
        take: 21,
        where: {
            libraryObj: { type: 'GENERAL' }
        }
    });

    console.log(`${result.length} results returned in ${Date.now() - start}ms`);

    await prisma.$disconnect();
})();