package main

import "fmt"

type contactInfo struct {
	email   string
	zipcode int
}

type person struct {
	firstName   string
	lastName    string
	contactInfo contactInfo
}

func main() {
	Jim := person{
		firstName: "Jim",
		lastName:  "Halpert",
		contactInfo: contactInfo{
			email:   "notsohalpert@theofficeus.com",
			zipcode: 94000,
		},
	}

	(&Jim).updateFirstName("Jimmy")
	Jim.print()

}

func (p person) print() {
	fmt.Printf("%+v", p)
}

func (personPointer *person) updateFirstName(newName string) {
	(*personPointer).firstName = newName
}
