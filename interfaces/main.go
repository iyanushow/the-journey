package main

import "fmt"

type bot interface {
	getGreeting() string
}
type englishBot struct{}
type spanishBot struct{}

func main() {
	eb := englishBot{}
	sb := spanishBot{}

	fmt.Println(eb.getGreeting())
	fmt.Println(sb.getGreeting())

}

func (englishBot) getGreeting() string {
	return "Hello There"
}

func (spanishBot) getGreeting() string {
	return "Hola"
}

func printGreeting(b bot) {
	b.getGreeting()
}
