package config


import (
"github.com/spf13/viper"
)


type Config struct {
App struct {
Name string
Port int
}
Database struct {
DSN string
}
Redis struct {
Addr string
Password string
}
JWT struct {
Secret string
}
}


var Cfg Config


func Init() {
viper.SetConfigName("config")
viper.SetConfigType("yaml")
viper.AddConfigPath("configs")


if err := viper.ReadInConfig(); err != nil {
panic(err)
}


if err := viper.Unmarshal(&Cfg); err != nil {
panic(err)
}
}