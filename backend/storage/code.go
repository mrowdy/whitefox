package storage

import (
	"errors"
	"fmt"
	"github.com/slemgrim/whitefox/backend/model"
	"github.com/jinzhu/gorm"
)


func NewCodeStorage(db *gorm.DB) *CodeStorage {
	if !db.HasTable(&model.Code{}) {
		fmt.Println("Create Code Storage")
		db.CreateTable(&model.Code{})
		db.Model(&model.Code{}).AddUniqueIndex("idx_user_name", "code")
	}

	return &CodeStorage{make(map[string]*model.Code), 1, db}
}

type CodeStorage struct {
	codes   map[string]*model.Code
	idCount int
	db *gorm.DB
}

func (s CodeStorage) GetAll() []model.Code {
	codes := []model.Code{}
	s.db.Find(&codes)
	return codes
}

func (s CodeStorage) GetOne(id string) (model.Code, error) {
	code := model.Code{}
	s.db.Where("code = ?", id).First(&code)

	if code.Code != "" {
		return code, nil
	}

	return model.Code{}, errors.New(fmt.Sprintf("Code with id %s not found", id))
}

func (s *CodeStorage) Insert(c model.Code) string {
	s.db.Create(&c)
	return c.Code
}

func (s *CodeStorage) Delete(id string) error {
	code := model.Code{}
	s.db.Where("code = ?", id).First(&code)

	if code.Code == "" {
		return fmt.Errorf("Code with id %s does not exist", id)
	}

	s.db.Where("code = ?", id).Delete(&code)

	return nil
}

func (s *CodeStorage) Update(c model.Code) error {
	if c.Code == "" {
		return fmt.Errorf("Code does not exist")
	}
	s.db.Save(&c)
	return nil
}