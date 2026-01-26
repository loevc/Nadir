package main


import (
"github.com/loevc/Nadir/backend-golang/internal/config"
"github.com/loevc/Nadir/backend-golang/internal/router"
)


func main() {
config.Init()
r := router.InitRouter()
r.Run(":8080")
}