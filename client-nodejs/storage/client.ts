import * as grpc from "@grpc/grpc-js";
import { Query, StorageClient } from "./storage";

const storage = new StorageClient("0.0.0.0:4884", grpc.credentials.createInsecure());
storage.get(new Query({ id: "Mokel" }), (res, ret) => {
  console.log("res:", res);
  console.log("ret:", ret?.name);
});
