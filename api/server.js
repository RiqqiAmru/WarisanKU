const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  // Contoh data budaya Indonesia
  const budayaData = [
    {
      id: 1,
      name: "Wayang Kulit",
      description: "Seni pertunjukan tradisional Indonesia.",
    },
    { id: 2, name: "Batik", description: "Seni tekstil khas Indonesia." },
    // Tambahkan data budaya lainnya...
  ];

  // Definisikan rute untuk mendapatkan semua budaya
  server.route({
    method: "GET",
    path: "/api/budaya",
    handler: (request, h) => {
      return { data: budayaData };
    },
  });

  // Definisikan rute untuk mendapatkan satu budaya berdasarkan ID
  server.route({
    method: "GET",
    path: "/api/budaya/{id}",
    handler: (request, h) => {
      const id = parseInt(request.params.id);
      const budaya = budayaData.find((item) => item.id === id);

      if (!budaya) {
        return h.response({ error: "Budaya not found" }).code(404);
      }

      return { data: budaya };
    },
  });

  // Mulai server
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
