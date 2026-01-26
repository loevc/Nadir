package middleware


import (
"github.com/gin-gonic/gin"
"net/http"
)


func JWTAuth() gin.HandlerFunc {
return func(c *gin.Context) {
token := c.GetHeader("Authorization")
if token == "" {
c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"msg": "missing token"})
return
}
c.Next()
}
}