package resolver

import (
	"fmt"
	"net/http"
)

type RequestURL struct {
	r    http.Request
	Port int
}

//SetRequest to implement `RequestAwareResolverInterface`
func (m *RequestURL) SetRequest(r http.Request) {
	m.r = r
}

//GetBaseURL implements `URLResolver` interface
func (m RequestURL) GetBaseURL() string {
	if uri := m.r.Header.Get("REQUEST_URI"); uri != "" {
		return uri
	}

	return fmt.Sprintf("http://localhost:%d", m.Port)
}