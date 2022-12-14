/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.9
 * source: chat.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as grpc_1 from "@grpc/grpc-js";
import * as pb_1 from "google-protobuf";
export namespace chat {
    export class Message extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            body?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("body" in data && data.body != undefined) {
                    this.body = data.body;
                }
            }
        }
        get body() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set body(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            body?: string;
        }): Message {
            const message = new Message({});
            if (data.body != null) {
                message.body = data.body;
            }
            return message;
        }
        toObject() {
            const data: {
                body?: string;
            } = {};
            if (this.body != null) {
                data.body = this.body;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.body.length)
                writer.writeString(1, this.body);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Message {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Message();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.body = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Message {
            return Message.deserialize(bytes);
        }
    }
    export class Details extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
            age?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("age" in data && data.age != undefined) {
                    this.age = data.age;
                }
            }
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get age() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set age(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            name?: string;
            age?: number;
        }): Details {
            const message = new Details({});
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.age != null) {
                message.age = data.age;
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
                age?: number;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.age != null) {
                data.age = this.age;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.name.length)
                writer.writeString(1, this.name);
            if (this.age != 0)
                writer.writeInt32(2, this.age);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Details {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Details();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 2:
                        message.age = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Details {
            return Details.deserialize(bytes);
        }
    }
    export class Response extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            body?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("body" in data && data.body != undefined) {
                    this.body = data.body;
                }
            }
        }
        get body() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set body(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            body?: string;
        }): Response {
            const message = new Response({});
            if (data.body != null) {
                message.body = data.body;
            }
            return message;
        }
        toObject() {
            const data: {
                body?: string;
            } = {};
            if (this.body != null) {
                data.body = this.body;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.body.length)
                writer.writeString(1, this.body);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Response {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Response();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.body = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Response {
            return Response.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedChatServiceService {
        static definition = {
            SayHello: {
                path: "/chat.ChatService/SayHello",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: Message) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => Message.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: Response) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => Response.deserialize(new Uint8Array(bytes))
            },
            GetDetails: {
                path: "/chat.ChatService/GetDetails",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: Details) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => Details.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: Response) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => Response.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract SayHello(call: grpc_1.ServerUnaryCall<Message, Response>, callback: grpc_1.sendUnaryData<Response>): void;
        abstract GetDetails(call: grpc_1.ServerUnaryCall<Details, Response>, callback: grpc_1.sendUnaryData<Response>): void;
    }
    export class ChatServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedChatServiceService.definition, "ChatService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        SayHello: GrpcUnaryServiceInterface<Message, Response> = (message: Message, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<Response>, options?: grpc_1.CallOptions | grpc_1.requestCallback<Response>, callback?: grpc_1.requestCallback<Response>): grpc_1.ClientUnaryCall => {
            return super.SayHello(message, metadata, options, callback);
        };
        GetDetails: GrpcUnaryServiceInterface<Details, Response> = (message: Details, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<Response>, options?: grpc_1.CallOptions | grpc_1.requestCallback<Response>, callback?: grpc_1.requestCallback<Response>): grpc_1.ClientUnaryCall => {
            return super.GetDetails(message, metadata, options, callback);
        };
    }
}
