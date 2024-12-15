### Lệnh build image docker

docker build -t <tên_image> .

### Tạo container

docker run -d -p 3070:3069 --name bc_media bc_media:latest

### Kiểm tra image list

docker images or docker image ls

### Xóa image cũ

docker image remove ten_container or id_container
alias: docker rmi ten_container or id_container

### Stop container

docker container stop ten_container or id_container

### Xóa container

docker container remove ten_container or id_container

### Kiểm tra container đang chạy

docker ps

### Tạo docker compose - có file docker-compose.yml

docker compose up -d

### Đánh tag trước khi push lên Docker Hub đúng account nào cần đẩy lên

docker tag bc_media fuderrpham/bc_media
