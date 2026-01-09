package main

import (
	"fmt"
	"os"
)

func AddTwo(a int, b int) {
	res := a + b
	fmt.Print(res)
}

func ReadFile() {
	file, err := os.ReadFile("sample.txt")
	if err != nil {
		fmt.Println("There was an errorr in handling the file !")
	}
	fmt.Print(string(file))
}
