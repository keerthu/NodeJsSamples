import db from "./utils/database.js";
import Customer from "./models/customer.js";
import Order from "./models/order.js";

db.sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));
