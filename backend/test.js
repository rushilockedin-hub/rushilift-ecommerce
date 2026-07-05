import dns from "dns";

dns.resolveSrv(
  "_mongodb._tcp.cluster0.l4wqpr4.mongodb.net",
  (err, records) => {
    console.log("ERR:", err);
    console.log("RECORDS:", records);
  }
);
