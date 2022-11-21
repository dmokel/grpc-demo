import * as grpc from '@grpc/grpc-js';
import { chat } from './chat';

class Chat extends chat.UnimplementedChatServiceService {
  SayHello(call: grpc.ServerUnaryCall<chat.Message, chat.Response>, callback: grpc.sendUnaryData<chat.Response>): void {
    console.log("SayHello Called");
    callback(null, new chat.Response({ body: `New Message: ${call.request.body}` }))
  }
  GetDetails(call: grpc.ServerUnaryCall<chat.Details, chat.Response>, callback: grpc.sendUnaryData<chat.Response>): void {
    console.log("GetDetails Called");
    callback(null, new chat.Response({ body: `Your name is ${call.request.name} and you're ${call.request.age} 9000years old` }))
  }
}

const server = new grpc.Server();
server.addService(chat.UnimplementedChatServiceService.definition, new Chat());
server.bindAsync(
  "0.0.0.0:9000",
  grpc.ServerCredentials.createInsecure(),
  () => server.start()
);
