# Build CI Pipeline

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

### push lên Docker Hub đúng account nào cần đẩy lên - docker login

docker push fuderrpham/bc_media

# Server & CD Pipeline

### Tương tác cấp quyền cho keypair:

```bash
Check pwd on WSL
pwd
cp key-pair.pem ~/
cd ~/
chmod 400 key-pair.pem
ls -l key-pair.pem

ssh -i "~/key-pair.pem" ubuntu@ec2...
```

### Lệnh tạo mới thư mục và file

mkdir ten_thu_muc

### Di chuyển

cd ten_duong_dan đi vào
cd ../ đi ra

### Tạo file mới

touch docker-compose.yml

### truy cập terminal của Container

docker exec -it container_id_name /bin/sh

### KIểm tra log của container

docker logs container_id_Or_name

### Tải vi nếu chưa có

apt-get update && apt-get install -y vim
