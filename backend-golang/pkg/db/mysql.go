// pkg/db/mysql.go
package db

import (
    "gorm.io/driver/mysql"
    "gorm.io/gorm"
    "github.com/loevc/Nadir/backend-golang/internal/config"
)

var DB *gorm.DB

func Init() error {
    var err error
    DB, err = gorm.Open(mysql.Open(config.Cfg.Database.DSN), &gorm.Config{})
    return err
}
