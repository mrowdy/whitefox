package storage

import (
	"errors"
	"fmt"
	"net/http"
	"github.com/manyminds/api2go"
	"github.com/slemgrim/whitefox/backend/model"
)

func NewCodeStorage() *CodeStorage {
	return &CodeStorage{make(map[string]*model.Code), 1}
}

type CodeStorage struct {
	codes   map[string]*model.Code
	idCount int
}

func (s CodeStorage) GetAll() map[string]*model.Code {
	return s.codes
}

func (s CodeStorage) GetOne(id string) (model.Code, error) {
	code, ok := s.codes[id]
	if ok {
		return *code, nil
	}
	errMessage := fmt.Sprintf("Code for id %s not found", id)
	return model.Code{}, api2go.NewHTTPError(errors.New(errMessage), errMessage, http.StatusNotFound)
}

func (s *CodeStorage) Insert(c model.Code) string {
	id := fmt.Sprintf("%d", s.idCount)
	c.Code = id
	s.codes[id] = &c
	s.idCount++
	return id
}

func (s *CodeStorage) Delete(id string) error {
	_, exists := s.codes[id]
	if !exists {
		return fmt.Errorf("Code with id %s does not exist", id)
	}
	delete(s.codes, id)

	return nil
}

func (s *CodeStorage) Update(c model.Code) error {
	_, exists := s.codes[c.Code]
	if !exists {
		return fmt.Errorf("Code with id %s does not exist", c.Code)
	}
	s.codes[c.Code] = &c

	return nil
}