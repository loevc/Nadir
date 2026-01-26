package router


import (
"github.com/gin-gonic/gin"
"github.com/loevc/Nadir/backend-golang/internal/api"
"github.com/loevc/Nadir/backend-golang/internal/middleware"
)


func InitRouter() *gin.Engine {
r := gin.Default()


r.Use(middleware.RequestLogger())


apiGroup := r.Group("/api")
{
apiGroup.GET("/ping", api.Ping)
apiGroup.POST("/login", api.Login)
apiGroup.GET("/user/:id", middleware.JWTAuth(), api.GetUser)
}


return r
}