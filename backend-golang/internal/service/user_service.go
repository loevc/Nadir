package service


import (
"errors"
"github.com/loevc/Nadir/backend-golang/internal/model"
"github.com/loevc/Nadir/backend-golang/internal/repository"
)


func GetUserByID(id string) (*model.User, error) {
user := repository.FindUserByID(id)
if user == nil {
return nil, errors.New("user not found")
}
return user, nil
}


func Login() (string, error) {
return "mock-jwt-token", nil
}