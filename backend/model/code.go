package model

type Code struct {
	Code   string     `json:"-" gorm:"primary_key"`
	Label  string     `json:"label"`
	IsUsed bool       `json:"is-used"`
}

func (u Code) GetID() string {
	return u.Code
}

func (u *Code) SetID(id string) error {
	u.Code = id
	return nil
}