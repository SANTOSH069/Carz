package main

import (
	"bytes"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"io"
	"mime/multipart"
	"net/http"
	"os"
)

func main() {
	godotenv.Load()

	r := gin.Default()
	r.POST("/upload", uploadImage)

	r.Run(":5000")
}

func uploadImage(c *gin.Context) {
	file, err := c.FormFile("image")
	if err != nil {
		c.JSON(400, gin.H{"message": "There was an error fetching the file !"})
		return
	}
	src, _ := file.Open()
	defer src.Close()

	body := &bytes.Buffer{}
	writer := multipart.NewWriter(body)

	part, _ := writer.CreateFormFile("image", file.Filename)
	io.Copy(part, src)

	writer.WriteField("quality", "medium")
	writer.Close()

	req, _ := http.NewRequest("POST", "", body)

	req.Header.Set("Authorization", "Bearer"+os.Getenv("MESHY API KEY"))

	client := &http.Client{}
	res, err := client.Do(req)
	if err != nil {
		c.JSON(500, gin.H{"message": "There was an error while loading !"})
		return
	}

	defer res.Body.Close()

	resBody, _ := io.ReadAll(res.Body)

	c.Data(200, "application/json", resBody)

}
