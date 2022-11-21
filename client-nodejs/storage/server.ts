import * as grpc from "@grpc/grpc-js";
import { Query, Response, UnimplementedStorageService } from "./storage";

class Storage extends UnimplementedStorageService {
  get(call: grpc.ServerUnaryCall<Query, Response>, callback: grpc.requestCallback<Response>): void {
    console.log(call.request.id);
    callback(null, new Response({ name: call.request.id } as any));
  }
}

const server = new grpc.Server();

server.addService(UnimplementedStorageService.definition, new Storage());

server.bindAsync(
  "0.0.0.0:4884",
  grpc.ServerCredentials.createInsecure(),
  () => server.start()
);
