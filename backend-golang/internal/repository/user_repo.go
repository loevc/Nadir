package repository


import "github.com/loevc/Nadir/backend-golang/internal/model"


func FindUserByID(id string) *model.User {
if id == "1" {
return &model.User{ID: "1", Name: "Alice"}
}
return nil
}