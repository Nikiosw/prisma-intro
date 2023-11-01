const prisma = require("../prisma");

const seed = async () => {
  const authorData = await prisma.author.create({
    data: {
      name: " Michelle walsh",
      books: {
        create: [
          { title: "Midnight Sun" },
          { title: "Hawthorn" },
        ],
      },
    },
  });

  await prisma.author.create({
    data: {
      name: "Samuel Elkin",
      books: {
        create: [
          { title: "The Student" },
          
        ],
      },
    },
  });

  await prisma.author.create({
    data: {
      name: "Timothy Smalls",
      books: {
        create: [
          { title: "Traveller" },
          
        ],
      },
    },
  });

  await prisma.author.create({
    data: {
      name: "Karen Fukuhara",
      books: {
        create: [
          { title: "Lost Girl" },
          
        ],
      },
    },
  });
  await prisma.author.create({
    data: {
      name: "Elizabeth Trudeau",
      books: {
        create: [
          { title: "Blind" },
          
        ],
      },
    },
  });
};


seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
