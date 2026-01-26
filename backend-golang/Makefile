run:
	go run cmd/server/main.go

build:
	go build -o server cmd/server/main.go

docker-build:
	docker build -t backend-golang:latest .

docker-run:
	docker run -p 8080:8080 backend-golang:latest
