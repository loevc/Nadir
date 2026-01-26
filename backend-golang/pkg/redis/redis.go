package redis

import (
    "github.com/go-redis/redis/v8"
    "context"
    "github.com/loevc/Nadir/backend-golang/internal/config"
)

var Client *redis.Client
var Ctx = context.Background()

func Init() {
    Client = redis.NewClient(&redis.Options{
        Addr:     config.Cfg.Redis.Addr,
        Password: config.Cfg.Redis.Password,
    })
}
