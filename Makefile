all: build_img rm_container run_container

build_img:
	docker build -f Dockerfile -t json-single-line-nginx .

rm_container:
	docker rm -f json-single-line-nginx

run_container:
	docker run -d -p 8085:80 --name json-single-line-nginx json-single-line-nginx