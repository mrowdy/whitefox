package resource

import (
	"errors"
	"net/http"
	"github.com/manyminds/api2go"
	"github.com/slemgrim/whitefox/backend/model"
	"github.com/slemgrim/whitefox/backend/storage"
)

type CodeResource struct {
	CodeStorage *storage.CodeStorage
}

func (s CodeResource) FindAll(r api2go.Request) (api2go.Responder, error) {
	var result []model.Code
	codes := s.CodeStorage.GetAll()

	for _, code := range codes {
		result = append(result, *code)
	}

	return &Response{Res: result}, nil
}

func (s CodeResource) FindOne(ID string, r api2go.Request) (api2go.Responder, error) {
	code, err := s.CodeStorage.GetOne(ID)
	if err != nil {
		return &Response{}, api2go.NewHTTPError(err, err.Error(), http.StatusNotFound)
	}

	return &Response{Res: code}, nil
}

func (s CodeResource) Create(obj interface{}, r api2go.Request) (api2go.Responder, error) {
	code, ok := obj.(model.Code)
	if !ok {
		return &Response{}, api2go.NewHTTPError(errors.New("Invalid instance given"), "Invalid instance given", http.StatusBadRequest)
	}

	id := s.CodeStorage.Insert(code)
	code.Code = id

	return &Response{Res: code, Code: http.StatusCreated}, nil
}

func (s CodeResource) Delete(id string, r api2go.Request) (api2go.Responder, error) {
	err := s.CodeStorage.Delete(id)
	return &Response{Code: http.StatusNoContent}, err
}

func (s CodeResource) Update(obj interface{}, r api2go.Request) (api2go.Responder, error) {
	code, ok := obj.(model.Code)
	if !ok {
		return &Response{}, api2go.NewHTTPError(errors.New("Invalid instance given"), "Invalid instance given", http.StatusBadRequest)
	}

	err := s.CodeStorage.Update(code)
	return &Response{Res: code, Code: http.StatusNoContent}, err
}