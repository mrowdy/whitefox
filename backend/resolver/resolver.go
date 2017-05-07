package resolver

import (
	"fmt"
	"net/http"
)

type RequestURL struct {
	r    http.Request
	Port int
}

func (m *RequestURL) SetRequest(r http.Request) {
	m.r = r
}

func (m RequestURL) GetBaseURL() string {
	if uri := m.r.Header.Get("REQUEST_URI"); uri != "" {
		return uri
	}

	return fmt.Sprintf("http://localhost:%d", m.Port)
}