.PHONY: build
build: 
	rm -rf deployment/*
	cd game-control && make build
	cd game-score && make build
	cd game-session && make build