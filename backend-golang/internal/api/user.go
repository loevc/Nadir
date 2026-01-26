package api


import (
"github.com/gin-gonic/gin"
"github.com/loevc/Nadir/backend-golang/internal/service"
"github.com/loevc/Nadir/backend-golang/pkg/response"
)


func Ping(c *gin.Context) {
response.Success(c, "pong")
}


func Login(c *gin.Context) {
token, _ := service.Login()
response.Success(c, gin.H{"token": token})
}


func GetUser(c *gin.Context) {
id := c.Param("id")
user, err := service.GetUserByID(id)
if err != nil {
response.Error(c, err.Error())
return
}
response.Success(c, user)
}