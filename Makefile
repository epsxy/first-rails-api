.PHONY: docker

docker:
	docker-compose build && docker-compose up
