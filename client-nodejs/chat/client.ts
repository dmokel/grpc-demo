import * as grpc from "@grpc/grpc-js";
import { chat } from "./chat";

const storage = new chat.ChatServiceClient("0.0.0.0:9000", grpc.credentials.createInsecure());

storage.SayHello(new chat.Message({ body: 'Hello from Trojan' }), (res, ret) => {
  console.log("res:", res);
  console.log("ret:", ret?.body);
});

storage.GetDetails(new chat.Details({ name: 'Trojan', age: 40 }), (res, ret) => {
  console.log("res:", res);
  console.log("ret:", ret?.body);
});
