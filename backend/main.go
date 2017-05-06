package main

import (
	"log"
	"fmt"
	"github.com/manyminds/api2go"
	"github.com/julienschmidt/httprouter"
	"net/http"
	"github.com/slemgrim/whitefox/backend/storage"
	"github.com/slemgrim/whitefox/backend/model"
	"github.com/slemgrim/whitefox/backend/resource"
	"github.com/slemgrim/whitefox/backend/resolver"
	"github.com/slemgrim/whitefox/backend/config"
)

func main() {
	config, err := config.ReadConfig("config.json")

	if err != nil {
		log.Fatal(err);
	}

	api := api2go.NewAPIWithResolver(config.Api.Version, &resolver.RequestURL{Port: config.Http.Port})
	codeStorage := storage.NewCodeStorage()
	api.AddResource(model.Code{}, resource.CodeResource{CodeStorage: codeStorage})

	fmt.Printf("Listening on :%d", config.Http.Port)
	handler := api.Handler().(*httprouter.Router)

	http.ListenAndServe(fmt.Sprintf(":%d", config.Http.Port), handler)
}