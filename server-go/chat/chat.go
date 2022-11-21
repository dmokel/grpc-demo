package chat

import (
	"context"
	"fmt"
	"log"
)

// Server ...
type Server struct {
	UnimplementedChatServiceServer
}

// SayHello ...
func (s *Server) SayHello(ctx context.Context, message *Message) (*Response, error) {
	log.Println("SayHello Called")
	return &Response{Body: fmt.Sprintf("New Message: %s", message.Body)}, nil
}

// GetDetails ...
func (s *Server) GetDetails(ctx context.Context, message *Details) (*Response, error) {
	log.Println("GetDetails Called")
	return &Response{Body: fmt.Sprintf("Your name is %s and you're %d years old", message.Name, message.Age)}, nil
}

var _ ChatServiceServer = new(Server)
