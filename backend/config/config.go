package config

import (
	"encoding/json"
	"io/ioutil"
)

type Config struct {
	Http HttpConfig
	Api  ApiConfig
}

type HttpConfig struct {
	Port int
}

type ApiConfig struct {
	Version string
}

func ReadConfig(file string) (config *Config, err error) {
	configJson, err := ioutil.ReadFile(file)

	if err != nil {
		return config, err
	}

	err = json.Unmarshal(configJson, &config)
	if err != nil {
		return config, err
	}

	return config, err
}