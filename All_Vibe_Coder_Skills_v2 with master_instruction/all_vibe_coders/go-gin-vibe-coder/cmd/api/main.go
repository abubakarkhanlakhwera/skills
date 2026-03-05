package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Group routes by version/domain — never dump everything here
	api := r.Group("/api/v1")
	{
		api.GET("/health", healthHandler)
	}

	r.Run(":8080")
}

func healthHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"status": "ok", "message": "Copilot SKILL.md is active."})
}
